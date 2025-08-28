// import React from 'react';
// import Style from './Home.module.scss';
// import me from '../../img/self.png';
// import classNames from 'classnames';
// import EmojiBullet from "./EmojiBullet";
// import SocialIcon from "./SocialIcon";
// import {Box} from "@mui/material";
// import {info} from "../../info/Info";

// export default function Home({innerRef}) {

//    return (
//       <Box ref={innerRef} component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
//            justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
//          <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{background: info.gradient}} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
//               height={{xs: '35vh', md: '40vh'}}
//               borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
//          <Box>
//             <h1>Hi, I'm <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{info.firstName}</span><span className={Style.hand}>🤚</span>
//             </h1>
//             <h2>I'm {info.position}.</h2>
//             <Box component={'ul'} p={'0.8rem'}>
//                {info.miniBio.map((bio, index) => (
//                   <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
//                ))}
//             </Box>
//             <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
//                {info.socials.map((social, index) => (
//                   <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
//                ))}
//             </Box>
//          </Box>
//       </Box>
//    )
// }

// import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.jpeg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box, Button } from "@mui/material";
import { info } from "../../info/Info";
import { motion } from "framer-motion";

// Import all other sections
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from '../contact';


export default function Home({ innerRef }) {
   return (
      <Box
         ref={innerRef}
         component={'main'}
         display={'flex'}
         flexDirection={'column'}
         alignItems={'center'}
         justifyContent={'center'}
         id={'home'}
      >
         {/* ---------- Hero Section ---------- */}
         <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={'100vh'}
         >
            {/* Avatar with motion */}
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
               transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
               }}
               whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0px 0px 30px rgba(255,105,180,0.8)"
               }}
               style={{
                  borderRadius: "50%",
                  padding: "0.8rem",
                  background: "linear-gradient(135deg, #ff6ec4, #7873f5)",
                  boxShadow: "0px 0px 20px rgba(255,105,180,0.6)"
               }}
            >
               <motion.img
                  src={me}
                  alt="developer"
                  className={classNames(Style.avatar, Style.shadowed)}
                  width="300"
                  height="300"
                  style={{
                     borderRadius: "50%",
                     border: "4px solid white",
                     boxShadow: "0px 5px 20px rgba(0,0,0,0.2)"
                  }}
                  whileHover={{ rotate: -5 }}
                  transition={{ type: "spring", stiffness: 120 }}
               />
            </motion.div>

            {/* Intro text */}
            <Box ml={{ md: "2rem" }} textAlign={{ xs: "center", md: "left" }}>
               <motion.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
               >
                  Hi, I'm{" "}
                  <span
                     style={{
                        background: info.gradient,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                     }}
                  >
                     {info.firstName}
                  </span>
                  <span className={Style.hand}>🤚</span>
               </motion.h1>

               <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
               >
                  I'm {info.position}.
               </motion.h2>

               {/* Bio list */}
               <Box component={'ul'} p={'0.8rem'}>
                  {info.miniBio.map((bio, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                     >
                        <EmojiBullet emoji={bio.emoji} text={bio.text} />
                     </motion.div>
                  ))}
               </Box>

               {/* Resume button */}
               <Button
                  variant="contained"
                  color="primary"
                  href="/resume.pdf"   // place resume.pdf in public/
                  download
                  sx={{ minWidth: 150, marginBottom: "1rem" }}
               >
                  Resume
               </Button>

               {/* Social icons */}
               <Box
                  display={'flex'}
                  gap={'1.5rem'}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  fontSize={{ xs: '2rem', md: '2.5rem' }}
               >
                  {info.socials.map((social, index) => (
                     <motion.div
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 200 }}
                     >
                        <SocialIcon
                           link={social.link}
                           icon={social.icon}
                           label={social.label}
                        />
                     </motion.div>
                  ))}
               </Box>
            </Box>
         </Box>

         {/* ---------- Other Sections (One-Page) ---------- */}
         <div id="about"><About /></div>
         <div id="portfolio"><Portfolio /></div>
         <Box
            id="contact"
            component="section"
            sx={{
               width: "100%",
               minHeight: "100vh",         // full screen height
               display: "flex",
               justifyContent: "center",
               alignItems: "center",       // vertical center
               bgcolor: "transparent",     // or set background if needed
               px: 2,                      // side padding for mobile
            }}
            >
            <Contact />
            </Box>

      </Box>
   );
}
