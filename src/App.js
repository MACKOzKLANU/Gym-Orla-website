import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Loader/Loader.css';


import Item from './Item';
import Home from './Home';
import Navbar from './Navbar';
import Exercises from './Exercises';
import Pricing from './Pricing';
import Tests from './Tests';
import MuscleGroup from './MuscleGroup';



function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/exercises' element={<Exercises></Exercises>}></Route>
          <Route path='/exercise/:id' element={<Item></Item>}></Route>
          <Route path='/pricing' element={<Pricing></Pricing>}></Route>
          <Route path='/test' element={<Tests></Tests>}></Route>
          <Route path='/testing' element={<MuscleGroup></MuscleGroup>}></Route>



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;