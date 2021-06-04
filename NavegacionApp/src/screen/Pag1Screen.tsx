import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/AppTheme';


interface Props extends StackScreenProps<any,any>{}



export const Pag1Screen = ({navigation}:Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title="IR PAG 2"
                onPress={()=>navigation.navigate("Pag2Screen")}
            />
            <Button
                title="IR HA PERSONA"
                onPress={()=>navigation.navigate("Persona")}
            />
        </View>
    )
}
