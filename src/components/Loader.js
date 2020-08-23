import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {
  width: `2rem`,
  height: `2rem`,
  display: `flex`,
  justifyContent: `space-around`,
  alignItems: `center`,
  paddingBottom: `.5rem`
};

const loadingCircle = {
  display: `block`,
  width: `0.3rem`,
  height: `0.3rem`,
  backgroundColor: `transparent`,
  border: `.025rem solid black `,
  borderRadius: `0.25rem`
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

export default function ThreeDotsWave() {
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
}
