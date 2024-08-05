"use client";
import React from 'react'
// import Avatar from '@/public/Images/avatar.png' 
function Herosection() {
    const bgClass = `bg-[var(--theme-color)]`;
  return (
    <div className={`bg-blue-gray-300 flex justify-center items-center flex-1`}>
        <div className='flex flex-col bg-blue-gray-500 basis-1/4 p-5 '>
            <span>Hi </span>
            <span>I'M </span>
            <span>Ubaid </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat at nam provident ipsum consectetur voluptas odit. Id excepturi quas ipsa corrupti quae expedita ratione accusantium magnam exercitationem aliquam. Ipsum. </span>


        </div>
        <div>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VcEVGnphIVcwtRGu9wPaVXimUdWeLq8oBw&s"} alt="avatar" />
        </div>
    </div>
  )
}

export default Herosection