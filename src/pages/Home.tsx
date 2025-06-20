import React from "react";
import { motion, Variants } from "framer-motion";
import Hero from "../components/Hero";
import Wishes from "../components/Wishes";
import Gallery from "../components/Gallery";
import Surprise from "../components/Surprise";
import ojyImg from "../assets/ojy0.png";
import ojy1Img from "../assets/ojy4.png";
import ojy2Img from "../assets/ojy5.png";

const wishesArr = [
  "Wishing you a year filled with laughter, joy, and magic!",
  "Hope your special day is as awesome as you are.",
  "Enjoy every moment!"
];
const galleryImages = [ojyImg, ojy1Img, ojy2Img];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, ease: "easeOut" }
  }
};

const Home: React.FC = () => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="show"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "960px",
      margin: "0 auto",
      padding: "0 1.5rem"
    }}
  >
    <motion.div variants={itemVariants} style={{ width: "100%" }}>
      <Hero recipient="Jing Yi" />
    </motion.div>
    <motion.div variants={itemVariants} style={{ width: "100%" }}>
      <Wishes wishes={wishesArr} />
    </motion.div>
    <motion.div variants={itemVariants} style={{ width: "100%" }}>
      <Gallery images={galleryImages} />
    </motion.div>

    
    <motion.div
      variants={itemVariants}
      style={{
        width: "100%",
        display: "flex",        // Make this a flex container
        justifyContent: "center" // Center its content (the Surprise button)
      }}
    >
      <Surprise />
    </motion.div>
  </motion.div>
);

export default Home;