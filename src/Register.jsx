import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./RegisterValidate";
import { useState } from "react";
import axios from "axios";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const isValidPassword = (password) => {
    const regex =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!isValidPassword(password)) {
      setError("Password pattern should be 8");
      return;
    }
    axios
      .post("http://localhost:5000/auth/register", {
        name: `${name}`,
        email,
        password,
        role,
      })
      .then((result) => {
        console.log(result);
        navigate("/Login"); // Redirect to homepage after successful signup
      })
      .catch((error) => {
        console.error(error);
        setError(

            "An error occurred. Please try again."
        );
      });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-sla-400 border-2 w-96 p-8 text-center flex flex-col gap-8 rounded-md">
        <h1 className="mb-1 font-bold">REGISTER NOW</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-1">
          <div>
            <input
              type="name"
              placeholder="enter your name"
              name="name"
              required
              value={name}
              autoComplete="off"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="Email"
              placeholder="enter your email"
              name="email"
              required
              value={email}
              autoComplete="off"
              className="w-full p-3 border border-gray-300 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full p-3 border border-gray-300 rounded-lg justify-between">
            <input
              type={visiblePassword ? "text" : "password"}
              placeholder="enter your password"
              name="password"
              value={password}
              autoComplete="off"
              className="w-80"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={() => setVisiblePassword(!visiblePassword)}
            >
              {visibleConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div className="mb-6 flex items-center w-full p-3 border border-gray-300 rounded-lg justify-between">
            <input
              type={visibleConfirmPassword ? "text" : "password"}
              placeholder="confirm your password"
              name="confirm password"
              autoComplete="off"
              className="w-80"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}
            >
              {visibleConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div>
            <select
              id="options"
              className="border-2 text-sm w-80 p-2.5 rounded-md"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value=""></option>
              <option value="USER">user</option>
              <option value="ADMIN">admin</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="border-2 px-4 py-2 rounded-md bg-violet-900 text-white"
            >
              Register Now
            </button>
          </div>
          <h1>
            already have an account?{" "}
            <Link to="/login" className="text-blue-800">
              login now
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Register;
