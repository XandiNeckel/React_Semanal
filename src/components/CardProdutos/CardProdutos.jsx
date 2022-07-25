import React from "react";
import './CardProdutos.css';

function CardProdutos({img,title,descri,precoAnterior,precoAtual,parcelas,qtdParcelas}){
    return(
        <article>
            <figure style={{'backgroundImage':`url(${img})`}}>
                
            </figure>
                <figcaption>{title}</figcaption>
            <span>
               {descri}
            </span>
            <p>
            
            <small>De: {precoAnterior}</small> 
            <strong>Para: {precoAtual}</strong>
            <small>ou {qtdParcelas} de: {parcelas}</small>
            </p>
        <button>Comprar</button>
        </article>
    )
}

export default CardProdutos;