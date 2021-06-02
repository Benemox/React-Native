import React from 'react'
import { View,Text } from 'react-native'
import { BtnCal } from '../components/BtnCal';
import { UseCalculadora } from '../components/UseCalculadora';

import { styles } from '../theme/app';






export const CalculadoraScreen = () => {

   const {
        lastnumber,
        number,
        reset,
        positiveNeg,
        btnDelete,
        btnDividir,
        armarnumero,
        btnmulti,
        btnresta,
        btnsumar,
        calcular
    }=UseCalculadora()
    
return (

 <View style={styles.calculadoraContainer}>
     {
         (lastnumber !== "0") && <Text style={styles.miniresult}>{lastnumber}</Text>
     }
    
    <Text
         style={styles.result}
         numberOfLines={1}
         adjustsFontSizeToFit
    > 
        {number}
    </Text>


    <View style={styles.fila}>
        <BtnCal txt="C" color="#9B9B9B" action={reset}/>
        <BtnCal txt="+/-" color="#9B9B9B" action={positiveNeg}/>
        <BtnCal txt="Del" color="#9B9B9B" action={btnDelete}/>
        <BtnCal txt="/" color="#FF9427" action={btnDividir} />    
    </View>

    <View style={styles.fila}>
        <BtnCal txt="7" action={armarnumero}/>
        <BtnCal txt="8" action={armarnumero}/>
        <BtnCal txt="9" action={armarnumero}/>
        <BtnCal txt="x" color="#FF9427" action={btnmulti}/>    
    </View>
    <View style={styles.fila}>
        <BtnCal txt="4" action={armarnumero} />
        <BtnCal txt="5" action={armarnumero}/>
        <BtnCal txt="6" action={armarnumero}/>
        <BtnCal txt="-" color="#FF9427" action={btnresta} />    
    </View>
    <View style={styles.fila}>
        <BtnCal txt="1" action={armarnumero}/>
        <BtnCal txt="2" action={armarnumero}/>
        <BtnCal txt="3" action={armarnumero}/>
        <BtnCal txt="+" color="#FF9427" action={btnsumar} />    
    </View>
    <View style={styles.fila}>
        <BtnCal txt="0" ancho action={armarnumero} />
        
        <BtnCal txt="."  action={armarnumero}/>
        <BtnCal txt="=" color="#FF9427" action={calcular} />    
    </View>
    
</View>
)}
