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

                <Text style={{ backgroundColor: '#9bc', marginTop:'10%', borderRadius:50,height:'80%',textAlign:"center", fontSize:20}}>
                    
                {'\n'}{'\n'}
                    Hello dear, {global.user}{'\n'}
                    you have applied for{'\n'}
                     zuku {this.state.package}{'\n'}
                     At {this.state.amount} per month.{'\n'}
                     You shall be conducted by one of our agents shortly {'\n'}{'\n'}
                     Enjoy first speed internet
                </Text>
                </View>
                )}
                
            </View>
        )
    }
}