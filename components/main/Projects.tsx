"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";


const Projects = () => {
  return (
   
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
    
    <ProjectCard
          src="/appshop.png"
          title="Appshop"
          description="eCommerce application built with the MERN stack" 
          link="https://github.com/Ryanzhaoli/Appshop/"
        />
 
        <ProjectCard
         
          src="/fitnesszone.png"
          title="Fitnesszone"
          description="Frontend web design with Vanilla Javascript"
          link="https://github.com/Ryanzhaoli/fitnezone-store"
        />
        <ProjectCard
      
          src="/chatbot.png"
          title="Chatbot"
          description="An chatbot built with Vite and chatGPT API"
          link="https://github.com/Ryanzhaoli/chatbot"
        />
      </div>
     
    </div>
  );
};

export default Projects;