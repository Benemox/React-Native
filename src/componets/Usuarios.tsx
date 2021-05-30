import { useUsers } from "../Hooks/useUsers"

import { ReqResListado, User } from '../interfaces/reqResInterface';



export const Usuarios = () => {
     
    const {usuarios,oldpage,newpage} = useUsers()

    const renderItem = ( {id,first_name,last_name,avatar,email}: User)=>{
        return (
        <tr key={id.toString() }>
            <th>
                <img src={avatar} alt={last_name}  style={{width:30,borderRadius:100}}/>
            </th>
            <th>{first_name} {last_name}</th>
            <th>{email}</th>
        </tr>
    )
    }
    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button  className= "btn btn-primary" onClick={oldpage}>
                    Anteriores
            </button>
            <button  className= "btn btn-primary" onClick={newpage}>
                    Siguientes
            </button>
        </>
    )
}
