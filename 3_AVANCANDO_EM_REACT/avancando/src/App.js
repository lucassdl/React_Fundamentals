import { useState } from 'react';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

import './App.css';
import City from './assets/city.jpg'

function App() {
  // const name = "Gabriel Lima";

  const [userName] = useState("Lucas Lima")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km:3434},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km:234}
  ]

  function showMessage(){
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, nome: "Biel Lima", idade: 7, profissao: "estudante"},
    {id: 2, nome: "Lucas Lima", idade: 39, profissao: "developer"},
    {id: 3, nome: "Fabiana Melo", idade: 50, profissao: "estudante"}
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      
      {/*props*/}
      <ShowUserName name={userName}/>
      
      {/*destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      
      {/*reaproveitando*/}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>
      
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.brand} km={car.km} newCar={car.newCar}/>
      ))}
      
      {/* fragment */}
      <Fragment propFragment="teste"/>
      
      {/* children */}
      <Container myValue="teste">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="teste 2">
        <p>Testando o container</p>
      </Container>
      
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      
      {/* desafio 4 */}
      {users.map((user) => (
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
      ))}
    </div>
  );
}

export default App;
