import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import CardDetails from "./pages/CardDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<CardDetails />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
