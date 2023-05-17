import "./App.css";
import TopNavigation from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div style={{ maxWidth: "100vw" }}>
        <TopNavigation />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
