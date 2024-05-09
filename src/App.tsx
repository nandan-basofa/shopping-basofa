import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/store" element={<Store></Store>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
