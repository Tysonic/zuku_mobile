import React from 'react'
import {styles} from '../styles'
import {View, TouchableOpacity, Text, List, ListItem} from 'react-native'

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
        return(
            <View >
                {this.state.isLoading===true ? <Text>Loading</Text> :(
                    <View>

<View style={styles.logout}>
        <TouchableOpacity style={styles.submitButton} onPress={()=>this.props.navigation.navigate("Home")}>
           <Text>Back To Home</Text>
        </TouchableOpacity>
        </View>
            <View style={{backgroundColor: '#9bc', marginTop:'10%', borderRadius:50,height:'80%',}}>
                <Text style={{ textAlign:"center", fontSize:20}}>
                    
                {'\n'}{'\n'}
                    Hello dear, {global.user}{'\n'}
                    you have applied for{'\n'}
                     {this.state.package}{'\n'}
                     of {this.state.band} {'\n'}
                     At shs: {this.state.amount}/= per month.{'\n'}{'\n'}
                     Enjoy first speed internet
                </Text>
  
                <TouchableOpacity style={styles.paymentButton} onPress={this.handlePayment}>
                    <Text style={{textAlign:"center",  
                    fontSize:20,color:'white',}}>
                    <Text>
                       Payment refference : {this.state.code}
                    </Text>
                    <Text style={{color:'#777',}}>
                        {'\n'}Click and proceed to Payment
                    </Text>
                    </Text>
                    </TouchableOpacity>
                </View>
                </View>
                )}
                
            </View>
        )
    }
}