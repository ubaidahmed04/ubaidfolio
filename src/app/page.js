"use client"
import Navigation from '../compnents/navigation'
import { ThemeProvider } from "@material-tailwind/react";
import Herosection from "@/compnents/Herosection";
import ContactSec from '@/compnents/Contact';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import {  Cardlink } from '@/compnents/Card';
import ScrollxSection from '@/compnents/ScrollScreen';
import {ProjectCard} from '@/compnents/ProjectCard';
import TextCard from '@/compnents/TextCard';
import About from '@/compnents/About';


export default function Home() {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight / 2; // Change this value to control when the animation triggers

      if (boxRef.current) {
        const boxTop = boxRef.current.getBoundingClientRect().top;

        if (boxTop < triggerHeight) {
          gsap.to(boxRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const bgClass = `bg-[var(--theme-color)]`;
  return (
    <ThemeProvider>
      <main className={bgClass}>
        <Navigation />
        <Herosection />

        <About/>
        <ScrollxSection/>
        <TextCard/>
        <div
          ref={boxRef}
          style={{
            opacity: 0,
            transform: 'translateY(50px)',
          }}
          className='flex flex-wrap justify-center'
        >
        <Cardlink />
        <Cardlink />
        <Cardlink />
        <Cardlink />
        </div>
        <div >
        <ContactSec />
        </div>
      </main>
    </ThemeProvider>
  );
}
 