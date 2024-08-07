"use client";
import React from 'react'
import Icon from './Icon';
import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import {fadeIn} from './variants'

function Herosection() {
  const bgClass = `bg-[var(--theme-color)]`;
  return (
    <>
      <div 
      
      className={`flex justify-between sm:px-5 md:px-[100px] xl:px-[300px] xl:justify-around ${bgClass}  h-[100vh] pt-[100px] `}>
        <motion.div
        variants={fadeIn('right',0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
         className='flex flex-col   p-5 w-[500px]'>
          <span className='text-2xl font-extrabold text-teal-200 '>Hi </span>
          <span className='text-2xl font-extrabold text-light-blue-200 pt-3'>I&apos;M </span>
          <span className='text-2xl font-extrabold text-cyan-200 pt-3'>Ubaid  Ahmed</span>
          <span className='text-2xl font-serif  text-teal-200 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat at nam provident ipsum consectetur voluptas odit. Id excepturi quas ipsa corrupti quae expedita ratione accusantium magnam exercitationem aliquam. Ipsum. </span>
          <Icon />
          <span className='flex gap-3 pt-16  flex-wrap sm:items-center justify-center md:gap-4 md:justify-start md:flex-nowrap b
          ' >
          <Button className=' w-1/2 bg-[#303030]    hover:shadow-[#7DC5BE]' >CONTACT ME</Button>
          <Button variant="outlined " className='w-1/2 bg-transparent   border hover:shadow-[#7DC5BE] hover:bg-[#303030]'>DOWNLOAD MY RESUME</Button>

          </span>


        </motion.div>
        <motion.div
         variants={fadeIn('left',0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.7}}
         className='hidden md:block  '>
          <img src='/Images/avatar.png' className='w-[300px]' alt="avatar" />
        </motion.div>
      </div>
    </>
  )
}

export default Herosection