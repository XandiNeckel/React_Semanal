import React from "react";
import S from "./Divisor.module.css";

const Divisor = (props) => {
  return (
    <div className={S.divPai}>
      <div></div>
      <p>{props.text}</p>
      <div></div>
    </div>
  );
};

export default Divisor;