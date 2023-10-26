import { useRoutes } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Dashboard } from "./Components/Dashboard";
import { Project } from "./Components/Project";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "project",
      element: <Project />,
    },
  ]);
  return routes;
}

export default App;
