import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from "./components/nav/Navbar";
import { AuthProvider } from "./components/login/AuthProvider";
import { Routes } from "./routes/routes";
import "./App.scss";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes />
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;