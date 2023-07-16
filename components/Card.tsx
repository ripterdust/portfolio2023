'use client';
import React, {ReactNode} from 'react';
import {motion} from 'framer-motion';

interface CardProps {
  children: ReactNode;
  keyName: number;
  classes?: string;
}

const Card = ({children, keyName, classes}: CardProps) => {
  const keyBasedDelay = keyName / 10;

  const props = {
    initial: {opacity: 0, scale: 0.5},
    animate: {
      opacity: 0.96,
      scale: 1
    },
    transition: {delay: 0.1 + keyBasedDelay},
    whileHover: {scale: 1.07, opacity: 1},
    whileTap: {scale: 0.95},
    className: `card ${classes}`
  };

  return <motion.div {...props}>{children}</motion.div>;
};

export default Card;
