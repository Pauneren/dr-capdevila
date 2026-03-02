import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repoHref?: string;
  image: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Psychologist Personal Website',
      description: 'A professional personal website for a psychologist featuring appointment booking, service information, and a calming design aesthetic.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'UX/UI', 'GitHub', 'SEO', 'Performance'],
      href: 'https://pauneren.github.io/psicolog-website/',
      repoHref: '#',
      image: '/images/projects/psicologist-website-project.png',
    },
    {
      title: 'Product Landing Page',
      description: 'A high-converting landing page with clean typography and motion-driven UI.',
      tags: ['UI/UX', 'Responsive', 'Performance', 'JavaScript ES6+', 'GitHub', 'SEO', 'Geolocalización'],
      href: 'https://pauneren.github.io/dr-capdevila/',
      repoHref: '#',
      image: '/images/projects/projecto2-dr-capdevila.png',
    },
    {
      title: 'Full-Stack App',
      description: 'A full-stack application with authentication, database integration, and a polished UI.',
      tags: ['Node.js', 'PostgreSQL', 'API'],
      href: '#',
      repoHref: '#',
      image: '/images/projects/fullstack-app.jpg',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of work that highlights my approach to design, performance, and clean code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-200 overflow-hidden"
            >
              <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">Project Image</div>`;
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.repoHref && (
                      <a
                        href={project.repoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={`${project.title} repository`}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label={`${project.title} live link`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
