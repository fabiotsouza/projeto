import "./Menu_cliente.css"

function Menu_cliente() {

    function deslogar(){

        localStorage.removeItem("usuario")
    }

    return ( 

        <div className="menuSup">
            <button className="voltar" onClick={()=> window.location.href = "/home_cliente"}>Voltar</button>
            <img src="https://placehold.co/100x40" />
            <button onClick={()=> {deslogar(), window.location.href = "./"}}>Deslogar</button>
        </div>

    );
}

export default Menu_cliente;