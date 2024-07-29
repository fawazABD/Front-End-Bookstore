import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidate";
import axios from "axios";




function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    /*setErrors(Validation(values));*/
    const validationErrors = Validation(values, "login");
    setErrors(validationErrors);

    if (validationErrors) {
      console.log('Submitting data:', values);
      axios
        .post("http://localhost:5000/auth/login", values)
        .then((result) => {
          console.log("Login Successful", result);
          navigate("/Home"); // Redirect to homepage after successful login
          alert('Login Successful')
        })
        .catch((err) => {
          console.log(
            "Login Error",
            err.response ? err.response.data : err.message
          );
          alert('User does not exist')
        });
    } else {
      console.log("Validation errors", validationErrors);
    }
  
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="border-2 w-96 p-8 text-center flex flex-col gap-8 rounded-md">
          <h2 className="font-bold text-black">LOGIN NOW</h2>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-2"
          >
            <div>
              <input
                name="email"
                type="Email"
                placeholder="enter your Email"
                onChange={handleInput}
                value={values.email}
                autoComplete="off"
                className="border-2 w-80"
              />
              {errors.email && (
                <span className="text-danger text-red-600">{errors.email}</span>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="enter your Password"
                onChange={handleInput}
                value={values.password}
                autoComplete="off"
                className="border-2 w-80"
              />
              {errors.password && (
                <span className="text-danger text-red-600">
                  {errors.password}
                </span>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="bg-purple-800 px-8 py-2 text-white rounded-sm-"
              >
                Login
              </button>
            </div>
            <h1>
              Don't have an account?{" "}
              <Link to="/Register" className="text-blue-800">
                Register now
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
