import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
 interface Props{
        tittle: string,
        position?: "br"| "bl"
        onPress:()=>void,
    }
export const Fab = ({tittle,onPress, position = "br"}:any) => {
   
    return (
      
             <TouchableOpacity
                style={position === "bl"
                    ? styles.fabLocationBL
                    : styles.fabLocationRL
            }
                onPress={onPress}
            > 
                <View style={styles.fab}>
                   <Text style={styles.fabText}>{tittle}</Text>
                </View>
            </TouchableOpacity>
            
       
    )
    }

    const styles = StyleSheet.create({
        fabLocationBL:{
            position: "absolute",
            bottom: 25,
            right: 25
    
        },
        fabLocationRL:{
            position: "absolute",
            bottom: 25,
            left: 25
    
        },
    
        fab:{
            backgroundColor:"#5856D6",
            height:60,
            width:60,
            borderRadius:100,
            justifyContent:"center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,

            elevation: 14,
        },
        fabText:{
            color: "white",
            fontSize:25,
            fontWeight: "bold",
            alignSelf:"center"
    
        }
    })