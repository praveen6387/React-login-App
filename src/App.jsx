import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./Nav";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Home } from "./Home";

function App() {
  return (
    <div className="mainn">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
