import React from 'react'
import {View, TouchableOpacity,Text} from 'react-native'
import {styles} from './styles'


export default class App extends React.Component{

    render(){
        return(


<View>

<View style={styles.logout}>
        <TouchableOpacity style={styles.submitButton} onPress={()=>this.props.navigation.navigate("Home")}>
           <Text>Back To Home</Text>
        </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#9bc', marginTop:'10%', borderRadius:50,height:'80%', alignItems:"center"}}>
                
                <Text style={{textAlign:"center",fontSize:25}}>
                {'\n'}{'\n'}
                For Enquiries! {'\n'}
                Please contact us on:{'\n'}
                </Text>

                <Text style={{fontSize:20}}>
                Tel            : 0776764871,0708621761{'\n'}
                Whatsapp: 0700671644{'\n'}
                Email        : zukufiber.co.ug{'\n'}
                Website    : Www.zukufiberco.com{'\n'}
                </Text>
        </View>
    </View>

        )
    }
}