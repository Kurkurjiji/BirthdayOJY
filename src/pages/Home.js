import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
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
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};
const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 12, ease: "easeOut" }
    }
};
const Home = () => (_jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "show", style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0 1.5rem"
    }, children: [_jsx(motion.div, { variants: itemVariants, style: { width: "100%" }, children: _jsx(Hero, { recipient: "Jing Yi" }) }), _jsx(motion.div, { variants: itemVariants, style: { width: "100%" }, children: _jsx(Wishes, { wishes: wishesArr }) }), _jsx(motion.div, { variants: itemVariants, style: { width: "100%" }, children: _jsx(Gallery, { images: galleryImages }) }), _jsx(motion.div, { variants: itemVariants, style: {
                width: "100%",
                display: "flex", // Make this a flex container
                justifyContent: "center" // Center its content (the Surprise button)
            }, children: _jsx(Surprise, {}) })] }));
export default Home;
