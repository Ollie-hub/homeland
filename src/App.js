import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from "./components/nav/Navbar";
import { AuthProvider } from "./components/login/AuthProvider";
import { Routes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;