"use client"
import Navigation from '../compnents/navigation'
import { ThemeProvider } from "@material-tailwind/react";
import Herosection from "@/compnents/Herosection";
import ContactSec from '@/compnents/Contact';
import { useRef, useEffect, useState } from 'react';
import { Cardlink } from '@/compnents/Card';
import ScrollxSection from '@/compnents/ScrollScreen';
import ProjectSlide from '@/compnents/projectSlide';
import About from '@/compnents/About';
import Experience from '@/compnents/Experience';
import Loader from '@/compnents/Loader';
import { useDispatch, useSelector } from 'react-redux';
import GithubContribute from '@/compnents/GithubContribute';
import { fadeIn, } from '../compnents/variants';
import { motion } from 'framer-motion';
export default function Home() {
  const isTheme = useSelector((state) => state.theme.isTheme);

  const [loader, setLoader] = useState(true)
  const HomeRef = useRef(null)
  const sectionRef = useRef(null)
  const projectRef = useRef(null)
  const aboutRef = useRef(null)
  function scrollTo(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 0)
    return () => clearTimeout(timer)
  }, [])
  return (
    <ThemeProvider >
      {
        loader ? <div className='h-[100vh] flex justify-center items-center bg-dark'>
          <Loader />
        </div> : (
          <main className={` ${isTheme ? 'bg-dark text-dark' : 'bg-light text-light'}`}>
            <Navigation props={scrollTo} sectionRef={sectionRef} />
            <Herosection />

            <About />
            <Experience />
            <ProjectSlide />
            {/* <TextCard/> */}
            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className='flex flex-wrap justify-center py-20'
            >
              <Cardlink path="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
              <Cardlink path="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.091.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.024A9.563 9.563 0 0112 6.844c.853.004 1.71.115 2.51.338 1.909-1.293 2.748-1.024 2.748-1.024.545 1.378.202 2.397.1 2.65.64.698 1.028 1.59 1.028 2.682 0 3.843-2.337 4.687-4.566 4.935.359.31.678.923.678 1.858 0 1.34-.012 2.422-.012 2.75 0 .267.181.576.688.478C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              <Cardlink path="M27.892 3.501c-.531-.356-1.201-.358-1.735-.004l-5.379 3.357-8.946 5.536-3.902-3.318c-.79-.641-1.88-.725-2.747-.216l-3.354 2.01c-.659.396-.999 1.072-.98 1.823.02.75.398 1.442 1.046 1.843l3.599 2.197-3.599 2.197c-.648.401-1.026 1.093-1.046 1.843-.02.751.321 1.427.98 1.823l3.354 2.01c.868.509 1.957.425 2.747-.216l3.902-3.318 8.946 5.536 5.379 3.357c.534.355 1.204.352 1.735-.004.532-.355.849-.984.849-1.649v-22.7c0-.664-.317-1.293-.849-1.648zM20.778 25.45l-10.106-7.774-1.579-1.216 1.579-1.216 10.106-7.774v17.98z" />
              <Cardlink path="M23.546 10.73L13.27.454a1.551 1.551 0 00-2.192 0l-2.1 2.1 2.839 2.839a2.54 2.54 0 013.13 3.13l2.82 2.82a2.54 2.54 0 11-1.062 1.062l-2.69-2.69v6.19a2.54 2.54 0 11-1.5-.05v-6.14a2.54 2.54 0 01-1.2-3.25L7.665 4.59l-6.211 6.2a1.551 1.551 0 000 2.191l10.276 10.276a1.551 1.551 0 002.191 0L23.546 12.92a1.551 1.551 0 000-2.191z" />
              <Cardlink path="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </motion.div>
            <span>
              <GithubContribute />
            </span>
            <span ref={sectionRef}>
              <ContactSec />

            </span>
          </main>)
      }

    </ThemeProvider>

  );
}
