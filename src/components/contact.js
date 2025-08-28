

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Box, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import { info } from "../info/Info";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_drv27w7", // Service ID
        "template_u9e1l5r", // Template ID
        form.current,
        "SNqHLzV376Z-WVOEp" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send. Try again!");
        }
      );
  };

  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        maxWidth: "600px",   // keep it neat
        mx: "auto",          // center horizontally
        p: 3, 
        alignItems :"center",
        padding:"2rem",            // padding inside
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        
      }}
      mt="3rem"
      px="1rem" 
    >
      {/* Title */}
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
        Contact Me
      </motion.h1>

      {/* Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          width: "100%",
          maxWidth: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          
        }}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          name="name"
          required
          fullWidth
          sx={{
            input: { color: "#bbb" },
            label: { color: "#bbb" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#aaa" },
              "&.Mui-focused fieldset": { borderColor: "#3f51b5" },
            },
          }}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          type="email"
          name="email"
          required
          fullWidth
          sx={{
            input: { color: "#bbb" },
            label: { color: "#bbb" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#aaa" },
              "&.Mui-focused fieldset": { borderColor: "#3f51b5" },
            },
          }}
        />
        <TextField
          label="Message"
          variant="outlined"
          name="message"
          required
          fullWidth
          multiline
          rows={4}
          sx={{
           "& .MuiInputBase-input": {
              color: "#bbb", // works for both input & textarea
            },
            "& .MuiInputLabel-root": {
              color: "#bbb",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#aaa" },
              "&.Mui-focused fieldset": { borderColor: "#3f51b5" },
            },
          }}
        />

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(45deg, #3f51b5, #5c6bc0)",
              color: "white",
              fontWeight: "bold",
              padding: "0.75rem",
              borderRadius: "8px",
              textTransform: "none",
            }}
            fullWidth
          >
            Send Message
          </Button>
        </motion.div>
      </motion.form>
    </Box>
  );
}
