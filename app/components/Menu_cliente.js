import "./Menu_cliente.css"

function Menu_cliente() {

    function deslogar(){

        localStorage.removeItem("usuario")

    }

    function voltar(){
        if(localStorage.key == null || localStorage.key == ""){
            window.location.href = "./"
        }
        return
    }

    return ( 

        <div className="menuSup">
            <button className="voltar" onClick={()=> {voltar(), window.location.href = "/home_cliente"}}>Voltar</button>
            <img src="https://placehold.co/100x40" />
            <button className="deslogar" onClick={()=> {deslogar(), window.location.href = "./"}}>Deslogar</button>
        </div>

    );
}

export default Menu_cliente;