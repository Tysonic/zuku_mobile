import React from 'react'
import {styles} from '../styles'
import {View, TouchableOpacity, Text, List, ListItem} from 'react-native'
import { ceil } from 'react-native-reanimated'

export default class App extends React.Component{

    state = {
        isLoading:true
    }
    componentDidMount(){
        fetch("https://zuku-backend.herokuapp.com/installation details")
        .then(response=>response.json())
        .then(res=>
            [res.client.forEach(element => {if(element.username===global.user)
                {this.setState({...element})}}),
            res.installation.forEach(item=>{if(item.client===this.state.client_id)
                {this.setState({...item})}}),
            res.service.forEach(itm =>{if(itm.service_id===this.state.service)
                {this.setState({...itm})}}),
                this.setState({isLoading:false}),
                
            ])
            
    }

    handlePayment =()=>{
      alert('Under development')
    }

    render() {
        return(
            <View  style={styles.container}>
                {this.state.isLoading===true ? <Text>Loading</Text> :(
                    <View>

<View style={styles.logout}>
        <TouchableOpacity style={styles.submitButton} onPress={()=>this.props.navigation.navigate("Home")}>
           <Text>Back To Home</Text>
        </TouchableOpacity>
        </View>

                <View style={{ backgroundColor: '#9bc', marginTop:'10%', borderRadius:50,height:'80%',alignItems:"center",}}>                    
                <Text style={{ fontSize:20,textAlign:"center"}}>
                {'\n'}{'\n'}
                    Hello dear, {global.user}{'\n'}
                    you are paying for{'\n'}
                     {this.state.package}{'\n'}
                     of shs: {this.state.amount}/=  per month.{'\n'}
                     Enjoy first speed internet{'\n'}{'\n'}
                     Note! Installation shall take place in 48 hours from time of payment{'\n'}
                     {'\n'}{'\n'}
                     Select payment option
                </Text>

                <TouchableOpacity onPress={this.handlePayment}>
                  <Text style={{ fontSize:17,padding:10,backgroundColor:'#689',borderRadius:30}}>
                    {">>>"} Mobile money
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePayment}>
                  <Text style={{ fontSize:17,padding:10,backgroundColor:'#689',borderRadius:30}}>
                  {">>>"} Bank deposit
                  </Text>
                </TouchableOpacity >
                </View>
                </View>
                )}
                
            </View>
        )
    }
}