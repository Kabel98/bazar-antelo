import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import fotoAlfombra from './imagenes/fotoAlfombra.jpg';
import fotoEquipo from './imagenes/fotoEquipo.webp';
import fotoMaceta from './imagenes/fotoMaceta.webp';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <header className="App-header">
        <ItemListContainer greeting="En construcción"></ItemListContainer>
        <ItemDetailContainer/>
      </header>
      
    </div>
  );
}

export default App; 
