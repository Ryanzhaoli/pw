"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;

}

const ProjectCard = ({ src, title, description,link }: Props) => {
  
  return (
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
     
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[15px]"><a href={link} target="_blank">Learn More -&gt; </a></h1>
       </div>
  
    </div>
   
   
  );
};

export default ProjectCard;