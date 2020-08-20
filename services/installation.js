import React from 'react'
import {styles} from '../styles'
import {View, TouchableOpacity, Text, List, ListItem, Alert} from 'react-native'
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
                this.setState({isLoading:false})
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
                    global.instals={'band':m.band,'package':m.package,
                    'amount':m.amount,'address':item.address, 'code':m.code,
                'floor':item.floor,'apart_no':item.apart_no}
                }
            }),
              
            
              <View style={styles.serviceContainer}>
                <Text style={{ textAlign:"left", fontSize:20,margin:10,color:'#222'}}>

                    {this.state.package+"\n"+'in '+item.address+"\n" +'At '+item.estate+'\n'
                    +'on the'+item.floor+"th Floor"}
                    </Text>
                    <TouchableOpacity onPress={this.handlePayment}
                    style={{width:"80%",alignSelf:"center",
                    alignItems:"center",backgroundColor:'#365',marginBottom:0}}>
                        <Text style={{fontSize:20}}>
                            Proceed to payments
                        </Text>
                    </TouchableOpacity>
              </View>
             
            )}
          />
          </View>
          )}
    
}