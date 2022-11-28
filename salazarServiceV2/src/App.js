
import './App.css';
import Header from './componentes/header';
import './styleLeaves/Header.css';
function App() {
  return (
    <div className="App">
      <Header
      link1='index.html'
      brand="Salazar Services"
      opcion1="Home"
      link2='index.html'
      opcion2="Contact us"
      link3='#contact'
      opcion3="About us"
      link4='#about'
      opcion4="Service"
      link5='#contact'
      opcion5="Our Jobs"
      link6='#contact'
      />
    </div>
  );
}

export default App;
