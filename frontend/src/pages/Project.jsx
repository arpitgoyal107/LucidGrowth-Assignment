import React, { useEffect, useState } from "react";
import axios from "axios";
import Projects from "../components/Projects";
import ProjectForm from "../components/ProjectForm";

const API_URL = "https://portfolio-assignment-backend.onrender.com/projects";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setProjects(response.data);
        setError(""); // Clear any previous errors on successful fetch
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to fetch projects"); // Set error message for UI
      }
      setLoading(false);
    };

    fetchProjects();

    // Check local storage for email and set the showForm state accordingly
    const email = localStorage.getItem("email");
    if (email === "arpitgoyal126116@gmail.com") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="py-16 section-container">
        <h1 className="section-heading text-center">My Projects</h1>
        {showForm && <ProjectForm setProjects={setProjects} />}
        {loading && <div>Loading projects...</div>}
        {error && <div className="error-message">{error}</div>}
        <Projects projects={projects} setProjects={setProjects} />
      </div>
    </div>
  );
};

export default Project;
