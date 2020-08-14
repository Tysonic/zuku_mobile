import React from 'react'
import {styles} from '../styles'
import {View, TouchableOpacity, Text, List, ListItem} from 'react-native'

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
            <View >
                {this.state.isLoading===true ? <Text>Loading</Text> :(
                    <View>

<View style={styles.logout}>
        <TouchableOpacity style={styles.submitButton} onPress={()=>this.props.navigation.navigate("Home")}>
           <Text>Back To Home</Text>
        </TouchableOpacity>
        </View>

                <View style={{ backgroundColor: '#9bc', marginTop:'10%', borderRadius:50,height:'80%',alignItems:"center",}}>                    
                <Text style={{ fontSize:20}}>
                {'\n'}{'\n'}
                    Hello dear, {global.user}{'\n'}
                    you are paying for{'\n'}
                     zuku {this.state.package}{'\n'}
                     of {this.state.amount} per month.{'\n'}
                     Enjoy first speed internet{'\n'}{'\n'}
                     Select payment option
                </Text>

                <TouchableOpacity onPress={this.handlePayment}>
                  <Text style={{ fontSize:17}}>
                    Mobile money
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handlePayment}>
                  <Text style={{ fontSize:17}}>
                    Bank deposit
                  </Text>
                </TouchableOpacity >
                </View>
                </View>
                )}
                
            </View>
        )
    }
}