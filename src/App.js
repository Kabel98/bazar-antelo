import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './componentes/Navbar';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartWidget from './componentes/CartWidget';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer greeting="En construcción"></ItemListContainer>
      </header>
    </div>
  );
}

export default App; 
