import React from "react";

export const ProjectCard = ({ project }) => {
  return (
    <div className="w-[250px] h-[150px] bg-red-100 rounded-md p-2 flex flex-col justify-between">
      <h1 className="text-xl font-bold">{project.title}</h1>
      <p className="mb-4">{project.description}</p>
    </div>
  );
};
