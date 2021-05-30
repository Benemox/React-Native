
// main interface of persona

interface Persona{
    nombreCompleto:string;
    edad:number;
    direccion:Direccion
}
// We use anoder interface to simplify the workflow. And make it easy to understand 
interface Direccion{
    pais:string,
        casaNo: number
}

export const ObjetosLiterales = () => {

    const persona:Persona = {
        nombreCompleto: "fernando",
        edad: 35,
        direccion: {
            pais: "Canada",
            casaNo: 615
        }
    }
    




    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona,null,2)}
                </pre>
            </code>
        </>
    )
}
