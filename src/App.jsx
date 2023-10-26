import { useRoutes, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Dashboard } from "./Components/Dashboard";
import { Project } from "./Components/Project";
import { Navbar } from "./Components/Navbar";

import { AuthProvider } from "./contexts/authContext";
import { PrivateRoute } from "./Components/PrivateRoute";
import { ProjectProvider } from "./contexts/projectContext";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/",
          element: <Navigate to="/dashboard" />,
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
          path: "/project/:id",
          element: (
            <PrivateRoute>
              <ProjectProvider>
                <Project />
              </ProjectProvider>
            </PrivateRoute>
          ),
        },
        {
          path: "Dashboard",
          element: (
            <PrivateRoute>
              <ProjectProvider>
                <Dashboard />
              </ProjectProvider>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return <AuthProvider>{routes}</AuthProvider>;
}

function NavbarWrapper() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
