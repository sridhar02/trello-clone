import { SignOutButton, useAuth } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-blue-600 flex flex-row justify-around text-white p-4">
      <h1 className="text-2xl">
        <Link to={userId ? "/dashboard" : "/login"}>Trello Clone</Link>
      </h1>
      <div className="flex gap-4">
        {!userId ? (
          <>
            <Link to="login">Login</Link>
            <Link to="signup">Signup</Link>
          </>
        ) : (
          <>
            {/* <button onClick={logout}>Logout</button> */}
            <SignOutButton
              signOutCallback={() => {
                navigate("/login");
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};
