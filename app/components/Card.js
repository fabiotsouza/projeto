'use client'

import "./card.css"

function Card(attr) {

    const imagem = attr.imagem ? attr.imagem : "https://i.imgur.com/6Sg9mgX.jpeg"

    return ( 

       <div className="card" style={{backgroundImage: `url('${imagem}')`}}>
            <h2>{attr.nome}</h2>
            {
                attr.preco &&
                <>
                    <p>R$: {attr.preco}</p>
                    <p>{new Date(attr.dia).toLocaleDateString('pt-BR')}</p>
                    <p>{attr.horario}</p>
                </>
            }
       </div>
       
    );
}

export default Card;