import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1 }}
    transition={{duration: 1.5}}

    className="flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img 
          initial={{
            x: -200,
            opacity: 0, 
          }}
          whileInView={{opacity: 1, x: 0}}
          transition={{
            duration: 1.2,
          }}
          viewport={{once: true}}
          src="https://i.pinimg.com/280x280_RS/01/43/2c/01432c796d859e4fff32cce75c43aa55.jpg"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50"> little</span> background </h4>
            <p className="text-base">
                Hi, I'm Maddy. I'm a Front-End Engineer. I'm a game engineer. While pursuing my bachelors degree in liberal arts, I realized I was missing the technical skills of my life entrepreneurship in discovering robotics. I fastpaced my learning and completed Flatiron School's Software Engineering bootcamp and have continued to fill out my knowledge and complete other courses gearing me in the right direction.
            </p>
        </div>
    </motion.div>
  )
}

export default About