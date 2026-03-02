import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  repoHref?: string;
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive personal website with dark mode and smooth navigation.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      href: '#',
      repoHref: '#',
    },
    {
      title: 'Product Landing Page',
      description: 'A high-converting landing page with clean typography and motion-driven UI.',
      tags: ['UI/UX', 'Responsive', 'Performance'],
      href: '#',
      repoHref: '#',
    },
    {
      title: 'Full-Stack App',
      description: 'A full-stack application with authentication, database integration, and a polished UI.',
      tags: ['Node.js', 'PostgreSQL', 'API'],
      href: '#',
      repoHref: '#',
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
