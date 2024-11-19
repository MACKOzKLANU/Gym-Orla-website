import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Loader/Loader.css';
import './css/bootstrap.css';

import ItemList from './ItemList';
import Item from './Item';
import ItemDetail from './ItemDetail';
import Home from './Home';
import Navbar from './Navbar';



function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/exercise/:name' element={<Item></Item>}></Route>
          <Route path='/exercise/detail/:name' element={<ItemDetail></ItemDetail>}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;