import React from 'react'
import {styles} from '../styles'
import {ScrollView,Text, Image, TextInput, View, TouchableOpacity} from 'react-native'


export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:NaN
        }
    }

    handleEmail = (email)=> {this.setState({email})}
    handlePassword = (password) => {this.setState({ password })}
    
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://zuku-backend.herokuapp.com/client login', 
        { method: 'POST',
        body:JSON.stringify(this.state),
        headers:{
            'content-type': 'application/json'}
         }
        ).then(
               response => response.json()
          ).then((data)=>data.result==="success" ? [global.user=data.user,this.props.navigation.navigate('Home')]
          :alert("Username or password is incorrect")
          )
    };
 
    
    

    render() {
        return (
            
            <View >
                <ScrollView>
                <Image source={require('../assets/zuku.jpeg')} style={{marginTop:0,width:"100%"}} />
                <Text style={styles.heading}>Welcome to Zuku{"\n"} Please login to access your account</Text>
                <TextInput placeholder="Email"  keyboardType={'email-address'} onChangeText={this.handleEmail} style={styles.inputs} /><Text/>
                <TextInput placeholder="Password" secureTextEntry={true} onChangeText={this.handlePassword} style={styles.inputs} /><Text/>

                <View style={styles.login}>
                    <View style={styles.submitButton} >
                    <TouchableOpacity onPress={this.handleSubmit}>
                        <View ><Text>login</Text></View>
                    </TouchableOpacity></View>

                    <View style={{width: "20%", height: 50,
                                    backgroundColor: 'skyblue',
                                    alignContent:"center",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius:25,}} ><Text>Or</Text></View>

                    <View style={styles.submitButton} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
                    <View><Text >Sign Up</Text></View>
                </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}


