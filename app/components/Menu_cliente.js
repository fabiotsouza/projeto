
import "./Menu_cliente.css"

function Menu_cliente() {

    return ( 
        <div>
            <div className="menuSup" onClick={()=>window.location.href='/'} >
                <img src="/imagens/logo3.png" width={100} />
            </div>
        </div>
    );
}

export default Menu_cliente;