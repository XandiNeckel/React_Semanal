import React from 'react'
import Cadastro from '../../Components/Cadastro/Cadastro'
import Compartilhe from '../../Components/Compartilhe/Compartilhe'
import Divisor from '../../Components/Divisor/Divisor'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Produtos from '../../Components/Produtos/Produtos'
import S from './Home.module.css'

const Home = () => {
  return (
    <div>
        <Header/>
        <main className={S.main}>
          <Cadastro/>
          <Divisor text='Sua opção especial'/>
          <Produtos/>
          <Divisor text='Compartilhe :)'/>
          <Compartilhe/>
        </main>
        <Footer/>
    </div>
  )
}

export default Home;