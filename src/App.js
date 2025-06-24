import Header from "./components/Header";
import Body from "./components/Body";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Private from "./components/Private";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
            <div className="Busy-bee-tree">
              <Header/>
              <Body/>
              <Gallery/>
              <FAQ/>
              <Private/>
            </div>
            </>
          }/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
