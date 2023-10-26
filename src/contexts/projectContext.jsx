import { nanoid } from "nanoid";
import React, { createContext, useContext, useReducer, useState } from "react";

const ProjectContext = createContext();

const initialState = {
  projects: [
    {
      id: nanoid(),
      title: "Frontend",
      description: "A project to maintain frontend work related tickets",
      coverImg: "",
      columns: [
        {
          id: "6ba96d42-2bf3-47a4-b97e-22ae421830e6",
          title: "Todo",
          items: [],
        },
      ],
    },
  ],
};

const projectReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_ITEM":
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === action.payload.projectId) {
            return {
              ...project,
              boards: project.boards.map((board) => {
                if (board.id === action.payload.boardId) {
                  return {
                    ...board,
                    columns: board.columns.map((column) => {
                      if (column.id === action.payload.columnId) {
                        return {
                          ...column,
                          items: column.items.map((item) =>
                            item.id === action.payload.itemId
                              ? { ...item, ...action.payload.updatedItem }
                              : item
                          ),
                        };
                      }
                      return column;
                    }),
                  };
                }
                return board;
              }),
            };
          }
          return project;
        }),
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload.newProject],
      };
    case "ADD_COLUMN":
      return {
        ...state,
        projects: state.projects.map((project) => {
          console.log(action.payload.newColumn, action.payload.projectId);
          console.log(project.id === action.payload.projectId);
          if (project.id === action.payload.projectId) {
            return {
              ...project,
              columns: [...project.columns, action.payload.newColumn],
            };
          }
          return project;
        }),
      };
    default:
      return state;
  }
};

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const [currentProject, setCurrentProject] = useState(null);

  const updateItem = (projectId, boardId, columnId, itemId, updatedItem) => {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { projectId, boardId, columnId, itemId, updatedItem },
    });
  };

  //   const getProject = (projectId) => {
  //     dispatch({
  //       type: "GET_PROJECT",
  //       payload: { projectId },
  //     });
  //   };
  const getProject = (projectId) => {
    const project = state.projects.find((project) => project.id === projectId);
    if (project) {
      setCurrentProject(project);
    }
  };

  const addProject = (newProject) => {
    dispatch({
      type: "ADD_PROJECT",
      payload: { newProject },
    });
  };

  const addColumn = (projectId, newColumn) => {
    console.log({ projectId, newColumn });
    dispatch({
      type: "ADD_COLUMN",
      payload: { projectId, newColumn },
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        updateItem,
        getProject,
        addProject,
        addColumn,
        currentProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
