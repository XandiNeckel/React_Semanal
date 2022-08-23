import {React, useState} from "react";
import S from "./Compartilhe.module.css";

const Compartilhe = () => {
  const [inputEmail, setInputEmail] = useState('')

  function handleInputEmail(target){
    setInputEmail(target.value)
    console.log(inputEmail)
  }

  function validaEmail(){
    if(inputEmail.indexOf('@') > 2 && inputEmail.indexOf('.com') > inputEmail.indexOf('@')){
      alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }

  return (
    <section className={S.share}>
      <p>
        Preencha agora!
      </p>
      <form>
        <div>
          <label>Nome do seu amigo:</label>
          <input type="text" />
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" value={inputEmail} onChange={({target})=>handleInputEmail(target)}/>
        </div>
      </form>
      <button onClick={(event)=>{
          event.preventDefault()
          validaEmail()}
          }>Enviar</button>
    </section>
  );
};

export default Compartilhe;