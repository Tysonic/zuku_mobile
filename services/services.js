import React, { Component } from 'react';
import {View, Text, ActivityIndicator, 
  TouchableOpacity} from 'react-native';
import {styles} from '../styles'
 
export default class Example extends Component {

  constructor(props) {
    super (props);
    this.state = {isLoading: true}
 }

componentDidMount() {
    fetch("https://zuku-backend.herokuapp.com/list services and clients")
      .then((response) => response.json())
      .then((json) => [this.setState({services:json.services,isLoading: false,})
          ,json.clients.forEach(item=>{if(item.username===global.user){[this.setState(({...item})),
          global.services=this.state]}})])
          .catch(()=>[this.setState({isloading:false}),
            alert("Please check internet connection and try again")])

          
}

  render() {  
    return (
      <View  style={styles.container}>
               {this.state.isLoading ? <ActivityIndicator size="100%"/> :
      (
       <View>


          <TouchableOpacity style={styles.serviceGroup} 
          onPress={()=>this.props.navigation.navigate("TriplePlay")}>
          <Text style={styles.serviceGroupText}>
              Triple Play
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceGroup} 
          onPress={()=>this.props.navigation.navigate("ZukuOffice")}>
          <Text style={styles.serviceGroupText}>
              Zuku Office
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceGroup} 
          onPress={()=>this.props.navigation.navigate("InternetOnly")}>
          <Text style={styles.serviceGroupText}>
              Internet Only
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceGroup} 
          onPress={()=>this.props.navigation.navigate("TvPackages")}>
          <Text style={styles.serviceGroupText}>
              TV Packages
          </Text>
          </TouchableOpacity>
      </View>
      )}

</View>


      );
  }
}
 
