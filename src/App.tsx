import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SurprisePage from "./pages/SurprisePage";

const App: React.FC = () => (
  <Router>
    <Layout>
      {/* AnimatePresence for exit animations between routes */}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surprise" element={<SurprisePage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  </Router>
);

export default App;