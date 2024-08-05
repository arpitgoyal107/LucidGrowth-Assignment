import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="pt-16 pb-12 section-container">
          <div className="rounded-2xl overflow-hidden shadow-lg flex lg:flex-row flex-col">
            <div className="bg-gray-800 text-white text-center lg:text-left w-1/2 px-16 py-20">
              <h1 className="section-heading">Connect now!</h1>

              <p className="py-6 leading-6">
                My inbox is always open...
                <br />
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>

              <p className="pb-6 leading-6">
                <strong>Email: </strong>
                <a href="mailto:arpitgoyal126116@gmail.com">
                  arpitgoyal126116@gmail.com
                </a>
                <br />
                <strong>Phone: </strong>
                <a href="tel:+919588741947">+91 9588741947</a>
              </p>
            </div>

            <div className="w-1/2 bg-white text-black px-16 py-20">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Arpit Goyal"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="abc@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
