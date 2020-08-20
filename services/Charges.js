import React from 'react'
import {styles} from '../styles'
import {View, TouchableOpacity, Text, List, ListItem} from 'react-native'
import { ceil } from 'react-native-reanimated'

export default class App extends React.Component{



    handlePayment =()=>{
      alert('Under development')
    }

    render() {
        return(
            <View  style={styles.container}>
                

<View style={styles.logout}>
        <TouchableOpacity style={styles.submitButton} onPress={()=>this.props.navigation.navigate("Home")}>
           <Text>Back To Home</Text>
        </TouchableOpacity>
        </View>

                <View style={{ backgroundColor: '#9bc', marginTop:'10%', borderRadius:50,height:'80%',alignItems:"center",}}>                    
                <Text style={{ fontSize:20,textAlign:"center"}}>
                {'\n'}{'\n'}
                    Hello dear, {global.user}{'\n'}
                    you have applied for{'\n'}
                    {global.instals.package} of {global.instals.band}{'\n'}
                     At shs: {global.instals.amount}/=  per month.{'\n\n'}
                     
                     Note! Installation shall take place in 48 hours from time of payment{'\n'}
                     {'\n'}
                     Enjoy first speed internet{'\n'}{'\n'}
                     
                </Text>


                <TouchableOpacity style={styles.paymentButton} onPress={this.handlePayment}>
                    <Text style={{textAlign:"center",  
                    fontSize:20,color:'white',}}>
                    <Text>
                       Payment refference : {global.instals.code}
                    </Text>
                    <Text style={{color:'#777',}}>
                        {'\n'}Click and proceed to Payment
                    </Text>
                    </Text>
                    </TouchableOpacity>

                
                </View>
                
                
            </View>
        )
    }
}