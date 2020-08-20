import React from 'react'
import {styles} from '../styles'
import {View, TouchableOpacity, Text, List, ListItem, Alert, ActivityIndicator} from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { ceil } from 'react-native-reanimated';

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
            .catch(()=>[this.setState({isloading:false}),
                alert("Please check internet connection and try again")])
    }

    handlePayment = ()=>{
        this.props.navigation.navigate('Charges')
    }
    render() {
        return (
         

            <View  style={styles.container}>
                {this.state.isLoading==true ? <ActivityIndicator size="100%"/> :
                <View>

            {this.state.instals.length===0 ? 
            <View style={{alignItems:"center",
            marginTop:"40%",
            alignSelf:"center"}}>
            <Text style={{textAlign:"center"}}>You haven't applied for any service{"\n"}</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Services')}> 

                <Text style={{backgroundColor:"#357",height:40,textAlignVertical:"center",width:150,textAlign:"center"}}>
                    Apply from here
                </Text>
            </TouchableOpacity>
            
            </View>:
          <FlatGrid
            itemDimension={170}
            data={this.state.instals}
    
            renderItem={({ item, index }) => (
                this.state.service.forEach(m=>{if(item.service===m.service_id){
                    this.state.band=m.band
                    this.state.package=m.package
                    this.state.amount=m.amount
                    global.install={'band':m.band,'package':m.package,
                    'amount':m.amount,'address':item.address, 'code':item.code,
                'floor':item.floor,'apart_no':item.apart_no}
                }
            }),
              
            
              <View style={styles.serviceContainer}>
                <Text style={{ textAlign:"left", fontSize:20,margin:10,color:'#222'}}>

                    {this.state.package+"\n"+'in '+item.address+"\n" +'At '+item.estate+'\n'
                    +'on the '+item.floor+"th Floor"}
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
          />}
          </View>}
          </View>
          )}
    
}