import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import LocalrootPage from "./pages/LocalrootPage";
import IaPlatformPage from "./pages/IaPlatformPage";

function App() {
  return (
    <div className="global">
      <Router basename="/MyBlog">
        <Header />{" "}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/localroot" element={<LocalrootPage />} />
          <Route path="/ia-platform" element={<IaPlatformPage />} />{" "}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
