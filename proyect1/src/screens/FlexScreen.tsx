import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.caja1}> Caja 1</Text>
            <Text style={styles.caja2}> Caja 2</Text>
            <Text style={styles.caja3}> Caja 3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#28C4D9",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    caja1:{
        // flex: 29,
        borderWidth: 2,
        borderColor: "white",
        fontSize: 25,
        width:100,
        height:100,
        borderRadius:100,
        backgroundColor:"#5856D6",
        paddingTop:30,
        paddingRight:22

        
    },
    caja2:{
        // flex: 29,
        borderWidth: 2,
        borderColor: "white",
        fontSize: 25,
        width:100,
        height:100,
        borderRadius:100,
        backgroundColor:"red",
        paddingTop:30,
        paddingRight:22
    },
    caja3:{
        // flex: 57,
        borderWidth: 2,
        borderColor: "white",
        fontSize: 25,
        width:100,
        height:100,
        borderRadius:100,
        backgroundColor:"yellow",
        paddingTop:30,
        paddingRight:22
    }
});