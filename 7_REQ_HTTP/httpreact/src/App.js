import './App.css';

import { useState, useEffect } from 'react';

// 4- custom hook
import { useFetch } from './hooks/useFetch';

function App() {
  const url = "http://localhost:3000/products";

  const [products, setProducts] = useState([]);

  // 4- custom
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");


  // 1- resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // 2- add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product)
    })

    //3- carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5- refatorando o post
    httpConfig(product, "POST")

    setName("");
    setPrice("");
  };

  // 6- desafio
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6- loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items && items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
              <button onClick={() => handleRemove(item.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </label>
          <p>
            {/* 7- state de loading no POST */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
