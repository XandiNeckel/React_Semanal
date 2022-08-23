import React, { useState } from "react";
import S from "./Cadastro.module.css";
import { cpf } from 'cpf-cnpj-validator'; 

const Cadastro = () => {
  const [inputEmail, setInputEmail] = useState('')
  const [inputCPF, setInputCPF] = useState('')

  function handleInputEmail(target){
    setInputEmail(target.value)
    console.log(inputEmail)
  }
  
  function handleInputCPF(target){
    setInputCPF(target.value)
    console.log(inputCPF)
  }

  function validaEmail(){
    if(inputEmail.indexOf('@') > 2 && inputEmail.indexOf('.com') > inputEmail.indexOf('@')){
      alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }


  function validaCPF(){
    if(cpf.isValid(inputCPF)){
      alert("CPF Válido")
    }else{
      alert("CPF Inválido")
    }
  }

  return (
    <section className={S.cadastro}>
      <div className={S.text}>
        <h3>Ajude o algorítimo a ser mais certeiro</h3>
        <p>LoRrem tipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.</p>
        <br></br>
        <p> MorbiS leu condimentumS urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.</p>
      </div>

      <form className={S.formCadastro}>
        <label>Seu nome:</label>
        <input type="text" />
        <label>E-mail:</label>
        <input type="email" value={inputEmail} onChange={({target})=>handleInputEmail(target)}/>
        <label>CPF:</label>
        <input type="text" value={inputCPF} onChange={({target})=>handleInputCPF(target)}/>
        <div className={S.radioInput}>
          <input type="radio" name='genero' value="masculino"/>
          <label htmlFor="Masculino">Masculino</label>
          <input type="radio" name='genero' value="feminino"/>
          <label htmlFor="feminino">Feminino</label>
        </div>
        <button onClick={(event)=>{
          event.preventDefault()
          validaEmail()
          validaCPF()
          }}>Enviar</button>
      </form>
    </section>
  );
};

export default Cadastro;