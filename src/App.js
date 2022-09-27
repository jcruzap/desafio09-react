import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';



function App() {


  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer saludo="Nuestros productos" />} />
            <Route path='categorias/:idCategorias' element={<ItemListContainer />} />
            <Route path='/detalles/:idProductos' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>ERROR 404: Pagina no encontrada</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;