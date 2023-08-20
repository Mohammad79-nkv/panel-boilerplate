import { pageAnimation } from './../../config/animation';
import { motion } from 'framer-motion'
import React from 'react'

interface ContainerAnimationProps {
    children: JSX.Element | React.ReactNode | React.ReactElement
}

function ContainerAnimation(props:ContainerAnimationProps) {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        {props.children}
    </motion.div>
      )
}
export default ContainerAnimation