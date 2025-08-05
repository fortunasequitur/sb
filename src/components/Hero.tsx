"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Users, Search } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Splt = dynamic(() => import("react-spltjs"), { ssr: false });

// Komponen SplitText berbasis GSAP
type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: { opacity: number; y: number };
  to?: { opacity: number; y: number };
  threshold?: number;
  rootMargin?: string;
  letterClassName?: string;
  onLetterAnimationComplete?: () => void;
};

function SplitText({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  letterClassName = "",
  onLetterAnimationComplete = () => {},
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const letters = ref.current.querySelectorAll(".split-letter");
    gsap.set(letters, from);
    gsap.to(letters, {
      ...to,
      delay: delay / 1000,
      duration,
      ease,
      stagger: 0.04,
      onComplete: onLetterAnimationComplete,
    });
  }, [text]);

  // Split text into chars or words
  let content: React.ReactNode[] = [];
  if (splitType === "chars") {
    content = text.split("").map((char, i) => (
      <span key={i} className={`split-letter inline-block ${letterClassName}`}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  } else if (splitType === "words") {
    content = text.split(" ").map((word, i) => (
      <span key={i} className={`split-letter inline-block mr-1 ${letterClassName}`}>
        {word}
      </span>
    ));
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-block" }}
    >
      {content}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6 animate-fade-in">
          <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
          About Sobat Bermain
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          <SplitText
            text="Semua Bisa"
            className="block"
            splitType="chars"
            delay={100}
            duration={0.6}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            onLetterAnimationComplete={() => {}}
          />
          <br />
          <span>
            <SplitText
              text="Liburan"
              className="block"
              splitType="chars"
              delay={100}
              duration={0.6}
              ease="power3.out"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              letterClassName="text-white"
              onLetterAnimationComplete={() => {}}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up">
          Kami adalah Best Travel Organizer yang berada di Kota Malang.<br />
          Agendakan Event & Liburan Anda Bersama Kami!
        </p>
        {/* Search Form - DIHAPUS */}
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-slide-up">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            onClick={() => {
              const el = document.getElementById('packages');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Scroll Kebawah Untuk Cek Paket Tour
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">2000+</div>
            <div className="text-white/80 text-sm">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">20+</div>
            <div className="text-white/80 text-sm">Paket Wisata</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">4+</div>
            <div className="text-white/80 text-sm">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
            <div className="text-white/80 text-sm">Customer Support</div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg transition-colors"
        aria-label="Chat via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.824-2.05C13.41 27.633 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.18 0-2.334-.207-3.424-.613l-.244-.088-4.646 1.217 1.24-4.527-.158-.234C7.24 18.13 6.5 16.6 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.07-7.13c-.277-.139-1.637-.807-1.89-.899-.253-.093-.437-.139-.62.139-.184.277-.713.899-.874 1.085-.16.185-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.374-.824-.735-1.38-1.64-1.542-1.917-.16-.277-.017-.427.122-.565.126-.125.277-.32.416-.48.139-.16.185-.277.277-.462.093-.185.046-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.527-.01c-.17 0-.446.064-.68.3-.233.233-.89.87-.89 2.122 0 1.252.911 2.46 1.037 2.632.126.17 1.793 2.74 4.35 3.735.608.209 1.082.334 1.452.427.61.155 1.165.133 1.604.081.489-.057 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.116-.253-.185-.53-.324z"/>
        </svg>
      </a>
    </section>
  )
}
