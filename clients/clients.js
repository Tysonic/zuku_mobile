import React from 'react';
import {Text, View, TextInput, ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'

export default class App extends React.Component {
  state={

  }

  componentDidMount() {
    fetch("https://zuku-backend.herokuapp.com/list client api")
      .then(response => response.json())
      .then(json => [
        json.clients.forEach(item=>
        item.username===global.user ? 
        this.setState({...item,client:item.id,isLoading: false}) : this.state)
      ])
      .catch(()=>[this.setState({isloading:false})
        ,alert("Please check internet connection and try again")]) 
}

logOutHandler = ()=>{
  fetch('https://zuku-backend.herokuapp.com/.logout user')
  this.props.navigation.navigate('Login')
  global.user=undefined
}

handleSubmit = (e)=>{
  console.log(this.state)
  fetch('https://zuku-backend.herokuapp.com/update client',
  {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(
   response => response.json()
  ).then(()=>this.props.navigation.navigate("Home"))
  .catch(()=>[this.setState({isloading:false})
    ,alert("Please check internet connection and try again")])
}

    handleFname=(fname)=>{this.setState({fname})}
    handleOname=(oname)=>{this.setState({oname})}
    handleUsername =(username)=>{this.setState({username})}
    handleTell=(tel)=>{this.setState({tel})}   
    
  render(){
    
  return (
      <ScrollView  style={styles.container}>
      <Text style={styles.heading}>Enter your details
      </Text>
      <TextInput editable={false} value={this.state.username} style={styles.inputs} onChangeText={this.handleUsername}/><Text></Text>
      <TextInput value={this.state.fname} placeholder='First Name' style={styles.inputs} onChangeText={this.handleFname}/><Text></Text>
      <TextInput value ={this.state.oname} placeholder='Other Name' style={styles.inputs} onChangeText = {this.handleOname}/><Text></Text>
      <TextInput value={this.state.tel} placeholder='Tell' style={styles.inputs} onChangeText = {this.handleTell} /><Text></Text>
      
        <TouchableOpacity style={styles.submitClient} onPress={()=>this.handleSubmit()}>
            <Text style={{textAlign:'center',margin:10}}>Submit</Text>
            </TouchableOpacity>
      </ScrollView>
      );}
}
