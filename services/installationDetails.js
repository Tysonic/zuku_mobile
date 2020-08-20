import React from 'react';
import {Text, View, TextInput, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import {styles} from '../styles'
import { timing } from 'react-native-reanimated';

export default class App extends React.Component {
  state={
      apart_no:"",
      estate:"",
      city:"",
      floor:"",
      isloading:false,
      address:"",
      install_id:""
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
    this.setState({isloading:true})
  fetch('https://zuku-backend.herokuapp.com/update installations',
  {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(
   response => response.json()
  ).then(()=>[
    this.setState({isloading:false}),
    this.props.navigation.navigate("Charges")])

}

    handleApartNo = (apart_no)=>{this.setState({apart_no})}
    handleFloor = (floor)=>{this.setState({floor})}
    handleEstate = (estate)=>{this.setState({estate})}
    handleCity = (city) => {this.setState({city})}
    handleAddress =(address) =>{this.setState({address})}


    
    
  render(){
    
  return (
      <ScrollView  style={styles.container}>
        {this.state.isloading===false ?
        <View>
      <Text style={styles.heading}>Enter Location details</Text>
        <TextInput value = {this.state.apart_no} placeholder="Apartment Number"  style={styles.inputs} onChangeText = {this.handleApartNo}/><Text></Text>
        <TextInput value = {this.state.city} placeholder='City' style={styles.inputs} onChangeText={this.handleCity}/><Text></Text>
        <TextInput value = {this.state.floor} placeholder='Floor Level' style={styles.inputs} onChangeText = {this.handleFloor}/><Text></Text>
        <TextInput value = {this.state.estate} placeholder='Estate or Building' style={styles.inputs} onChangeText={this.handleEstate}/><Text></Text>
        <TextInput value = {this.state.address} placeholder='Address' style={styles.inputs} onChangeText = {this.handleAddress}/><Text></Text>

      
        <TouchableOpacity style={styles.submitClient} onPress={()=>this.handleSubmit()}>
            <View ><Text style={{textAlign:'center',marginTop:10}}>Submit</Text></View>
            </TouchableOpacity>
        </View>

        :
        <ActivityIndicator size="100%"/>}
      </ScrollView>
      );}
}
