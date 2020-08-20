import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, Image } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';
import {styles} from './styles';
 
export default class Example extends Component {


logOutHandler = ()=>{
  fetch('https://zuku-backend.herokuapp.com/.logout user')
  this.props.navigation.navigate('Login')
  global.user=undefined
}


showAlert=()=> {
  Alert.alert(
      "Dear " + global.user + ',',
      'Are you sure you want to log out',
      [
          {
              text: 'Cancel',
              onPress: () => {},
              style: 'cancel',
          },
          {text: 'Log out', onPress: () => this.logOutHandler()},
      ]
  );
}
  
  render() {
    const items = [
      { name: 'Services', code: ()=>this.props.navigation.navigate("Services"), image:require('./assets/service2.jpeg')  },
      { name: 'Profile', code: ()=>this.props.navigation.navigate("Clients"), image:require('./assets/profile.png') },
      { name: 'My Connections', code:()=> this.props.navigation.navigate("Installation"), image:require('./assets/installation.png') },
      { name: 'Payments', code:()=> [alert("Please select a service to pay for!"),this.props.navigation.navigate("Installation")], image:require('./assets/charges.png')  },
      { name: 'About Us',code:()=> this.props.navigation.navigate("AboutUs"), image:require('./assets/About.jpeg')  },
      { name: 'Help',code:()=> this.props.navigation.navigate("Help"), image:require('./assets/Help.jpeg')  },

    ];

    
 
    return (
      <View  style={styles.container}>
        
        <View>
        <TouchableOpacity style={styles.logout} onPress={this.showAlert}>
          <Text>Logout</Text>
        </TouchableOpacity>
        </View>


      <SectionGrid
        itemDimension={160}
        sections={[
          {
            
            data: items.slice(0, 6),
          },
          
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={item.code} style=
          {[styles.itemContainer, { backgroundColor: "#418171",borderRadius:100}]}>
            <Image source={item.image} style=
            {{
              marginTop:0,width:'80%',
              height:'80%',
              borderRadius:100,
              alignSelf:"center",
              alignItems:"center"
              }} />
            <View style={styles.services}>
            <Text style={[styles.itemName,{textAlign:"center"}]}>{item.name}</Text>
            </View>
          </TouchableOpacity>)}
      />
      </View>
    );
  }
}
 