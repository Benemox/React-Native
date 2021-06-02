import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { BtnCal } from '../components/BtnCal';
import { styles } from '../theme/app';
import { useRef } from 'react';



enum Operadores{
    suma,resta,multiplicar,dividir
}

export const CalculadoraScreen = () => {
    const [number, setNumber] = useState("0")
    const [lastnumber, setLasNumber] = useState("0")
    const LastOperation = useRef<Operadores>()

    const reset = () =>{
        setNumber("0")
        setLasNumber("0")
    }

    const armarnumero = (numeroTexto:string) => {
               //forma refactorizada
               if (numeroTexto === '.' && number.includes('.')) return; 
               if(number.startsWith("-0") && number.length ===2 ) setNumber("-"+numeroTexto);
               else(setNumber(number!=='0' || numeroTexto === '.'? number  +numeroTexto: numeroTexto) 
               )
               
                // No aceptar doble punto
            // if(number.includes(".") && numeroTexto ==="." )return;
            // if(number.startsWith("0") || number.startsWith("-0") ){
                
            //         //punto decimal
            //         if(numeroTexto === "."){
            //             setNumber(number+numeroTexto)
            //         // evaluar si es otro cero, y hay algun punto.
            //         } else if( numeroTexto === "0" && number.includes(".")){
            //             setNumber(number+numeroTexto)
            //         // Evaluar si es diferente de cero y no tiene un punto
            //         }else if(numeroTexto === "0" && !number.includes(".")){
            //             setNumber(number)
            //         }else if(number.startsWith("0") && !number.includes(".")){
            //             setNumber(number.replace("0",numeroTexto))
            //         }else{
            //             setNumber(number+numeroTexto)
            //         }
            // }else{
            //     setNumber(number + numeroTexto)
            // }
            
          

    }


    const btnDelete = ()=>{
        
        if( number.length === 1 || (number.length === 2 && number.includes('-'))){
            return setNumber( '0' );
        }
 
        setNumber( numero => numero.slice(0, -1)  )
    }

    const cambiarNumeroPorAnterior= ()=>{
        number.endsWith(".")?setLasNumber(number.slice(0,-1)): (setLasNumber(number),setNumber("0") )
    }


    const btnDividir = () =>{
        cambiarNumeroPorAnterior();
        LastOperation.current = Operadores.dividir

    }
    
    const btnsumar = () =>{
        cambiarNumeroPorAnterior();
        LastOperation.current = Operadores.suma

    }

    
    const btnresta = () =>{
        cambiarNumeroPorAnterior();
        LastOperation.current = Operadores.resta

    }

    
    const btnmulti = () =>{
        cambiarNumeroPorAnterior();
        LastOperation.current = Operadores.multiplicar

    }

    const calcular = () =>{
        const numb1 = Number(number);
        const numb2 = Number(lastnumber);
        switch (LastOperation.current) {
            case Operadores.suma:
                setNumber(`${numb1+numb2}`);
                break;
            case Operadores.resta:
                setNumber(`${numb1-numb2}`);
                break;
            case Operadores.multiplicar:
                setNumber(`${numb1*numb2}`);
                break;
            case Operadores.dividir:
                setNumber(`${numb1/numb2}`);
                break;
            default:
                break;
        }
        setLasNumber("0")
    }


    const positiveNeg = () => (number.includes("-")) ? setNumber(number.replace("-","")): setNumber("-" + number)

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
