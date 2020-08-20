import React, { Component } from 'react';
import {View,Alert, Text,TouchableOpacity, ActivityIndicator} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {styles} from '../styles'

export default class Example extends Component {

    constructor(props) {
        super (props);
        this.state = {service:[],isloading:false}
     }
     
handleSubmit = (e)=>{
  this.setState({isloading:true})
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
  ).then(data=>[this.setState({isloading:false}),global.install=data.instal,this.props.navigation.navigate('InstallationsDetails')])
  .catch(()=>[this.setState({isloading:false}),alert("Please check internet connection and try again")])

}

services = global.services.services
serviceloop =()=>{
    let service=[]
for (let x=0;x<this.services.length;x++){
    if(this.services[x].package==="Internet only"){
        service.push(this.services[x])
    }
}
return(service)
}

showAlert1=()=> {
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
     
        <View   style={styles.container}>

          {this.state.isloading===true ? <ActivityIndicator size="100%"/>:
          <View>
        <TouchableOpacity  style={styles.logout}
          onPress={()=>this.props.navigation.navigate("Services")}>
           <Text style={styles.serviceGroupText}>More Services</Text>
        </TouchableOpacity>
        
      <FlatGrid
        itemDimension={130}
        data={this.serviceloop().sort((a,b)=>
          a.amount.toString().localeCompare(b.amount.toString()))}

        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={()=>(

            this.state.service=item.id,
            this.state.amount = item.amount,
            this.state.band=item.band,
            this.state.package = item.package,
            this.state.client=global.services.id,
            this.showAlert1()
            )}>

          <View style={styles.serviceContainer}>
            <Text style={styles.serviceItemText}>
            <Text >{item.package + '\n'}</Text>
                <Text >{item.band +'\n'}</Text>
                <Text>{'At '+item.amount +'Ugx'}</Text>
            </Text>
          </View>
          </TouchableOpacity>
        )}
      />
      
      </View>
  }
      </View>
      )}

}

