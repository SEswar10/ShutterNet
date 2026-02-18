import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { makeRequest } from "../../axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      await makeRequest.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      setErr(err.response?.data || "An error occurred");
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Shutter Net.</h1>
          <p>
            "There is only you and your camera. The limitations in your photography are in yourself, for what we see is what we are."
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={inputs.username}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={inputs.name}
            />
            {err && <span style={{ color: "red" }}>{err}</span>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;