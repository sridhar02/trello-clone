import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="bg-blue-600 flex flex-row justify-around text-white p-4">
      <h1 className="text-2xl">
        <Link to={user ? "/dashboard" : "/login"}>Trello Clone</Link>
      </h1>
      <div className="flex gap-4">
        {!user ? (
          <>
            <Link to="login">Login</Link>
            <Link to="signup">Signup</Link>
          </>
        ) : (
          <>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};
