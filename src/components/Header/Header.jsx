import React from "react";
import S from "./Header.module.css";

const Header = () => {
  return (
      <header className={S.header}>
        <div className={S.content}>
          <section>
            <div className={S.fraseHeader}>
              <p className={S.primeiraLinha}>uma seleção de produtos</p>
              <h1 className={S.segundaLinha}>especial para você</h1>
            </div>
            <p>
              Todos os produtos desta lista foram selecionados a partir da sua
              navegação. Aproveite!
            </p>
          </section>
          <section className={S.sectionButton}>
            <div className={S.buttons}>
              <a href="">Conheça a Linx</a>
              <a href="">Ajude o algorítimo</a>
              <a href="">Seus produtos</a>
              <a href="">Compartilhe</a>
            </div>
          </section>
        </div>
      </header>
  );
};

export default Header;