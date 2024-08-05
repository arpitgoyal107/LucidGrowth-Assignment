import React from "react";
import Project from "./Project";
import Skill from "./Skill";
import Experience from "./Experience";
import Contact from "./Contact";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center py-48">
        <div className="section-container">
          <div className="bg-white flex items-center justify-center overflow-hidden rounded-md shadow-md gap-4">
            <div className="w-2/3">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="w-full shadow-2xl"
              />
            </div>
            <div className="px-4 py-8">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                Hi! I'm Arpit Goyal
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                A 22-year-old Computer Science and Engineering graduate with a
                boundless passion for Software Development and UI/UX Design. I'm
                on an exciting journey as a Web Developer. My portfolio
                showcases a selection of my projects, skills and experiences
                throughout my past journey. Welcome to my journey, where the
                love for technology meets the spirit of collaboration and
                empathy. Let's build a better digital world together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Project />
      <Skill />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
