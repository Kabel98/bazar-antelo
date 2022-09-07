import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetail from './componentes/ItemDetail';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
        <header className="App-header">
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/productos/:category' element={<ItemListContainer/>}/>
            <Route path='/productos/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </header>
      
    </div>
    </BrowserRouter>
  );
}

export default App; 
