import React from 'react'
import { View, Text, StyleSheet,} from 'react-native';

export const BoxObjectScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.tittle}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"red"
    },
    tittle:{
        padding:12.5,
        fontSize:20,
        // width:250,
        borderWidth: 4,
        marginHorizontal: 10
        
    }
});