import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// Importa los componentes y páginas necesarios
import Inicio from "./pages/Inicio";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Interests from "./components/Interests";
import LocalrootPage from "./pages/LocalrootPage";
import IaPlatformPage from "./pages/IaPlatformPage"; // Import the new page

function App() {
  return (
    <div className="global">
      <Router basename="/MyBlog">
        <Header />{" "}
        {/* Asegura que el enrutador reconozca el prefijo "/MyBlog" */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/localroot" element={<LocalrootPage />} />
          <Route path="/ia-platform" element={<IaPlatformPage />} /> {/* Add the new route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
