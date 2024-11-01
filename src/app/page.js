"use client";
import React, { useState } from "react";
import {
  Menu,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  Phone,
  Code,
  Briefcase,
  User,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("projects");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "EcoTrack Mobile App",
      description:
        "React Native app for tracking carbon footprint with real-time analytics",
      tech: ["React Native", "Redux", "Node.js", "MongoDB"],
      type: "Mobile",
      github: "#",
      live: "#",
    },
    {
      title: "DeFi Staking Platform",
      description:
        "Web3 platform for staking and earning rewards with multiple token support",
      tech: ["Solidity", "React", "Ethers.js", "Hardhat"],
      type: "Web3",
      github: "#",
      live: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "Full-stack web app using OpenAI API for automated content creation",
      tech: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
      type: "Web",
      github: "#",
      live: "#",
    },
    {
      title: "Healthcare Management System",
      description: "Backend API for managing patient records and appointments",
      tech: ["Node.js", "Express", "MongoDB", "Docker"],
      type: "Backend",
      github: "#",
      live: "#",
    },
  ];

  const skills = [
    {
      category: "Mobile Development",
      techs: ["React Native", "Expo", "Native APIs", "App Store"],
      icon: <Phone className="w-6 h-6" />,
    },
    {
      category: "Frontend Development",
      techs: ["React", "Next.js", "TypeScript", "Tailwind"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      category: "Backend Development",
      techs: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      category: "Web3 Development",
      techs: ["Solidity", "Ethers.js", "Web3.js", "Smart Contracts"],
      icon: <User className="w-6 h-6" />,
    },
  ];

  const filterButtons = ["All", "Mobile", "Web", "Backend", "Web3"];
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    filter === "All" ? true : project.type === filter
  );

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <nav
        className={`fixed w-full ${
          isDarkMode ? "bg-black/90" : "bg-white/90"
        } backdrop-blur-lg border-b ${
          isDarkMode ? "border-gray-800" : "border-gray-100"
        } z-50 transition-colors duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-2xl font-bold tracking-tight">
              Chijikem Christopher Agu
            </span>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full ${
                  isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
                } transition-colors duration-200`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <div className="hidden md:flex space-x-4">
                {["projects", "skills", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeSection === section
                        ? isDarkMode
                          ? "bg-white text-black"
                          : "bg-black text-white"
                        : `hover:bg-gray-100 dark:hover:bg-gray-800`
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 px-4 max-w-7xl mx-auto">
        <section className="text-center py-20">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold mb-4 tracking-tight">
              React Native & Full-Stack Developer
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400">
              Building innovative mobile experiences & cutting-edge web3
              solutions
            </p>
            <div className="flex justify-center space-x-6">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-3 rounded-full ${
                    isDarkMode ? "bg-white text-black" : "bg-black text-white"
                  } transform hover:scale-110 transition-all duration-200`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {activeSection === "projects" && (
          <section className="py-12 space-y-12">
            <h2 className="text-4xl font-bold text-center tracking-tight">
              Featured Projects
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filterButtons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => setFilter(btn)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === btn
                      ? isDarkMode
                        ? "bg-white text-black"
                        : "bg-black text-white"
                      : `${
                          isDarkMode
                            ? "bg-gray-800 hover:bg-gray-700"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className={`group transform hover:scale-105 transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-900 hover:bg-gray-800"
                      : "bg-gray-50 hover:bg-gray-100"
                  } border ${
                    isDarkMode ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-sm rounded-full ${
                            isDarkMode ? "bg-gray-800" : "bg-gray-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between mt-6">
                      {[
                        { Icon: Github, text: "Code", link: project.github },
                        {
                          Icon: ExternalLink,
                          text: "Live Demo",
                          link: project.live,
                        },
                      ].map(({ Icon, text, link }, i) => (
                        <a
                          key={i}
                          href={link}
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                        >
                          <Icon size={18} />
                          <span>{text}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === "skills" && (
          <section className="py-12 space-y-12">
            <h2 className="text-4xl font-bold text-center tracking-tight">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, index) => (
                <Card
                  key={index}
                  className={`transform hover:scale-105 transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-900 hover:bg-gray-800"
                      : "bg-gray-50 hover:bg-gray-100"
                  } border ${
                    isDarkMode ? "border-gray-800" : "border-gray-200"
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`p-2 rounded-lg ${
                          isDarkMode
                            ? "bg-white text-black"
                            : "bg-black text-white"
                        }`}
                      >
                        {skillGroup.icon}
                      </div>
                      <h3 className="text-xl font-bold">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.techs.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode ? "bg-gray-800" : "bg-gray-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="py-12 space-y-12">
            <h2 className="text-4xl font-bold text-center tracking-tight">
              Get in Touch
            </h2>
            <div className="max-w-lg mx-auto">
              <Card
                className={`transform hover:scale-105 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 hover:bg-gray-800"
                    : "bg-gray-50 hover:bg-gray-100"
                } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
              >
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        Icon: Mail,
                        text: "john@example.com",
                        href: "mailto:john@example.com",
                      },
                      {
                        Icon: Phone,
                        text: "+1 (234) 567-890",
                        href: "tel:+1234567890",
                      },
                      { Icon: Linkedin, text: "LinkedIn Profile", href: "#" },
                      { Icon: Github, text: "GitHub Profile", href: "#" },
                    ].map(({ Icon, text, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        className={`flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 group`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            isDarkMode
                              ? "bg-white text-black"
                              : "bg-black text-white"
                          } group-hover:scale-110 transition-transform duration-200`}
                        >
                          <Icon size={20} />
                        </div>
                        <span>{text}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      <footer
        className={`mt-20 py-8 border-t ${
          isDarkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; 2024 John Developer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
