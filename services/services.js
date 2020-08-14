import React, { Component } from 'react';
import {Alert,FlatList, ScrollView, View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
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
      .catch((error) => console.error(error))   
}

  render() {  
    return (
      <View>
              {this.state.isLoading ? <ActivityIndicator /> :
      (
       <View>
                   <View>
                           <TouchableOpacity style={styles.logout} onPress={()=>this.props.navigation.navigate("Home")}>
                              <Text style={styles.serviceGroupText}>Back To Home</Text>
                           </TouchableOpacity>
                           </View>


                       <TouchableOpacity style={styles.serviceGroup} onPress={()=>this.props.navigation.navigate("TriplePlay")}>
                       <Text style={styles.serviceGroupText}>
                            Triple Play
                       </Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.serviceGroup} onPress={()=>this.props.navigation.navigate("ZukuOffice")}>
                       <Text style={styles.serviceGroupText}>
                           Zuku Office
                       </Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.serviceGroup} onPress={()=>this.props.navigation.navigate("InternetOnly")}>
                       <Text style={styles.serviceGroupText}>
                           Internet Only
                       </Text>
                       </TouchableOpacity>

                       <TouchableOpacity style={styles.serviceGroup} onPress={()=>this.props.navigation.navigate("TvPackages")}>
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
 
