import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SurprisePage from "./pages/SurprisePage";

const App: React.FC = () => (
  <Router basename={import.meta.env.BASE_URL}>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surprise" element={<SurprisePage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
