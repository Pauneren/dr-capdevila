import React from 'react';
import { Code, Database, Palette, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', description: 'React, TypeScript, Tailwind CSS' },
    { icon: Database, title: 'Backend Development', description: 'Node.js, Python, PostgreSQL' },
    { icon: Palette, title: 'UI/UX Design', description: 'Figma, Adobe XD, Responsive Design' },
    { icon: Globe, title: 'Web Technologies', description: 'HTML5, CSS3, JavaScript ES6+' }
  ];
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
    About Me
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
    <div>
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
    Building Digital Experiences
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
    We are passionate developers with a keen eye for design and a love for creating 
    seamless user experiences. Our journey in tech started with curiosity and has 
    evolved into a career focused on building innovative solutions.
    </p>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
    We specialize in full-stack development, combining technical expertise with 
    creative problem-solving to bring ideas to life. Whether it's a sleek web 
    application or a complex backend system, we approach every project with 
    enthusiasm and attention to detail.
    </p>
    </div>
    <div className="grid grid-cols-2 gap-6">
    {skills.map((skill, index) => (
      <div
      key={index}
      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200"
      >
      <skill.icon className="w-8 h-8 text-primary mb-4" />
      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
      {skill.title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">
      {skill.description}
      </p>
      </div>
    ))}
    </div>
    </div>
    </div>
    </section>
  );
};

export default About;
