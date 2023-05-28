import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import Users from "./components/Users";
import About from "./components/About";
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
