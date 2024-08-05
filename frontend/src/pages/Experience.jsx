import React, { useEffect, useState } from "react";
import axios from "axios";
import Experiences from "../components/Experiences";
import ExperienceForm from "../components/ExperienceForm";

const API_URL = "https://portfolio-assignment-backend.onrender.com/experiences";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setExperiences(response.data);
        setError(""); // Clear any previous errors on successful fetch
      } catch (error) {
        console.error("Error fetching experiences:", error);
        setError("Failed to fetch experiences"); // Set error message for UI
      }
      setLoading(false);
    };

    fetchExperiences();

    const email = localStorage.getItem("email");
    if (email === "arpitgoyal126116@gmail.com") {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="py-28 section-container">
        <h1 className="section-heading text-center">My Experience</h1>
        {showForm && <ExperienceForm setExperiences={setExperiences} />}
        {loading && <div>Loading experience...</div>}
        {error && <div className="error-message">{error}</div>}
        <Experiences
          experiences={experiences}
          setExperiences={setExperiences}
        />
      </div>
    </div>
  );
};

export default Experience;
