import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./Login.css";

const API_URL = "http://10.105.227.237:5001/api";

const LoginSignup = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });

  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleRegisterChange = (e) => setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(`${API_URL}/auth/login`, loginData, { withCredentials: true });
      login(response.data);
      navigate("/home");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(`${API_URL}/auth/register`, registerData, { withCredentials: true });
      login(response.data);
      navigate("/home");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Handle cursor movement to update bubble positions
  useEffect(() => {
    const handleMouseMove = (e) => {
      const bubbles = document.querySelectorAll(".bubble");
      bubbles.forEach((bubble, index) => {
        const speed = (index + 1) * 0.02; // Different speeds for each bubble
        const x = e.clientX * speed;
        const y = e.clientY * speed;
        bubble.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="login-page">
      {/* Add bubbles to the background */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className={`container ${isActive ? "active" : ""}`}>
        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading-spinner">Loading...</div>}
        <div className="form-box login">
          <form onSubmit={handleLoginSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
                disabled={loading}
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                disabled={loading}
              />
              <FaLock className="icon" />
            </div>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
        <div className="form-box register">
          <form onSubmit={handleRegisterSubmit}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={registerData.username}
                onChange={handleRegisterChange}
                required
                disabled={loading}
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
                disabled={loading}
              />
              <FaEnvelope className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
                disabled={loading}
                minLength="6"
              />
              <FaLock className="icon" />
            </div>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
        <div className="toggle-box">
          <div className="toggle-panel toggle-left">
            <h1>Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="btn register-btn" onClick={() => setIsActive(true)} disabled={loading}>
              Register
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="btn login-btn" onClick={() => setIsActive(false)} disabled={loading}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;