import React from 'react'
import {styles} from '../styles'
import {View, TouchableOpacity, Text, List, ListItem} from 'react-native'
import { FlatGrid } from 'react-native-super-grid';

export default class App extends React.Component{

    state = {
        isLoading:true,
        instals:[]
    }
    componentDidMount(){
        fetch("https://zuku-backend.herokuapp.com/installation details")
        .then(response=>response.json())
        .then(res=>
            [
                this.setState({...this.state,service:res.service}),
                res.client.forEach(element => {if(element.username===global.user)
                {this.setState({...this.state,...element})}}),
                res.installation.forEach(item=>{if(item.client===this.state.client_id)
                {this.state.instals.push({...item})}}),
                this.setState({isLoading:false}),
                console.log(this.state)

            ])
    }

    handlePayment = ()=>{
        this.props.navigation.navigate('Charges')
    }


    render() {

    
        return (
         
            <View  style={styles.container}>
            
          <FlatGrid
            itemDimension={170}
            data={this.state.instals}
    
            renderItem={({ item, index }) => (
                this.state.service.forEach(m=>{if(item.service===m.service_id){
                    this.state.band=m.band
                    this.state.package=m.package
                    this.state.amount=m.amount
                }
            }),
              
            <TouchableOpacity>
              <View style={styles.serviceContainer}>
                <Text >{item.install_id + '\n' +this.state.band  + '\n' + this.state.amount  + '\n' + this.state.package}</Text>
              </View>
              </TouchableOpacity>

            )}
          />
          </View>
          )}
    
}