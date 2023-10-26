import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signup(name, email, password)) {
      navigate("/login");
    } else {
      alert("User already exists");
    }
    clear();
  };

  const clear = () => {
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div>
      <div className="w-screen h-screen bg-gray-200">
        <form
          className="w-full flex flex-col gap-8 justify-center items-center h-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl">Signup</h1>
          <div className="flex flex-col gap-2 md:w-1/4 sm:w-1/2">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              className="rounded-sm h-8 p-2"
              type=""
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              className="rounded-sm h-8 p-2"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 w-1/4">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              className="rounded-sm h-8 p-2"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 text-white p-2 px-8 rounded-md"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};
