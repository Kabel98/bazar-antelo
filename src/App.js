import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContainer} from './componentes/CartContainer';
import {themeContext} from '../src/context/ThemeContext';
import { UserContext } from './context/UserContext';
import {CartProvider} from './context/CartContext';
import { PagFirebase } from './componentes/PagFirebase';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
        <themeContext.Provider value={{texto:"texto inicial", productos:[1,2,3]}}>
          <UserContext.Provider value={{rol:"Administrador"}}>
            <NavBar/>
          </UserContext.Provider>
            <header className="App-header">
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/productos' element={<ItemListContainer/>}/>
                <Route path='/category/:category' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<CartContainer/>}/>
                <Route path='/Item/:ItemId' element={<ItemDetailContainer/>}/>
                <Route path ='/firebase' element={<PagFirebase/>}/>
              </Routes>
            </header>
          </themeContext.Provider>
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App; 
