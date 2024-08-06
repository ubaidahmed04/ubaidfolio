'use client'
import React from 'react'
import { FaFacebookF , } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IconButton } from '@material-tailwind/react';
function Icon() {
  return (
    <>
    <div className='flex flex-row gap-8 pt-5' >
    <IconButton className="rounded-full bg-blue-900">
      <FaFacebookF size={'20px'} />  
      </IconButton>
    <IconButton className="rounded-full bg-red-400">
      <MdMail  size={'20px'}/>
      </IconButton>
    <IconButton className="rounded-full bg-blue-500">
      <FaLinkedinIn size={'20px'}/>
      </IconButton>
    <IconButton className="rounded-full">
    <FaGithub  size={'20px'}/>
      </IconButton>
    </div>


    </>
  )
}

export default Icon