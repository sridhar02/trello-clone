import { useRoutes, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
  ClerkProvider,
} from "@clerk/clerk-react";


import { Dashboard } from "./Components/Dashboard";
import { Project } from "./Components/Project";
import { Navbar } from "./Components/Navbar";

import { PrivateRoute } from "./Components/PrivateRoute";
import { ProjectProvider } from "./contexts/projectContext";

const clerkPubKey = import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY;


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
          path: "*",
          element: <Navigate to="/dashboard" />,
        },
        {
          path: "/project/:id",
          element: (
            <>
              <ProjectProvider>
                <Project />
              </ProjectProvider>
            </>
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
    {
      path: "login",
      element: <div className="flex items-center justify-center mt-20"> <SignIn /></div>,
    },
  ]);
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {routes}
    </ClerkProvider>
  );
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
