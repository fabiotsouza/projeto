
import "./Menu_cliente.css"

function Menu_cliente() {

    function redirecionar(){
        if( localStorage.getItem("usuario") == null ){
            window.location.href='/'
        }else{
            window.location.href='/home_cliente'
        }
    }

    return ( 
        <div>
            <div className="menuSup" onClick={()=>redirecionar()} >
                <img src="/imagens/logo3.png" width={100} />
            </div>
        </div>
    );
}

export default Menu_cliente;