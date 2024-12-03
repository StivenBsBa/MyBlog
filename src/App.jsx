import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa los componentes y páginas necesarios
import Inicio from "./pages/Inicio";
import About from "./components/About";
import EducationExperience from "./components/EducationExperience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import LocalrootPage from "./pages/LocalrootPage";

function App() {
  return (
    <Router basename="/MyBlog">
      {" "}
      {/* Asegura que el enrutador reconozca el prefijo "/MyBlog" */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<About />} />
        <Route path="/education-experience" element={<EducationExperience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/localroot" element={<LocalrootPage />} />
      </Routes>
    </Router>
  );
}

export default App;
