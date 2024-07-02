import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import { Home, Services, About, Contact } from "./views"
import { Header, Footer } from "./componentsContainer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
