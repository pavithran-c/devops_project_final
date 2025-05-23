import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginSignup from "../src/Login/Login";
import HomePage from "./Components/Home/Home";
import ServicesPage from "./Components/Services/Service";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import { ThemeProvider } from "./Components/ThemeContext";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard/Dashboard";
import AIRecommender from "./Components/AIRecommender/AIRecommender";
import LiveTrack from "./Components/LiveTrack/LiveTrack";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import AnalyticsDashboard from "./Components/AIRecommender/Analitics";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <HomePage />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <ServicesPage />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Contact />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/live-track"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <LiveTrack />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ai-recommender"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <AIRecommender />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <Profile />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <About />
                  <Footer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Navbar />
                  <AnalyticsDashboard />
                  <Footer />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;