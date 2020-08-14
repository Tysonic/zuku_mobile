import React, { Component } from 'react';
import {Alert,FlatList, ScrollView, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {styles} from '../styles'

export default class Example extends Component {

    constructor(props) {
        super (props);
        this.state = {service:[]}
     }
     
handleSubmit = (e)=>{
  console.log(this.state)
  fetch('https://zuku-backend.herokuapp.com/installations',
  {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(
   response => response.json()
  ).then(()=>this.props.navigation.navigate('Clients'))

}

services = global.services.services
serviceloop =()=>{
    let service=[]
for (let x=0;x<this.services.length;x++){
    if(this.services[x].package==='Residential Package'){
        service.push(this.services[x])
    }
}
return(service)
}

showAlert1=()=> {
    
console.log(global.services.services)
  Alert.alert(
      "Dear " + global.user + ',',
      'You are applying for :\n'+
      this.state.package + "\n"+
      'of ' +this.state.band + '\n'+
      'At ' +this.state.amount +'Ugx' + '\n'+
      'click Submit, to send else cancle\n',
      [
          {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
          },
          {text: 'Submit', onPress: () => this.handleSubmit()},
      ]
  );
}


  render() {
    return (
     
        <View>


<View style={styles.logout,{flex: 1,
      flexDirection: "row",
      backgroundColor:'#7ab',
      marginLeft:'10%',marginRight:'10%',borderRadius:10}}>
        <TouchableOpacity style={styles.submitButton} onPress={()=>this.props.navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={this.logOutHandler}>
          <Text>Logout</Text>
        </TouchableOpacity>
        </View>


          
        <View style={styles.logout}>
        <TouchableOpacity style={styles.submitButton} onPress={()=>this.props.navigation.navigate("Home")}>
           <Text>Back To Home</Text>
        </TouchableOpacity>
        </View>
      <FlatGrid
        itemDimension={130}
        data={this.serviceloop()}

        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={()=>(

            this.state.service=item.id,
            this.state.amount = item.amount,
            this.state.band=item.band,
            this.state.package = item.package,
            this.showAlert1()
            )}>

          <View style={[styles.itemContainer, { backgroundColor: '#050', borderBottomLeftRadius:50, borderTopRightRadius:50 }]}>
            <Text style={styles.itemCode}>
            <Text >{item.package + '\n'}</Text>
                <Text >{item.band +'\n'}</Text>
                <Text>{'At '+item.amount +'Ugx'}</Text>
            </Text>
          </View>
          </TouchableOpacity>
        )}
      />
      </View>
      )}

}

