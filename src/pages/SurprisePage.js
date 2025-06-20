import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import "@fontsource/quicksand"; // Ensure font is loaded for headings
import "@fontsource/roboto"; // Ensure font is loaded for body text
const SurprisePage = () => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.6, ease: "easeOut" }, style: {
        background: "rgba(255,255,255,0.98)",
        borderRadius: 16,
        boxShadow: "0 10px 50px rgba(0,0,0,0.1)",
        margin: "4rem auto",
        padding: "3.5rem 3rem",
        maxWidth: 680,
        textAlign: "center", // This centers everything in the main box
        backdropFilter: "blur(8px)",
        border: "1px solid #eee",
    }, children: [_jsx(motion.div, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { delay: 0.2, type: "spring", stiffness: 150, damping: 12 }, children: _jsx(FaGift, { size: 68, style: { color: "#E91E63", marginBottom: 25 } }) }), _jsx("h2", { style: {
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
                color: "#3F51B5",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                marginBottom: "1.5rem",
                textShadow: "1px 1px 3px rgba(0,0,0,0.05)",
            }, children: "A Special Message for You" }), _jsxs("p", { style: {
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "#555",
                margin: "1.5rem auto 2rem auto",
                maxWidth: "480px",
                textAlign: "center", // Explicitly center the text within this paragraph
            }, children: ["Dearest Jing Yi,", _jsx("br", {}), _jsx("br", {}), "On your birthday, I wish you continued success, happiness, and growth. May your year be filled with fulfilling moments and new opportunities.I value your friendship and contributions greatly.", _jsx("br", {}), _jsx("br", {}), _jsx("span", { style: { color: "#E91E63", fontWeight: 600 }, children: ":)" })] })] }));
export default SurprisePage;
