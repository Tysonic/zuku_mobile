import React from 'react'
import {styles} from '../styles'
import {ScrollView,Text, Image, Button,TextInput, View,
    TouchableOpacity

} from 'react-native'


export default class App extends React.Component{

    handleUsename = (username)=> {this.setState({username})}
    handleEmail = (email)=> {this.setState({email})}
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
            
    

    render() {
        return (
            <View>
                <ScrollView>
                <Image source={require('../assets/zuku.jpeg')} style={{marginTop:0,width:"100%"}} />
                <Text style={styles.heading}>Welcome to Zuku{"\n"} Please Create an account</Text>
                <TextInput placeholder="Username" onChangeText={this.handleUsename} style={styles.inputs} /><Text/>
                <TextInput placeholder="Email" onChangeText={this.handleEmail} style={styles.inputs}/><Text/>
                <TextInput placeholder="Password" onChangeText={this.handlePassword} style={styles.inputs} /><Text/>
                <TextInput placeholder="Confirm Password" onChangeText={this.handleConfirmPassword} style={styles.inputs} /><Text/>
                <View style={styles.login}>

                <View style={styles.submitButton} >
                    <TouchableOpacity onPress={this.handleSubmit}>
                    <View><Text >Sign Up</Text></View>
                    </TouchableOpacity>
                    </View>
                    

                    <View style={{width: "20%", height: 50,
                                    backgroundColor: 'skyblue',
                                    alignContent:"center",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius:25,}} ><Text>Or</Text></View>

                <View style={styles.submitButton} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                        <View ><Text>login</Text></View>
                    </TouchableOpacity></View>
                </View>

                </ScrollView>
            </View>
        )
    }
}


