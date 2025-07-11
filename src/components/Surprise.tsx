import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import "@fontsource/roboto"; // Ensure font is loaded

const Surprise: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.button
      whileHover={{ scale: 1.03, backgroundColor: "#E91E63", color: "#fff", y: -3 }} // Subtle scale, color change, slight lift
      whileTap={{ scale: 0.98 }} // Gentle squish on tap
      style={{
        background: "#FFC107", // Gold accent color
        color: "#fff",
        border: "none",
        borderRadius: "8px", // Crisp, modern corners
        padding: "0.9rem 2.2rem",
        fontSize: "clamp(1rem, 3.5vw, 1.2rem)", // Responsive font size
        fontWeight: 500, // Medium weight
        fontFamily: "'Roboto', sans-serif",
        boxShadow: "0 4px 20px rgba(255,193,7,0.3)", // Professional shadow
        marginBottom: "3.5rem", // Increased margin
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease", // Smooth transitions
      }}
      onClick={() => navigate("/surprise")}
    >
      <FaGift style={{ marginRight: 10, fontSize: "1.1em" }} />
      View Special Message
    </motion.button>
  );
};

export default Surprise;