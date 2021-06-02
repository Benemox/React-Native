import React,{ useState, useRef } from 'react';




export const UseCalculadora = () => {
        enum Operadores{
            suma,resta,multiplicar,dividir
        }
        
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
                    setNumber(`${numb2-numb1}`);
                    break;
                case Operadores.multiplicar:
                    setNumber(`${numb1*numb2}`);
                    break;
                case Operadores.dividir:
                    if ( lastnumber === '0' ) return
                    setNumber(`${numb2/numb1}`);
                    break;
                default:
                    break;
            }
            setLasNumber("0")
        }
    
    
        const positiveNeg = () => (number.includes("-")) ? setNumber(number.replace("-","")): setNumber("-" + number)  

        return{
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
        }

    }

