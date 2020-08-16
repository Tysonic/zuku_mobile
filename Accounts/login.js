import React from 'react'
import {styles} from '../styles'
import {ActivityIndicator,ScrollView,Text, Image, TextInput, View, TouchableOpacity} from 'react-native'


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:NaN,
            isloading:false,
        }
    }

    handleEmail = (email)=> {this.setState({email})}
    handlePassword = (password) => {this.setState({ password })}
    
    handleSubmit = (e) => {
        this.setState({isloading:true})
        e.preventDefault()
        fetch('https://zuku-backend.herokuapp.com/client login', 
        { method: 'POST',
        body:JSON.stringify(this.state),
        headers:{
            'content-type': 'application/json'}
         }
        ).then(
               response => response.json()
          ).then((data)=>[this.setState({isloading:false}),data.result==="success" ? [global.user=data.user,this.props.navigation.navigate('Home')]
          :alert("Username or password is incorrect")]
          )
    };
 
    
    

    render() {
        return (
            
            <View >
                <ScrollView>
                <Image source={require('../assets/z.jpeg')} style={{marginTop:0,width:"100%"}} />
                {this.state.isloading===true ?<ActivityIndicator size="large"/> :
                <Text style={[styles.heading,{color:'white'}]}>Login in to your accounts</Text>
                }
                
                <TextInput placeholder="Email"  keyboardType={'email-address'} onChangeText={this.handleEmail} style={styles.inputs} /><Text/>
                <TextInput placeholder="Password" secureTextEntry={true} onChangeText={this.handlePassword} style={styles.inputs} /><Text/>

                <View style={styles.login}>
                    
                    <TouchableOpacity  style={styles.submitButton} onPress={this.handleSubmit}>
                    <Text style={{color:'white'}}>login</Text>
                    </TouchableOpacity>

                    <View style={{width: "20%", height: 50,
                                    backgroundColor: 'skyblue',
                                    alignContent:"center",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius:25,}} ><Text>Or</Text></View>

                    
                    <TouchableOpacity style={styles.submitButton}  onPress={()=>this.props.navigation.navigate('Register')}>
                    <Text style={{color:'white'}}>Sign Up</Text>
                </TouchableOpacity>
                    
                </View>
                <TouchableOpacity style={[styles.submitButton,
                    {marginLeft:'10%',
                    backgroundColor:'#54a9ac',
                    borderRadius:10,
                    marginBottom:"10%"
                    }]}  onPress={()=>this.props.navigation.navigate('ResetPassword')}>
                    <Text  >Forgot password</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}


