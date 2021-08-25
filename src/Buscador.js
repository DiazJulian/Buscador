import { useState } from "react";

export default function Buscador () {

    const [search, setSearch] = useState('')
    
    // array simula ser usuarios obtenidos de una base de datos
    let array = [{name:"Julian", id:1}, {name:"Facundo", id:2}, {name:"Federico",id:3}, {name:"Mariano7",id:4}]
    let Users = array

    return(
        <div>
            <input placeholder="Buscar..." defaultValue={search} 
             onChange={(e)=> setSearch(e.target.value)} />
            {
                // Si no hay busqueda, devuelve todos los usuarios
                // Sino devuelve el usuario que coincida con la busqueda
                Users.filter(user => {
                    if(search === ""){
                        return user;
                    }else if(user.name.toLowerCase().includes(search.toLowerCase())){
                        return user;
                    }
                    return null;
                }).map(user => {
                    return(
                        <ul key={user.id}>
                            <li>{user.name}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}