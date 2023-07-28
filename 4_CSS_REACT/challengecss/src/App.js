import Cars from './components/Cars';

import './App.css';

function App() {

  const cars = [
    {id: 1, name: "208", fabricante: "Peugeot", ano: 2013, km: 115600},
    {id: 2, name: "Renegade", fabricante: "Jeep", ano: 2020, km: 1000},
    {id: 3, name: "B101", fabricante: "BMW", ano: 2018, km: 85005},
    {id: 4, name: "M500", fabricante: "Mercedes", ano: 2021, km: 890}
  ]

  return (
    <div className="App">
      <h1>Stand de veículos</h1>
      {cars.map((car) => (
        <Cars car={car}/>
      ))}
    </div>
  );
}

export default App;
