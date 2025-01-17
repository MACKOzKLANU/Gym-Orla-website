import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Loader/Loader.css";

import Item from "./Item";
import Home from "./Home";
import Navbar from "./Navbar";
import Exercises from "./Exercises";
import Pricing from "./Pricing";
import About from "./About";
import Contact from "./Contact";
import PageInProgress from "./PageInProgress";
import Docs from "./Docs";
import BackToTop from "./BackToTop";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Favorites from "./Favorites";
import BookingPage from "./BookingPage";
import CalorieCalculator from "./CalorieCalculator";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/exercises" element={<Exercises></Exercises>}></Route>
          <Route path="/exercise/:id" element={<Item></Item>}></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/booking" element={<BookingPage></BookingPage>}></Route>
          <Route path="caloriecalculator" element={<CalorieCalculator></CalorieCalculator>}></Route>

          <Route
            path="/pageinprogress"
            element={<PageInProgress></PageInProgress>}
          ></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>

          <Route path="/docs" element={<Docs></Docs>}></Route>
        </Routes>
        <BackToTop></BackToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
