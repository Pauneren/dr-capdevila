import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="animate-fade-in">
    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
    Hi, We are <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">The Sveinssons</span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
    Web developer creating beautiful and functional digital experiences
    </p>
    <div className="flex justify-center space-x-6 mb-12">
    <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
    >
    <Github size={24} className="text-gray-700 dark:text-gray-300" />
    </a>
    <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
    >
    <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
    </a>
    <a
    href="mailto:paula1@ymail.com"
    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
    >
    <Mail size={24} className="text-gray-700 dark:text-gray-300" />
    </a>
    </div>
    <div className="flex justify-center space-x-4">
    <a
    href="#projects"
    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
    >
    View My Work
    </a>
    <a
    href="#contact"
    className="px-8 py-3 border-2 border-primary text-primary dark:text-primary dark:border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-200"
    >
    Get In Touch
    </a>
    </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
    </div>
    </div>
    </section>
  );
};

export default Hero;
