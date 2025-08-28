import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { motion } from "framer-motion";
import { containerVariants } from "./animationVariants";

function PortfolioGrid({ projects }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
      }}
    >
      {projects.map((proj, index) => (
        <PortfolioBlock
          key={index}
          image={proj.image}
          live={proj.live}
          source={proj.source}
          title={proj.title}
        />
      ))}
    </motion.div>
  );
}

export default PortfolioGrid;
