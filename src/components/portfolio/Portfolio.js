
import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animationVariants";  

export default function Portfolio({ innerRef }) {
  return (
    <Box 
      id="portfolio" 
      ref={innerRef} 
      sx={{ padding: "3rem 2rem" }} 
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="3rem"
      px="1rem" 
    >
      <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "2rem",
              }}
            >
              Portfolio
            </motion.h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <Grid 
          container 
          display="flex" 
          justifyContent="center" 
          spacing={4}
        >
          {info.portfolio.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }} // lift up on hover
                whileTap={{ scale: 0.97 }}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  background: "rgba(14, 5, 5, 0.01)",   // white card
                  border: "1px solid #e5e7eb", // subtle border
                  boxShadow: "0 6px 16px rgba(0,0,0,0.08)", // soft shadow
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <PortfolioBlock
                  image={project.image}
                  source={project.source}
                  title={project.title}
                  using={project.using}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}
