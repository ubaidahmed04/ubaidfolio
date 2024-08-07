import React from 'react'
import { ProfileCard } from './ProfileCard'
import { motion } from 'framer-motion';
import {fadeIn} from './variants'
function About() {
  return (
    <>
        <div className='sm:px-5 md:px-[100px] xl:px-[300px] xl:justify-around flex flex-row '>
          <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
           className='flex flex-col gap-4'>
                <span className='text-2xl text-teal-200'>ABOUT ME</span>
                <span className='text-[#ABC0BC]'>
                I'm a web and application developer with a passion for creating beautiful and functional digital solutions. My journey began with my studies in computer science, which I completed at SMIT. During my time there, I developed a strong foundation in programming and web development, which has been crucial in my career.
                </span>
                <span className='text-[#ABC0BC]'>
                I specialize in using modern technologies like React and Next.js. With React, I build dynamic and responsive user interfaces that provide an excellent user experience. Next.js allows me to create powerful server-rendered applications that are fast and SEO-friendly. Im also proficient with various libraries and tools that complement these technologies, ensuring I can tackle a wide range of projects efficiently.
                </span>
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
           className=''>
              <ProfileCard/>
          </motion.div>
        </div>
    </>
  )
}

export default About