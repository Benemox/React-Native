import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            {/* Son circulos */}
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaRoja}/>
            <View style={styles.cajaBlanca}/>


        </View>
)}


const styles = StyleSheet.create({
    container:{
        flex:1,
        // width:400,
        // height:600,
        backgroundColor:"#28C4D9",
        justifyContent:"center",
        alignItems: "center"
        
    },
    cajaMorada:{
        backgroundColor:"#5856D6",
        width:100,
        height:100,
        borderRadius:100,
        borderWidth:10,
        borderColor:"white",
        top:165,
        left:75,
        
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
        position:"absolute",
        top:0,
        right:0
    },
    cajaBlanca:{
        backgroundColor:"black",
        width:100,
        height:100,
        borderRadius:100,
        borderWidth:10,
        borderColor:"white",
        position:"absolute",
        top:0,
        left:0
    }
});