import MyForm from './components/MyForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Lucas", email: "lucas_sdl@hotmail.com", bio: "Sou um .net developer", role: "admin"}}/>
    </div>
  );
}

export default App;
