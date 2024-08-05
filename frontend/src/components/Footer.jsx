import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="section-container py-6">
        <div className="text-center text-base">
          {/* social icons */}
          <div className="flex justify-center space-x-4 mb-6">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
          </div>

          <h5 className="mb-2">
            © 2024 Portfolio-Assignment ~{" "}
            <a
              href="https://lucidgrowth.com/"
              className="underline underline-offset-2"
            >
              Lucid Growth
            </a>
          </h5>
          <h5 className="mb-2">All rights reserved</h5>
          <h5>
            Website by{" "}
            <a
              href="https://www.linkedin.com/in/arpitgoyal107/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Arpit Goyal
            </a>
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
