import { useRoutes, Outlet } from "react-router-dom";
import "./App.css";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";

function App() {
  const Games = () => {
    return (
      <div className="Games">
        <div>This is the Games page</div>
        <Outlet />
      </div>
    );
  };

  const routes = useRoutes([
    {
      path: "/",
      element: <div>Hello Index</div>,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ]);
  return routes;
}

export default App;
