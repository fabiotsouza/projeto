import "./Menu_cliente.css"

function Menu_cliente() {
    return ( 

        <div className="menuSup">
            <button className="voltar" onClick={()=> window.location.href = "/"}>Voltar</button>
            <img src="https://placehold.co/100x40" />
        </div>

    );
}

export default Menu_cliente;