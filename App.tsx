
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Rain from './components/Rain';
import Tree from './components/Tree';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const rainRef = useRef<HTMLDivElement>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // Long scroll for storytelling
        pin: true,
        scrub: 1.5,
        // markers: true, // For debugging if needed
      }
    });

    // Phase 1: The Storm Arrival
    tl.to(mainRef.current, {
      backgroundColor: '#2d3748', // Dark stormy blue-grey
      duration: 1
    }, 0);

    tl.fromTo(".rain-drop", 
      { y: -100, opacity: 0 },
      { y: 800, opacity: 0.6, stagger: 0.02, duration: 2, ease: "power1.in" },
      0
    );

    tl.to(textRef.current, {
      opacity: 0,
      y: -50,
      duration: 1
    }, 0.5);

    // Phase 2: The Impact & Soaking
    tl.to(mainRef.current, {
      backgroundColor: '#3d2b1f', // Deep rich soil brown
      duration: 2
    }, 1.5);

    tl.to(groundRef.current, {
      backgroundColor: '#2a1a0f',
      height: '15vh',
      duration: 1
    }, 1.5);

    tl.to(".rain-drop", {
      opacity: 0,
      duration: 0.5,
      scale: 2
    }, 1.8);

    // Phase 3: The Growth
    tl.fromTo(".tree-path", 
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 3, ease: "power2.out", stagger: 0.1 },
      2
    );

    tl.to(".tree-leaf", {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      stagger: 0.05,
      ease: "back.out(1.7)"
    }, 3.5);

    // Final Branding Reveal
    tl.fromTo(".brand-reveal",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5 },
      4
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* Background Layer */}
      <div 
        ref={mainRef} 
        className="absolute inset-0 w-full h-full bg-[#1a202c] transition-colors duration-1000"
      />

      {/* Rain Layer */}
      <div ref={rainRef} className="absolute inset-0 pointer-events-none z-10">
        <Rain count={80} />
      </div>

      {/* Atmosphere / Fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0" />

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        
        {/* Initial Hero Text */}
        <div ref={textRef} className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl text-blue-100/80 mb-6 font-light tracking-tighter">
            Petrichor
          </h1>
          <p className="text-xl md:text-2xl text-blue-200/50 font-light italic">
            The scent of rain on dry earth.
          </p>
          <div className="mt-12 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-blue-100/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* Tree Growth Area */}
        <div ref={treeRef} className="absolute bottom-[10vh] w-full flex justify-center items-end h-[70vh]">
          <Tree />
        </div>

        {/* Brand Final Message */}
        <div className="brand-reveal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 pointer-events-none">
          <h2 className="text-5xl md:text-7xl text-amber-50 font-medium mb-4">Life from Earth.</h2>
          <p className="text-lg md:text-xl text-amber-200/60 max-w-lg mx-auto leading-relaxed">
            Petrichor is more than a scent. It's the moment the world breathes again. 
            Rooted in nature, grounded in purity.
          </p>
          <button className="mt-8 px-8 py-3 bg-amber-900/40 border border-amber-700/50 text-amber-50 rounded-full hover:bg-amber-800/60 transition-colors backdrop-blur-sm">
            Explore the Collection
          </button>
        </div>
      </div>

      {/* Ground Line */}
      <div 
        ref={groundRef} 
        className="absolute bottom-0 left-0 w-full h-[5vh] bg-[#1a202c] z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000"
      />
    </div>
  );
};

export default App;
