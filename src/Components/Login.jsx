import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate("/");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-200 ">
      <form
        className="w-full flex flex-col gap-8 justify-center items-center h-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl">Login</h1>
        <div className="flex flex-col gap-2 w-1/4">
          <label htmlFor="email">Email Address</label>
          <input
            className="rounded-sm h-8 p-2"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-1/4">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            className="rounded-sm h-8 p-2"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button className="bg-blue-400 text-white p-2 px-8 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};
