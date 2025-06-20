import React from "react";
import { motion } from "framer-motion";
import { FaBirthdayCake, FaRegLaughBeam } from "react-icons/fa";
import "@fontsource/quicksand"; // Ensure font is loaded

interface HeroProps {
  recipient: string;
}

const Hero: React.FC<HeroProps> = ({ recipient }) => (
  <motion.h1
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }} // Smoother animation
    style={{
      fontFamily: "'Quicksand', sans-serif", // Professional font
      fontSize: "clamp(2.5rem, 6vw, 4rem)", // Responsive font size
      fontWeight: 700, // Bolder for impact
      marginTop: "3rem",
      marginBottom: "0.8rem",
      color: "#3F51B5", // Deep blue
      textShadow: "0 1px 10px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      gap: "1.2rem",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "0 1rem",
    }}
  >
    <motion.span
      animate={{ scale: [1, 1.02, 1] }} // Subtle pulse
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
    >
      <FaRegLaughBeam style={{ color: "#FFC107", fontSize: "1.1em" }} /> {/* Gold accent */}
    </motion.span>
    Happy Birthday, <span style={{ color: "#E91E63" }}>{recipient}</span>! {/* Pink accent */}
    <motion.span
      animate={{ scale: [1, 1.02, 1] }} // Subtle pulse
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
    >
      <FaBirthdayCake style={{ color: "#00BCD4", fontSize: "1.1em" }} /> {/* Teal accent */}
    </motion.span>
  </motion.h1>
);

export default Hero;