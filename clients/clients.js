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
      .catch((error) => console.error(error))   
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
}

    handleFname=(fname)=>{this.setState({fname})}
    handleOname=(oname)=>{this.setState({oname})}
    handleUsername =(username)=>{this.setState({username})}
    handleTell=(tel)=>{this.setState({tel})}
    handleApartNo = (apart_no)=>{this.setState({apart_no})}
    handleFloor = (floor)=>{this.setState({floor})}
    handleEstate = (estate)=>{this.setState({estate})}
    handleCity = (city) => {this.setState({city})}
    handleAddress =(address) =>{this.setState({address})}


    
    
  render(){
    
  return (
      <ScrollView  style={styles.container}>
      <Text style={styles.heading}>Enter your details
      </Text>
      <TextInput editable={false} value={this.state.username} style={styles.inputs} onChangeText={this.handleUsername}/><Text></Text>
      <TextInput value={this.state.fname} placeholder='First Name' style={styles.inputs} onChangeText={this.handleFname}/><Text></Text>
      <TextInput placeholder='Other Name' style={styles.inputs} onChangeText = {this.handleOname}/><Text></Text>
      <TextInput value={this.state.tel} placeholder='Tell' style={styles.inputs} onChangeText = {this.handleTell} /><Text></Text>
      <TextInput placeholder='Apartment Number' style={styles.inputs} onChangeText = {this.handleApartNo}/><Text></Text>
      <TextInput placeholder='City' style={styles.inputs} onChangeText={this.handleCity}/><Text></Text>
      <TextInput placeholder='Floor Level' style={styles.inputs} onChangeText = {this.handleFloor}/><Text></Text>
      <TextInput placeholder='Estate or Building' style={styles.inputs} onChangeText={this.handleEstate}/><Text></Text>
      <TextInput value = {this.state.address} placeholder='Address' style={styles.inputs} onChangeText = {this.handleAddress}/><Text></Text>

      <View   style={{width:'40%',backgroundColor:"#397", alignSelf: 'center', padding:20, borderRadius:10,}} >
        <TouchableOpacity onPress={()=>this.handleSubmit()}>
            <View ><Text style={{textAlign:'center'}}>Submit</Text></View>
            </TouchableOpacity>
        </View>
      </ScrollView>
      );}
}
