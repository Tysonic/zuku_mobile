import React from 'react';
import {Text, View, TextInput, ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import { timing } from 'react-native-reanimated';

export default class App extends React.Component {
  state={
      apart_no:"",
      estate:"",
      city:"",
      floor:"",
      address:""
  }

  componentDidMount(){
      this.setState({
          apart_no:global.install.apart_no,
          estate:global.install.estate,
          city:global.install.city,
          floor:global.install.floor,
          city:global.install.city

      })
  }

handleSubmit = ()=>{
    this.state.install_id=global.install.install_id

  fetch('https://zuku-backend.herokuapp.com/update installations',
  {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(
   response => response.json()
  ).then(data=>[global.install=data,alert(JSON.stringify(global.install)),this.props.navigation.navigate("Charges")]) 
}

    handleApartNo = (apart_no)=>{this.setState({apart_no})}
    handleFloor = (floor)=>{this.setState({floor})}
    handleEstate = (estate)=>{this.setState({estate})}
    handleCity = (city) => {this.setState({city})}
    handleAddress =(address) =>{this.setState({address})}


    
    
  render(){
    
  return (
      <ScrollView  style={styles.container}>
      <Text style={styles.heading}>Enter Location details</Text>
        <TextInput value = {this.state.apart_no} placeholder="Apartment Number"  style={styles.inputs} onChangeText = {this.handleApartNo}/><Text></Text>
        <TextInput value = {this.state.city} placeholder='City' style={styles.inputs} onChangeText={this.handleCity}/><Text></Text>
        <TextInput value = {this.state.floor} placeholder='Floor Level' style={styles.inputs} onChangeText = {this.handleFloor}/><Text></Text>
        <TextInput value = {this.state.estate} placeholder='Estate or Building' style={styles.inputs} onChangeText={this.handleEstate}/><Text></Text>
        <TextInput value = {this.state.address} placeholder='Address' style={styles.inputs} onChangeText = {this.handleAddress}/><Text></Text>

      <View   style={{width:'40%',backgroundColor:"#397", alignSelf: 'center', padding:20, borderRadius:10,}} >
        <TouchableOpacity onPress={()=>this.handleSubmit()}>
            <View ><Text style={{textAlign:'center'}}>Submit</Text></View>
            </TouchableOpacity>
        </View>
      </ScrollView>
      );}
}
