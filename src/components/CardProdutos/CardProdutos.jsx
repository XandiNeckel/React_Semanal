import React from "react";
import S from "./CardProdutos.module.css";

const CardProdutos = ({ dados }) => {
  const { id, name, image, description, oldPrice, price } = dados;
  return (
    <div className={S.card}>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <p className={S.description}>{description}</p>
        <small>
          DE: <span>R${oldPrice}</span>
        </small>
        <p className={S.price}>
          Por: <span>R${price}</span>
        </p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default CardProdutos;