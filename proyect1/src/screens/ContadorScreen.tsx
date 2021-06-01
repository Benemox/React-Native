import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';



const ContadorScreen = () => {

    const [contador, setContador] = useState(10)


    return(
        <View style={styles.container}>
            <Text style={styles.tittle}
            >Contador: {contador}
            </Text>
          
            <Fab
                tittle="-1"
                onPress={()=>setContador(contador-1)}
                position="br"
            ></Fab>

            <Fab   
                tittle="+1"
                onPress={()=>setContador(contador+1)}
                position="bl"
            ></Fab>



            {/* <TouchableOpacity
                style={styles.fabLocationRL}
                onPress={()=>setContador(contador-1)}
            > 
                <View style={styles.fab}>
                   <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor: "white"
    },
    tittle:{
        textAlign:"center",
        fontSize:40,
        top:-25},
  
    
})

export default ContadorScreen
