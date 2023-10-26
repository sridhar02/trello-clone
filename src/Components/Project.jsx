import { useEffect } from "react";
import { Board } from "./Board";
import { useParams } from "react-router-dom";
import { useProjects } from "../contexts/projectContext";

export const Project = () => {
  const { id } = useParams();
  const { getProject, currentProject } = useProjects();

  useEffect(() => {
    getProject(id);
  }, [id]);

  console.log(currentProject, id);

  return (
    <div className="flex justify-start items-start w-full h-full">
      {currentProject && (
        <div className="flex flex-col gap-4 mt-4 p-2 ml-4 w-full h-full">
          <h1 className="text-2xl font-bold">{currentProject.title}</h1>
          <p>{currentProject.description}</p>
          <div className="border-2 p-3 rounded-sm">
            <div className="text-lg font-medium">Project Tasks Board</div>
            <Board currentProject={currentProject} />
          </div>
        </div>
      )}
    </div>
  );
};
