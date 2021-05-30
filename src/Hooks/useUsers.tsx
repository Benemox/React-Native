import { useEffect, useRef, useState } from "react"
import { reqResApi } from '../api/reqRes';
import { ReqResListado, User } from '../interfaces/reqResInterface';



export const useUsers = () => {
  
    const [usuarios, setUsuarios] =useState<User[]>([])

    const pageref = useRef(1)
   // GET THE FECTH BY AXIOS CONFIG
    useEffect(() => {
        cargarUsers()
    }, [])
    const cargarUsers = async()=>{

        const resp = await  reqResApi.get<ReqResListado>("/users", {
            params:{
                page: pageref.current
            }
        })
        if(resp.data.data.length>0){
            setUsuarios(resp.data.data)
            
            }else{
                pageref.current --;
                alert("No quedan mas paginas")
        }
    }
    const newpage = () => {
        cargarUsers();
        pageref.current ++;
    }
    const oldpage = () => {
        if(pageref.current> 1){
            pageref.current --;
        cargarUsers();
        }
        
        
    }
        
   
   
    return {
        usuarios,
        cargarUsers,
        newpage,
        oldpage
    }
}
