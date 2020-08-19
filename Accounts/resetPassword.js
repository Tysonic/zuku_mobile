import React from 'react'
import {View,Text,TextInput,TouchableOpacity,Image,ActivityIndicator,ScrollView} from 'react-native'
import {styles} from '../styles'

export default class App extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isloading:false,
            result:null,
            email:null,
            message:false,
    }

    }
    

    handleEmail = (email)=> {this.setState({email})}
    handlePassword = (password) => {this.setState({ password })}
    handleConfirmPassword = (confirmpassword) => {this.setState({ confirmpassword })}
    handleSubmitEmail=(e)=>{
        e.preventDefault()
        this.setState({isloading:true})
        fetch('https://zuku-backend.herokuapp.com/account check',
        {
            method:'post',
            body:JSON.stringify(this.state),
            headers:{'content-type':'application/json'}
        }).then(
            res =>res.json()
        ).then(
            data =>{
                [this.setState({isloading:false})
                ,data.result==='success' ? 
                this.setState({email:data.email,result:'success'}) : 
                this.setState({result:null,message:true,invalidEmail:data.email}) 
                ]
            })
        }


        handleResetPassword=(e)=>{
            this.setState({isloading:true}) 
            e.preventDefault()
            fetch('https://zuku-backend.herokuapp.com/reset password',
        {
            method:'post',
            body:JSON.stringify(this.state),
            headers:{'content-type':'application/json'}
        }).then(
            res =>res.text()
        ).then(
            data =>{
                [this.setState({isloading:false}), this.props.navigation.navigate("Login"),console.log(data)  ]         
            })
        }
       
    render(){
        
        return(
<ScrollView style={styles.container}>

    <Image source={require('../assets/z.jpeg')} style={{marginTop:0,width:"100%"}} />
    {this.state.isloading===true ?<ActivityIndicator size={200}/> :
    <View>
    {this.state.result===null ? 
    <View>
        {this.state.message===false?
        <Text style={[styles.heading,{color:'white'}]}>Enter email address</Text>
        :
        <Text style={[styles.heading,{color:'white'}]}>Email {this.state.invalidEmail}, {'\n'}is not registered</Text>
        }
        
        <TextInput placeholder="Email"  keyboardType={'email-address'} onChangeText={this.handleEmail} style={styles.inputs} /><Text/>
    
        <TouchableOpacity  style={styles.passwordReset}
            onPress={this.handleSubmitEmail}>
            <Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.submitButton,
            {marginLeft:'10%',
            backgroundColor:'#54a9ac',
            borderRadius:10,
            marginBottom:"10%",
            marginTop:'5%'
            }]} 
            onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>
    </View>
    : 
    <View style={{marginTop:'10%'}}>
    <TextInput placeholder="Password" secureTextEntry={true} onChangeText={this.handlePassword} style={styles.inputs} /><Text/>
    <TextInput placeholder="Confirm Password" secureTextEntry={true} onChangeText={this.handleConfirmPassword} style={styles.inputs} /><Text/>
    <TouchableOpacity  style={styles.passwordReset}
            onPress={this.handleResetPassword}>
            <Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>
        
    </View>
    }




        </View>
    }

</ScrollView>
)
}
}