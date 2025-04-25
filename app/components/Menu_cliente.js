import { useEffect, useState } from "react"
import "./Menu_cliente.css"

function Menu_cliente() {

    const [logado, alteraLogado] = useState(0)
    
    function deslogar(){

        localStorage.removeItem("usuario")
        alteraLogado(0)
    }

    function voltar(){
        if(localStorage.key == null || localStorage.key == ""){
            window.location.href = "./"
        }
        return
    }

    useEffect(()=>{
        alteraLogado(JSON.parse(localStorage.getItem('usuario')))
    },[])

    return ( 
        <div>
            { 
                logado == null ?

                    <div className="menuSup">
                        <img src="https://placehold.co/100x40"/>
                    </div>
                :
                    <div className="menuSup">
                        <button className="voltar" onClick={()=> {voltar(), window.location.href = "/home_cliente"}}>Voltar</button>
                        <img src="https://placehold.co/100x40" />
                        <button className="deslogar" onClick={()=> {deslogar(), window.location.href = "./"}}>Deslogar</button>
                    </div>
            }
        </div>
    );
}

export default Menu_cliente;