// import React from 'react';
// import IconLink from "./IconLink";
// import {Box} from "@mui/material";

// function PortfolioBlock(props) {
//    const {image, live, source, title} = props;
//    return (
//       <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
//          <Box component={'img'} src={image} alt={'mockup'}/>
//          <h1 style={{fontSize: '2rem'}}>{title}</h1>
//          <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
//               alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
//             <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
//             </Box>
//             <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
//             </Box>
//          </Box>
//       </Box>
//    );
// }

// export default PortfolioBlock;

import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { itemVariants } from "./animationVariants";

function PortfolioBlock({ image, live, source, title,using }) {
  return (
    <motion.div variants={itemVariants}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        
        <motion.img
          src={image}
          alt="mockup"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{ borderRadius: "20px", boxShadow: "0 5px 20px rgba(0,0,0,0.15)" }}
        />

        <h3 style={{ fontSize: "1.5rem", marginTop: "1rem" }}>{title}</h3>
        <h5 style={{ fontSize: "1rem", marginTop: "1rem" }}>{using}</h5>

        <Box
          className="portfolio"
          display="flex"
          flexDirection="column"
          gap="0.5rem"
          alignItems="center"
          fontSize="1.5rem"
          py="2rem"
        >
          

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Box p={1} border="2px solid black" borderRadius="25px">
              <IconLink link={source} title="Source Code" icon="fa fa-code" />
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}

export default PortfolioBlock;
