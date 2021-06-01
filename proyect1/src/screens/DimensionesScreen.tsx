import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';





export const DimensionesScreen = () => {
    const {width,height} =useWindowDimensions()
    return (
        <View>
             <View style={styles.container}>
                 <View style={styles.cajaMorada}/>
                <View style={{...styles.cajaNaranja, width: width * 0.20}}/>
                
            
        </View>
        <Text>H: {height} W: {width}</Text>
        </View>
        
        
    )
}
 
const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:600,
        backgroundColor:"red"
    },
    cajaMorada:{
        backgroundColor:"#5856D6",
        width:"50%",
        height:"50%"
    },
    cajaNaranja:{
        backgroundColor:"#F0A23B"
    }

});