import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BrowsePage from "./pages/BrowsePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className={"pages"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/freshwater" element={<BrowsePage category={"Freshwater"} />} />
            <Route path="/saltwater" element={<BrowsePage category={"Saltwater"} />} />
            <Route path="/reptile" element={<BrowsePage category={"Reptile"} />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/about" element={<h1>About</h1>} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
