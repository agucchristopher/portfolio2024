"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
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

  return (
    <motion.div
      className={`min-h-screen font-sans ${
        isDarkMode ? "bg-neutral-900 text-gray-100" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <nav
        className={`fixed w-full backdrop-blur-md bg-opacity-70 border-b ${
          isDarkMode ? "border-neutral-700" : "border-gray-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between h-16 items-center">
          <span className="text-xl font-semibold tracking-tight text-gray-800">
            Christopher Agu
          </span>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-opacity-70 transition-all"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 px-6 max-w-6xl mx-auto">
        <section className="text-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-light mb-4">Full-Stack Developer</h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Crafting tailored web and mobile experiences with a focus on
              clarity, functionality, and detail.
            </p>
            <div className="flex justify-center space-x-6 mt-8">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="p-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-center">Projects</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="transform transition-all duration-300"
              >
                <Card className="bg-gray-100 border-gray-200 p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow">
                  <CardContent>
                    <h3 className="text-xl font-medium mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex space-x-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default Portfolio;
