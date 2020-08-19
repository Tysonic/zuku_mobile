import React from 'react'
import {styles} from '../styles'
import {ScrollView,Text, Image, Button,TextInput, View,
    TouchableOpacity

} from 'react-native'


export default class App extends React.Component{
    state = {
        email:null,
        username:null,
        password:null
    }

    handleUsename = (username)=> {this.setState({username})}
    handleEmail = (email)=> {this.setState({email})}
    handlePhone = (phone)=> {this.setState({phone})}
    handlePassword = (password) => {this.setState({ password })}
    handleConfirmPassword = (confirmpassword) => {this.setState({ confirmpassword })}


    handleSubmit = (e) => {
        
        fetch("https://zuku-backend.herokuapp.com/register client",
        {
        method:'POST',
        body:JSON.stringify(this.state),
        headers:{'Content-Type' : 'application/json'}
        })
        .then(response => response.json())
        .then((res) =>res.result==='success' ? 
        this.props.navigation.navigate('Login'):alert(JSON.stringify(res)))
    }       


    valueCheck=()=>{
        this.state.username ===null ? alert("Username required"):
        this.state.email===null ? alert('Email required') :
        this.state.password===null ? alert("Password required") :
        this.state.password===this.state.confirmpassword ?
         this.handleSubmit(): alert("Password does not match")
    }
    

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <Image source={require('../assets/z.jpeg')} style={{marginTop:0,width:"100%"}} />
                <Text style={[styles.heading,{color:'white'}]}>Create an account</Text>
                <TextInput placeholder="Username" onChangeText={this.handleUsename} style={styles.inputs} /><Text/>
                <TextInput placeholder="Email" keyboardType={'email-address'} onChangeText={this.handleEmail} style={styles.inputs}/><Text/>
                <TextInput placeholder="Phone" onChangeText={this.handlePhone} style={styles.inputs}/><Text/>
                <TextInput placeholder="Password" secureTextEntry={true} onChangeText={this.handlePassword} style={styles.inputs} /><Text/>
                <TextInput placeholder="Confirm Password" secureTextEntry={true} onChangeText={this.handleConfirmPassword} style={styles.inputs} /><Text/>
                <View style={styles.login}>

                
                    <TouchableOpacity style={styles.submitButton} onPress={this.valueCheck}>
                    <View><Text >Sign Up</Text></View>
                    </TouchableOpacity>
                    
                    

                    <View style={{width: "20%", height: 50,
                                    backgroundColor: 'skyblue',
                                    alignContent:"center",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius:25,}} ><Text>Or</Text></View>

                
                    <TouchableOpacity  style={styles.submitButton} onPress={()=>this.props.navigation.navigate('Login')}>
                        <View ><Text>login</Text></View>
                    </TouchableOpacity></View>
                

                </ScrollView>
            </View>
        )
    }
}


