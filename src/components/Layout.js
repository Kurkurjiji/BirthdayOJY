import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Confetti from "react-confetti";
import { useWindowSize } from "../hooks/useWindowSize";
import "@fontsource/quicksand";
import "@fontsource/roboto";
const Layout = ({ children }) => {
    const { width, height } = useWindowSize();
    return (_jsxs("div", { style: {
            minHeight: "100vh",
            minWidth: "100vw",
            background: "linear-gradient(135deg, #E0F2F7 0%, #BBDEFB 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // This centers the entire page content horizontally
            fontFamily: "'Roboto', sans-serif",
            overflowX: "hidden",
            position: "relative",
        }, children: [_jsx(Confetti, { width: width, height: height, numberOfPieces: 120, recycle: true, confettiSource: { x: 0, y: -20, w: width, h: 0 }, initialVelocityY: { min: 2, max: 6 }, colors: ['#3F51B5', '#E91E63', '#FFC107', '#00BCD4'] }), children, _jsxs("footer", { style: {
                    color: "#757575",
                    fontSize: 13,
                    margin: "2.5rem 0 1.5rem",
                    textAlign: "center",
                    padding: "0 1rem",
                    fontFamily: "'Roboto', sans-serif",
                }, children: ["Crafted with ", _jsx("span", { style: { color: "#E91E63" }, children: "\u2764" })] })] }));
};
export default Layout;
