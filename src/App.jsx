import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./components/Error"
import CardDetails from "./components/CardDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path=":id" element={<CardDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
