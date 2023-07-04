import React from 'react'
import {BallCanvas} from '../components/canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { RotateSpin } from '../utils/motion'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <div className="flex 
    flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology,index) => (
        <motion.div className="w-28 h-28 " key={technology.name}>
        <BallCanvas icon={technology.icon}/>
      </motion.div>
      ))}
      
    </div>
  )
}

export default SectionWrapper(Tech,"")