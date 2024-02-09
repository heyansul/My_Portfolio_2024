import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      duration: 25,
      repeatType: 'mirror',
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ANSHUL SHARMA</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Web Developer and UI Designer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">
                See the Latest Works
              </a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="./Anshul_resume.pdf" target="_blank" rel="noopener noreferrer" download>
                Download Resume
              </a>
            </motion.button>
          </motion.div>
          <motion.img src="/scroll.png" animate="scrollButton" alt="" variants={textVariants} />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Your Ideas into Code
      </motion.div>
      <div className="imageContainer">
        <img src="/hro2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;