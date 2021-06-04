import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any,any>{}



export const Pag3Screen = ({navigation}:Props) => {


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title} >Pagina1Screen</Text>
            <Button
                title="Regresar"
                onPress={()=>navigation.pop()}
            />
            <Button
                title="IR al home"
                onPress={()=>navigation.popToTop()}
            />
             <TouchableOpacity
                onPress={()=>navigation.navigate("Persona", {nb: "Ruben",id:2,email:"aRuben@afterAll.es"})}
            >
                <Text>Persona 3</Text>
            </TouchableOpacity>
        </View>
    )
}
