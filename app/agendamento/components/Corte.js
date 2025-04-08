'use client'

function Cortes(attr) {
    return ( 

        <div>
            <div className="imagemCorte">
                <img className="tamanhoImagem" src={attr.image} />
                <div className="centralizarCorte">
                    <p className="nomeCorte">{attr.nome}</p>                    
                </div>
                <div className="centralizarCorte">
                    <p className="preco">R$:{attr.preco}</p>
                </div>
                <div>
                    <br/><br/>
                    <button className="agendar">Agendar</button>                   
                </div>
            </div>
        </div>
    );
}

export default Cortes;