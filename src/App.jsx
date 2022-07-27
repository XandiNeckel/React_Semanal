import "./App.css";
import Header from "./components/Header/Header.jsx";
import CardProdutos from "./components/CardProdutos/CardProdutos.jsx";
// import Divisor from "./components/Divisor/Divisor.jsx";
// import Forms from "./components/Forms/Forms.jsx";
// import Text from "./components/Text/Text.jsx";
import { useEffect, useState } from "react";

function App() {
  const [produtos, setProdutos] = useState({});
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    async function GetApi() {
      const rota =
        "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";
      const data = await fetch(rota);
      setProdutos(await data.json());
      setCarregado(carregado => carregado = true)
    }
    GetApi();
  }, []);
  return (
    <div className="App">
      <Header />
      <ul>
        {carregado === true
          ? produtos.products.map((produto) => {
              return (
                <CardProdutos
                  img={produto.image}
                  title={produto.name}
                  descri={produto.desc}
                  precoAnterior={produto.oldPrice}
                  precoAtual={produto.price}
                  parcelas={produto.installments.value}
                  qtdParcelas={produto.installments.count}
                />
              );
            })
          : ""}
      </ul>
    </div>
  );
}

export default App;
