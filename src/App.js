import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SurprisePage from "./pages/SurprisePage";
const App = () => (_jsx(Router, { children: _jsx(Layout, { children: _jsx(AnimatePresence, { mode: "wait", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/surprise", element: _jsx(SurprisePage, {}) })] }) }) }) }));
export default App;
