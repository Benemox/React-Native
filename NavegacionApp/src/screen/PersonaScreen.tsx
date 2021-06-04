import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect} from 'react';


interface Props extends StackScreenProps<any,any>{}

export const PersonaScreen= ({route,navigation}: any) => {
    const {params}= route

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
