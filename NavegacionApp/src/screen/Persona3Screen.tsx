import React from 'react'
import { View,Text } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect} from 'react';
import { RootStackParams } from '../../navigator/StackNavigator';

// interface RouterParams {
//     id:number,
//     nb: string,
//     email: string
// }
interface Props extends StackScreenProps<RootStackParams,"Persona3">{}

export const Persona3Screen= ({route,navigation}: any) => {
    // const params = route.params as RouterParams
    const params = route.params

    { useEffect(() => {
            navigation.setOptions({
                title: params.nb
            })
    }, [])
return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
            {JSON.stringify(params,null,3)}
        </Text>
    </View>
)}
}
