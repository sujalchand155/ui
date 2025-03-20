'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Clock, Camera } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample travel destinations for floating pictures
  const destinations = [
    { name: 'Paris', color: 'bg-amber-200',image : '/paris.jpg' },
    { name: 'Tokyo', color: 'bg-red-200', image: 'tokyo.jpg' },
    { name: 'Bali', color: 'bg-emerald-200', image: 'bali.jpg' },
    { name: 'New York', color: 'bg-blue-200', image: 'newyork.jpg' },
    { name: 'Rome', color: 'bg-orange-200', image: 'rome.jpg' }
  ];
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-white text-gray-800 overflow-hidden">
      {/* Cloud Animations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Cloud 1 */}
        <motion.div
          initial={{ x: '-100%', opacity: 0.8 }}
          animate={{ x: '100vw', opacity: 0.8 }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{ y: scrollY * 0.1 }}
          className="absolute top-20 left-0 w-64 h-32 bg-white rounded-full filter blur-md"
        />
        {/* Cloud 2 */}
        <motion.div
          initial={{ x: '-50%', opacity: 0.6 }}
          animate={{ x: '100vw', opacity: 0.6 }}
          transition={{
            duration: 90,
            repeat: Infinity,
            ease: 'linear',
            delay: 5
          }}
          style={{ y: scrollY * 0.05 }}
          className="absolute top-40 left-0 w-80 h-40 bg-white rounded-full filter blur-md"
        />
        {/* Cloud 3 */}
        <motion.div
          initial={{ x: '100vw', opacity: 0.7 }}
          animate={{ x: '-100%', opacity: 0.7 }}
          transition={{
            duration: 110,
            repeat: Infinity,
            ease: 'linear',
            delay: 10
          }}
          style={{ y: scrollY * 0.15 }}
          className="absolute top-60 right-0 w-56 h-28 bg-white rounded-full filter blur-md"
        />
      </div>

      {/* Airplane Animation */}
      <motion.div
        initial={{ x: '-10%', y: 100, opacity: 0 }}
        animate={{ x: '110%', y: 80, opacity: 1 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 10
        }}
        className="fixed top-1/4 z-10 pointer-events-none"
      >
        <div className="relative">
          <motion.div
            animate={{ y: [0, -5, 0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M90 20H10M90 20L70 10M90 20L70 30" stroke="white" strokeWidth="2"/>
              <path d="M95 18C95 15.8 93.2 14 91 14H55C52.8 14 51 15.8 51 18V22C51 24.2 52.8 26 55 26H91C93.2 26 95 24.2 95 22V18Z" fill="#3B82F6"/>
              <path d="M51 18C51 15.8 49.2 14 47 14H45C42.8 14 41 15.8 41 18V22C41 24.2 42.8 26 45 26H47C49.2 26 51 24.2 51 22V18Z" fill="#3B82F6"/>
              <path d="M41 19C41 17.9 40.1 17 39 17H37C35.9 17 35 17.9 35 19V21C35 22.1 35.9 23 37 23H39C40.1 23 41 22.1 41 21V19Z" fill="#3B82F6"/>
              <path d="M60 14L56 7C55.4 6.1 54.5 6 53.5 6H46.5C45.5 6 44.6 6.1 44 7L40 14" fill="#3B82F6"/>
              <path d="M75 26L71 33C70.4 33.9 69.5 34 68.5 34H61.5C60.5 34 59.6 33.9 59 33L55 26" fill="#3B82F6"/>
            </svg>
          </motion.div>
          <motion.div
            animate={{ 
              scaleX: [1, 0.7, 0.4, 0.1, 0],
              opacity: [0.8, 0.6, 0.4, 0.2, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatDelay: 0.5
            }}
            className="absolute top-1/2 right-0 w-20 h-1 bg-sky-200 rounded-full transform -translate-y-1/2 origin-right"
          />
        </div>
      </motion.div>

      {/* Floating Pictures */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {destinations.map((dest, index) => (
  <motion.div
    key={index}
    initial={{ 
      x: `${Math.random() * 100}%`, 
      y: `${Math.random() * 100}%`,
      opacity: 0,
      rotate: Math.random() * 20 - 10
    }}
    animate={{ 
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      opacity: [0, 0.8, 0.8, 0],
      rotate: Math.random() * 20 - 10
    }}
    transition={{
      duration: 30 + Math.random() * 15,
      repeat: Infinity,
      repeatType: 'reverse',
      delay: index * 5
    }}
    className={`absolute ${index % 2 === 0 ? 'w-32 h-24' : 'w-24 h-32'} rounded-lg shadow-lg flex items-center justify-center overflow-hidden`}
  >
    {/* Destination Image */}
    <img
      src={dest.image} 
      alt={dest.name} 
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Destination Name Overlay */}
    <div className="absolute inset-0 flex items-end justify-center p-2 bg-gradient-to-t from-black/50 to-transparent">
      <p className="text-white font-bold text-sm">{dest.name}</p>
    </div>

    {/* Camera Icon */}
    <div className="absolute top-2 right-2 bg-white rounded-full p-1">
      <Camera size={12} className="text-sky-500" />
    </div>
  </motion.div>
))}
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6 md:px-16 lg:px-24 bg-white/80 backdrop-blur-md shadow-md rounded-b-lg">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="14" fill="#3B82F6" />
              <path d="M14 7C12.6739 7 11.4021 7.52678 10.4645 8.46447C9.52678 9.40215 9 10.6739 9 12C9 15.11 11.89 19 14 22C16.11 19 19 15.11 19 12C19 10.6739 18.4732 9.40215 17.5355 8.46447C16.5979 7.52678 15.3261 7 14 7ZM14 14C13.4067 14 12.8266 13.7654 12.3891 13.3485C11.9516 12.9316 11.6838 12.3607 11.6479 11.7495C11.612 11.1384 11.8104 10.5409 12.2092 10.0727C12.6079 9.60453 13.1754 9.29568 13.8 9.21C14.2289 9.15861 14.6651 9.2195 15.0687 9.38807C15.4723 9.55664 15.8311 9.82736 16.1195 10.1758C16.4079 10.5243 16.618 10.9402 16.7345 11.39C16.851 11.8398 16.8711 12.3112 16.793 12.771C16.693 13.374 16.3947 13.9222 15.9516 14.3282C15.5085 14.7343 14.9476 14.9731 14.34 15C14.2265 15 14.113 15 14 15V14Z" fill="white" />
            </svg>
          </motion.div>
          <span className="text-2xl font-bold text-sky-600">AI-Nomad</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex gap-8 font-medium text-gray-700"
        >
          <motion.a 
            href="#features" 
            className="hover:text-sky-500 transition-colors relative"
            whileHover={{ scale: 1.05 }}
          >
            Features
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a 
            href="#how-it-works" 
            className="hover:text-sky-500 transition-colors relative"
            whileHover={{ scale: 1.05 }}
          >
            How It Works
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <motion.a 
            href="#testimonials" 
            className="hover:text-sky-500 transition-colors relative"
            whileHover={{ scale: 1.05 }}
          >
            Testimonials
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
        
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-5 py-2 bg-sky-500 text-white rounded-lg text-sm font-medium hover:bg-sky-600 transition-all"
          onClick={() => router.push('/login')}
        >
          Sign In
        </motion.button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-16 lg:px-24 pt-16 md:pt-32 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-sky-600"
            animate={{ 
              scale: [1, 1.01, 1],
              textShadow: [
                "0 0 0 rgba(0,0,0,0)", 
                "0 0 10px rgba(56,189,248,0.5)", 
                "0 0 0 rgba(0,0,0,0)"
              ] 
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            Explore The World
          </motion.h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Your AI-powered travel assistant for personalized itineraries, real-time guidance, and secure travel planning.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => router.push('/plan-trip')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-sky-500 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-2 shadow-md hover:bg-sky-600 transition-all"
            >
              Start Planning
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={18} />
              </motion.div>
            </motion.button>
            
            <motion.button
              onClick={() => router.push('/demo')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(226, 232, 240, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border border-gray-300 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
        
        {/* Floating Travel Elements */}
        <div className="mt-24 relative w-full max-w-4xl mx-auto h-64">
          <motion.div
            className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center"
            animate={{ 
              y: [0, -15, 0],
              rotate: [-2, 2, -2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-center">
              <div className="bg-sky-100 rounded-full p-3 mb-2 inline-block">
                <Globe size={24} className="text-sky-500" />
              </div>
              <p className="font-medium text-gray-800">Discover</p>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute top-20 right-1/4 w-32 h-32 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center"
            animate={{ 
              y: [0, 15, 0],
              rotate: [2, -2, 2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="text-center">
              <div className="bg-sky-100 rounded-full p-3 mb-2 inline-block">
                <Shield size={24} className="text-sky-500" />
              </div>
              <p className="font-medium text-gray-800">Secure</p>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-0 left-1/3 w-32 h-32 bg-white rounded-lg shadow-lg p-4 flex items-center justify-center"
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="text-center">
              <div className="bg-sky-100 rounded-full p-3 mb-2 inline-block">
                <Clock size={24} className="text-sky-500" />
              </div>
              <p className="font-medium text-gray-800">Real-time</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative z-10 bg-white py-16 px-6 md:px-16 lg:px-24 rounded-t-3xl shadow-md">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800">Smart Travel Features</h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Experience the future of travel with our AI-powered assistant
            </p>
          </motion.div>
          
          {/* Add your features here */}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white shadow-md px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="mr-2"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#3B82F6" />
                <path d="M14 7C12.6739 7 11.4021 7.52678 10.4645 8.46447C9.52678 9.40215 9 10.6739 9 12C9 15.11 11.89 19 14 22C16.11 19 19 15.11 19 12C19 10.6739 18.4732 9.40215 17.5355 8.46447C16.5979 7.52678 15.3261 7 14 7ZM14 14C13.4067 14 12.8266 13.7654 12.3891 13.3485C11.9516 12.9316 11.6838 12.3607 11.6479 11.7495C11.612 11.1384 11.8104 10.5409 12.2092 10.0727C12.6079 9.60453 13.1754 9.29568 13.8 9.21C14.2289 9.15861 14.6651 9.2195 15.0687 9.38807C15.4723 9.55664 15.8311 9.82736 16.1195 10.1758C16.4079 10.5243 16.618 10.9402 16.7345 11.39C16.851 11.8398 16.8711 12.3112 16.793 12.771C16.693 13.374 16.3947 13.9222 15.9516 14.3282C15.5085 14.7343 14.9476 14.9731 14.34 15C14.2265 15 14.113 15 14 15V14Z" fill="white" />
              </svg>
            </motion.div>
            <p className="text-2xl font-bold text-sky-600">AI-Nomad</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 text-center md:text-left">
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Company</h4>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-sky-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Resources</h4>
              <ul className="text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-sky-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-sky-500 transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-gray-300 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI-Nomad. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-sky-500 transition-colors">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-sky-500 transition-colors">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-sky-500 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}