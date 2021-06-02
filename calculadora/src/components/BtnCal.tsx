import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    txt:string,
    color?:string,
    ancho?:boolean,
    action?: (numeroTexto:string) => void;
}

export const BtnCal = ({txt,color="#2D2D2D", ancho = false,action}:Props) => {
    return (
        <TouchableOpacity onPress={()=> action(txt) }>
            <View style={{
                ...styles.btn,
                backgroundColor:color,
                width: (ancho) ? 180 : 80
            } }>
            <Text style={{
                ...styles.btntext,
                color: (color === "#9B9B9B" ) ? "black" : "white"
            }}>{txt}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn:{
        height: 90,
        width: 80,
        borderRadius:100,
        justifyContent:"center",
        marginHorizontal: 10

    },
    btntext:{
        textAlign:"center",
        padding:10,
        color:"white",
        fontSize:29,
        fontWeight: "bold"
    }
});