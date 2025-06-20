import React from "react";
import { motion } from "framer-motion";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
  <div style={{
    display: "flex", // Changed back to flexbox
    gap: "1.5rem",
    flexWrap: "nowrap", // THIS IS THE KEY: Prevents images from wrapping to the next line
    justifyContent: "center",
    alignItems: "center",
    margin: "3rem 0",
    padding: "0 1.5rem", // Padding for overall section
    maxWidth: "100%", // Ensure container doesn't overflow, but allows images to overflow if needed
    overflowX: "auto", // Allows horizontal scrolling if images exceed viewport width on small screens
    whiteSpace: "nowrap", // Prevents text content inside flex items from wrapping (though not directly for images)
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none",  // For IE/Edge
  }}
  // For Webkit browsers (Chrome, Safari) to hide scrollbar
  >
    {/* This style block hides the scrollbar but keeps scrolling functional */}
    <style dangerouslySetInnerHTML={{__html: `
      div::-webkit-scrollbar {
        display: none;
      }
    `}} />
    {images.map((img, idx) => (
      <motion.img
        key={idx}
        src={img}
        alt={`Memory ${idx + 1}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1 + idx * 0.08, duration: 0.7, ease: "easeOut" }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          y: -5,
          zIndex: 10
        }}
        style={{
          flexShrink: 0, // IMPORTANT: Prevents images from shrinking below their base size
          width: "calc(33.33% - 1rem)", // Distributes width for 3 images, accounting for gaps
          minWidth: "200px", // Optional: Set a minimum width so images don't become too tiny
          height: "200px", // Keep fixed height or adjust as needed
          borderRadius: 8,
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          objectFit: "cover",
          background: "#fff",
          border: "1px solid #eee",
          cursor: "pointer",
        }}
      />
    ))}
  </div>
);

export default Gallery;