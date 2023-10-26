import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

import { Dialog } from "./Dialog";
import { useProjects } from "../contexts/projectContext";

export const Dashboard = () => {
  const { projects, addProject } = useProjects();

  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);
  const [projectText, setProjectText] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: nanoid(),
      title: projectText,
      description: projectDescription,
      coverImg: "https://source.unsplash.com/featured/",
      columns: [
        {
          id: "6ba96d42-2bf3-47a4-b97e-22ae421830e6",
          title: "Todo",
          items: [],
        },
      ],
    };
    addProject(newProject);
    setProjectText("");
    setProjectDescription("");
    closeDialog();
  };

  return (
    <div className="p-2">
      <h1 className="text-2xl">Dashboard</h1>
      <div className="flex gap-4 mt-10">
        <div className="w-[200px] h-[150px] bg-gray-300 flex justify-center items-center">
          <button onClick={openDialog}>Create project +</button>
        </div>
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title="Create a Project"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name">Project Name</label>
            <input
              id="name"
              className="rounded-sm h-10 border-2 border-solid border-gray-200 p-2"
              type="text"
              placeholder="Enter project name"
              value={projectText}
              onChange={(e) => setProjectText(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="description">Project Description</label>
            <input
              id="description"
              className="rounded-sm p-2 h-10 border-2 border-gray-200 border-solid"
              type="text"
              placeholder="Enter Project description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              className="bg-gray-400 text-white p-2 px-8 rounded-md"
              onClick={closeDialog}
            >
              Cancel
            </button>
            <button className="bg-blue-400 text-white p-2 px-8 rounded-md">
              + Create
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
