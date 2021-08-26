import { useState } from "react";
import './Navigation.css'

export default function Navigation() {

    const [user, setUser] = useState(false)
    const url = 'https://res.cloudinary.com/dhehnqygp/image/upload/v1612474875/user_d5ltrx.png'

    return (
        <nav>
            <di className="logo">
                App
            </di>
            {
                user ?
                    <>
                        <img src={url} alt="User" />
                        <div className="options" onClick={()=> setUser(false)} >
                            Salir
                        </div>
                    </>
                    :
                    <div className="options" onClick={() => setUser(true)} >
                        Iniciar sesión
                    </div>
            }
        </nav>
    )
}