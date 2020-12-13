import React from 'react'
import {styles} from '../styles'
import {View, TouchableOpacity, Text, List, ListItem, Alert, ActivityIndicator} from 'react-native'
import { FlatGrid } from 'react-native-super-grid';
import { ceil } from 'react-native-reanimated';

export default class App extends React.Component{

    state = {
        isLoading:true,
        install:[]
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
                {this.state.install.push({...item})}}),
                this.setState({isLoading:false})
            ])
            .catch(()=>[this.setState({isloading:false}),
                alert("Please check internet connection and try again")])
                
    }

    handlePayment = ()=>{
        global.install=this.state
        this.props.navigation.navigate('Charges')
    }
    render() {
        return (
         

            <View  style={styles.container}>
                {this.state.isLoading==true ? <ActivityIndicator size="100%"/> :
                <View>

            {this.state.install.length===0 ? 
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
            data={this.state.install}
    
            renderItem={({ item, index }) => (

              
            
              <View style={styles.serviceContainer}>
                <Text style={{ textAlign:"left", fontSize:20,margin:10,color:'#222'}}>

                    {this.state.package+"\n"+'in '+item.address+"\n" +'At '+item.estate+'\n'
                    +'on the '+item.floor+"th Floor"}
                    </Text>
                    <Text
                    style={{width:"80%",alignSelf:"center",
                    alignItems:"center",backgroundColor:'#365',marginBottom:0}}>
                        <Text style={{fontSize:20}}>
                            Payment code: {item.code}
                        </Text>
                    </Text>
              </View>
             
            )}
          />}
          </View>}
          </View>
          )}
    
}