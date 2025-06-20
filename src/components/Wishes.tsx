import React from "react";
import { motion } from "framer-motion";
import "@fontsource/roboto"; // Ensure font is loaded

interface WishesProps {
  wishes: string[];
}

const Wishes: React.FC<WishesProps> = ({ wishes }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
    style={{
      background: "rgba(255,255,255,0.95)", // Clean white background
      borderRadius: 16, // Softer corners
      boxShadow: "0 6px 30px rgba(0,0,0,0.08)", // Professional shadow
      padding: "2.5rem",
      maxWidth: 600, // Wider for modern feel
      margin: "1.5rem auto 2.5rem auto",
      textAlign: "center",
      fontSize: "clamp(1rem, 3vw, 1.15rem)", // Responsive body font size
      fontFamily: "'Roboto', sans-serif", // Professional body font
      color: "#424242", // Dark grey for readability
      backdropFilter: "blur(6px)", // Consistent blur
    }}
  >
    {wishes.map((wish, i) => (
      <motion.p // Changed to p for paragraphs of wishes
        key={i}
        whileHover={{
          scale: 1.01,
          x: 5, // Subtle shift right on hover
          color: "#3F51B5" // Highlight color
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
          marginBottom: "1.2em",
          color: "#616161", // Softer grey for wishes
          fontWeight: 400, // Lighter weight
          lineHeight: 1.6, // Improved readability
          padding: "0.5em 0",
          cursor: "default" // Indicate not clickable
        }}
      >
        {wish}
      </motion.p>
    ))}
  </motion.div>
);

export default Wishes;