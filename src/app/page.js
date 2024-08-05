"use client";
import Navigation from '../compnents/navigation'
import { Button, ThemeProvider } from "@material-tailwind/react";
import Herosection from "@/compnents/Herosection";
export default function Home() {
  return (
      <ThemeProvider>
    <main className="">
        <Navigation />
        <Herosection />







    </main>
      </ThemeProvider>
  );
}
