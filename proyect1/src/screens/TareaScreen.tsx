
import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
export const TareaScreen = () => {
    return (
        <View style={styles.container}>
             <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaRoja}/>
           
        </View>
    )}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#28425B",
        flex:1
    },cajaMorada:{
        backgroundColor:"#5856D6",
        width:100,
        height:100,
        borderRadius:100,
        borderWidth:10,
        borderColor:"white",
       
        
    },
    cajaNaranja:{
        backgroundColor:"#F0A23B",
        width:100,
        height:100,
        borderRadius:100,
        borderWidth:10,
        borderColor:"white",
     
    },
    cajaRoja:{
        backgroundColor:"red",
        width:100,
        height:100,
        borderRadius:100,
        borderWidth:10,
        borderColor:"white",
        
    },
   


});