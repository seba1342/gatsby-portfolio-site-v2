import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: `2rem`,
  height: `2rem`,
  display: `flex`,
  justifyContent: `space-around`,
  alignItems: `center`
};

const loadingCircle = {
  display: `block`,
  width: `0.35rem`,
  height: `0.35rem`,
  backgroundColor: `black`,
  borderRadius: `100%`
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingCircleVariants = {
  start: {
    y: `50%`
  },
  end: {
    y: `100%`
  }
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: `easeInOut`
};

const ThreeDotsWave = () => {
  if (!motion) {
    return null;
  }

  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

export default ThreeDotsWave;
