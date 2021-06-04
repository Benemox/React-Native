import { useNavigation } from '@react-navigation/core';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';
import { useEffect } from 'react';





export const Pag2Screen = () => {

    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            title:"",
            headerBackTittle: ""
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title="IR PAG 3"
                onPress={()=>navigation.navigate("Pag3Screen")}
            
            />
            <TouchableOpacity 
                onPress={()=>navigation.navigate("Persona", {nb: "pedro",id:1,email:"a@afterAll.es"})}
            >
                <Text>Persona</Text>
            </TouchableOpacity>
        </View>
    )
}
