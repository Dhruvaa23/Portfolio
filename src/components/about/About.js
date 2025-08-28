// import React from 'react';
// import Style from './About.module.scss';
// import Terminal from "./Terminal";
// import {Box} from "@mui/material";
// import {info} from "../../info/Info";


// export default function About({innerRef}) {
//     const firstName = info.firstName.toLowerCase()

//     function aboutMeText() {
//         return <>
//             <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
//                 about{firstName} </p>
//             <p><span style={{color: info.baseColor}}>about{firstName} <span
//                 className={Style.green}>(main)</span> $ </span>
//                 {info.bio}
//             </p>
//         </>;
//     }

//     function skillsText() {
//         return <>
//             <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
//             </p>
//             <p><span style={{color: info.baseColor}}>skills/tools <span
//                 className={Style.green}>(main)</span> $</span> ls</p>
//             <p style={{color: info.baseColor}}> Proficient With</p>
//             <ul className={Style.skills}>
//                 {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
//             </ul>
//             <p style={{color: info.baseColor}}> Exposed To</p>
//             <ul className={Style.skills}>
//                 {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
//             </ul>
//         </>;
//     }

//     function miscText() {
//         return <>
//             <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
//                 hobbies/interests</p>
//             <p><span style={{color: info.baseColor}}>hobbies/interests <span
//                 className={Style.green}>(main)</span> $</span> ls</p>
//             <ul>
//                 {info.hobbies.map((hobby, index) => (
//                     <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
//                 ))}
//             </ul>
//         </>;
//     }

//     return (
//         <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
//             <Terminal text={aboutMeText()}/>
//             <Terminal text={skillsText()}/>
//             <Terminal text={miscText()}/>
//         </Box>
//     )
// }

import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { info } from "../../info/Info";
import devImg from "../../img/female-dev.png"; // <-- Put your uploaded image inside /src/img/ and rename it

// Import icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython,FaJava,FaGitAlt,FaGithub} from "react-icons/fa";
import { SiMongodb, SiJavascript,SiFlutter,SiExpress,SiOpencv,SiFigma} from "react-icons/si";

export default function About({ innerRef }) {
    const skills = [
        { icon: <FaReact color="#61DBFB" size={40} />, label: "React" },
        { icon: <SiJavascript color="#f7df1e" size={40} />, label: "JavaScript" },
        { icon: <FaNodeJs color="#68a063" size={40} />, label: "Node.js" },
        { icon: <SiExpress color="#000000" size={40} />, label: "Express.js" },
        { icon: <SiMongodb color="#4db33d" size={40} />, label: "MongoDB" },
        { icon: <FaPython color="#3776ab" size={40} />, label: "Python" },
        { icon: <FaJava color="#f89820" size={40} />, label: "Java" },
        { icon: <SiOpencv color="#5C3EE8" size={40} />, label: "OpenCV" },
        { icon: <FaGitAlt color="#F1502F" size={40} />, label: "Git" },
        { icon: <FaGithub color="#000000" size={40} />, label: "GitHub" },
        { icon: <SiFigma color="#F24E1E" size={40} />, label: "Figma" },
        { icon: <SiFlutter color="#02569b" size={40} />, label: "Flutter" },
        { icon: <FaHtml5 color="#e34c26" size={40} />, label: "HTML5" },
        { icon: <FaCss3Alt color="#264de4" size={40} />, label: "CSS3" },
    ];

    return (
        <Box
            ref={innerRef}
            id="about"
            display="flex"
            flexDirection="column"
            alignItems="center"
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
                }}
            >
                About Me 💫
            </motion.h1>

            {/* Profile Image + Bio */}
            <Grid container spacing={4} alignItems="center" justifyContent="center" mt={3}>
                <Grid item xs={12} md={5} textAlign="center">
                    <motion.img
                        src={devImg}
                        alt="Female Developer"
                        style={{
                            width: "250px",
                            borderRadius: "20px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="body1" textAlign="left" maxWidth="600px">
                            Hi, I'm{" "}
                            <span
                                style={{
                                    background: info.gradient,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: "bold",
                                }}
                            >
                                {info.firstName} {info.lastName}
                            </span>
                            , a passionate {info.position}. {info.bio}
                        </Typography>
                    </motion.div>
                </Grid>
            </Grid>

            {/* Skills */}
        
            
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
                    marginTop: "3rem",
                }}
                 
            >
                Skills 
            </motion.h1>
                <Grid container spacing={4} justifyContent="center">
                    {skills.map((skill, index) => (
                        <Grid item xs={4} sm={3} md={2} key={index}>
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                style={{ textAlign: "center" }}
                            >
                                {skill.icon}
                                <Typography variant="subtitle1" mt={1}>
                                    {skill.label}
                                </Typography>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            
        </Box>
    );
}
