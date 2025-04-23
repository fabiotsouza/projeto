'use client'

import "./card.css"

function Card(attr) {
    return ( 

       <div className="card">
            <h2>{attr.nome}</h2>
            <p>R$: {attr.preco}</p>
            <p>{new Date(attr.dia).toLocaleDateString('pt-BR')}</p>
            <p>{attr.horario}</p>
       </div>
       
    );
}

export default Card;