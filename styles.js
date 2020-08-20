import React from 'react'
import {StyleSheet, Platform, StatusBar} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor:'#69a',
  
  },
    

    heading:{
      padding: "5%",
      // margin:'5%',
      fontSize:20,
      borderRadius:15,
      color: "#123",
      // transform: [
      //   { rotateX: "-15deg" },
      //   { rotateY: "-15deg" },
      //   { rotateZ: "-15deg" }
      // ],
      alignSelf: 'center',
      textAlign: 'center',
    },
    inputs:{
        borderColor: "#579",
        borderWidth: 2,
        width:"80%",
        borderRadius:10,
        padding:5,
        marginLeft: "10%",
        marginRight: "10%"
      },

    login:
    {
      flex: 1,
      flexDirection: "row",
      marginLeft:"10%",
      marginRight:"10%",
      borderRadius:10,
      backgroundColor:"#397",
      marginBottom:"10%"
      
  },


    submitButton:{
      height:50,
      width: "40%",
      alignContent:"center",
      alignItems: 'center',
      justifyContent: 'center',
    },
    


    clients:{
      height:80,
      width: "100%",
      backgroundColor:"#677",
      borderRadius:20
    },
    clientItems:{
      justifyContent: 'center',
      textAlign: 'center',
      marginTop:20,
      fontSize:30,
      
    },

    submitClient:{
      height:40,
      width: "80%",
      borderRadius:20,
      backgroundColor:"#397", 
      alignSelf: 'center',
      borderRadius:15,
      marginBottom:20
    },
    homeItem:{
      backgroundColor:"#677",
      width: "45%",
      margin:"5%",
      
    },
    home:{
      flexDirection: "row",
      flex:1
    }
    ,gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    sectionHeader: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      alignItems: 'center',
      backgroundColor: '#636e72',
      color: 'white',
      padding: 10,
    },
    servicesItem:{
      backgroundColor:"red",
      padding: 20,
      
    },
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    
    
    homeItems: {
      justifyContent: 'flex-end',
      borderRadius: 10,
      padding: 10,
      height: 150,
    }
    ,
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '800',
      fontSize: 18,
      color: 'yellow',
      marginBottom:"20%"
    },
    logout:
    {
      alignItems:"center",
      marginLeft:"3%",
      marginRight:"3%",
      borderRadius:10,
      backgroundColor:'#7ab',
      height:50,
      
      alignContent:"center",
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  serviceGroup:
  {
    backgroundColor:"#379",
    height:'25%',
    borderRadius:20,
    justifyContent:"center",
    borderColor:'#69a',
    borderWidth:5,
    alignItems:"center"},

    serviceGroupText:{fontSize:30},

    passwordReset: {
      borderRadius:12,
      backgroundColor:"#397",
      marginLeft:"25%",
      height:50,
      marginRight:"25%",
      alignContent:"center",
      alignItems: 'center',
      justifyContent: 'center',
    },
    serviceContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
      backgroundColor: '#447866',
      borderBottomLeftRadius:50,
      borderTopRightRadius:50
    },
    serviceItemText: {
      fontWeight: '800',
      fontSize: 18,
      color: '#d5d5d5',
      marginBottom:"20%"
    },

    paymentButton:
    {
     borderBottomStartRadius:50,
     borderBottomEndRadius:50,
     backgroundColor:'#456',
     position:"absolute",
     bottom:0,
     height:"15%",
     width:"100%",
    },

    helpHeader:{
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      backgroundColor:'#456',
      top:0,
      width:"100%",
      textAlign:"center",
      fontSize:20,
      color:"white"
     },

     suButton:{
      height:40,
      width: "80%",
      borderRadius:20,
      backgroundColor:"#397", 
      alignSelf: 'center',
      borderRadius:15,
      marginBottom:20
    },

     


})



