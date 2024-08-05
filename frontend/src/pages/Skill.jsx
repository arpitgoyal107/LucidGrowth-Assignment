import React, { useEffect, useState } from "react";
import axios from "axios";
import Skills from "../components/Skills";
import SkillsForm from "../components/SkillsForm";

const API_URL = "https://portfolio-assignment-backend.onrender.com/skills"; // Adjust the URL to match your API endpoint

const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setSkills(response.data);
        setError(""); // Clear any previous errors on successful fetch
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError("Failed to fetch skills"); // Set error message for UI
      }
      setLoading(false);
    };

    fetchSkills();

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
        <h1 className="section-heading text-center">My Skills</h1>
        {showForm && <SkillsForm setSkills={setSkills} />}
        {loading && <div>Loading skills...</div>}
        {error && <div className="error-message">{error}</div>}
        <Skills skills={skills} setSkills={setSkills} />
      </div>
    </div>
  );
};

export default Skill;
