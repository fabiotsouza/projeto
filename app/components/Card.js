'use client'

import "./card.css"

function Card(attr) {
    return ( 

       <div className="card">
            <h2>{attr.nome}</h2>
            <p>R$: {attr.preco}</p>
       </div>
       
    );
}

export default Card;