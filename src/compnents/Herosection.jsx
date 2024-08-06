"use client";
import React from 'react'
import Icon from './Icon';
import { Button } from '@material-tailwind/react';
function Herosection() {
  const bgClass = `bg-[var(--theme-color)]`;
  return (
    <>
      <div className={`flex justify-between sm:px-5 md:px-[100px] xl:px-[300px] xl:justify-around ${bgClass}  h-[100vh] pt-[100px] `}>
        <div className='flex flex-col   p-5 w-[500px]'>
          <span className='text-2xl font-extrabold text-teal-200 '>Hi </span>
          <span className='text-2xl font-extrabold text-light-blue-200 pt-3'> I'M </span>
          <span className='text-2xl font-extrabold text-cyan-200 pt-3'>Ubaid  Ahmed</span>
          <span className='text-2xl font-serif  text-teal-200 pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat at nam provident ipsum consectetur voluptas odit. Id excepturi quas ipsa corrupti quae expedita ratione accusantium magnam exercitationem aliquam. Ipsum. </span>
          <Icon />
          <span className='flex gap-3 pt-16  flex-wrap sm:items-center justify-center md:gap-4 md:justify-start md:flex-nowrap b
          ' >
          <Button className=' w-1/2    hover:shadow-gray-600' variant="gradient">outlined</Button>
          <Button variant="outlined " className='w-1/2 bg-transparent  border hover:shadow-gray-600'>outlined</Button>

          </span>


        </div>
        <div className='hidden md:block  '>
          <img src='/Images/avatar.png' className='w-[300px]' alt="avatar" />
        </div>
      </div>
    </>
  )
}

export default Herosection