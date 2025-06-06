import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

function Contact() {
  return (
    <div className="p-12 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400 flex justify-center items-center gap-2">
        <FaEnvelopeOpenText /> Get in Touch
      </h2>
      <form action="https://formspree.io/f/mwkdgppk" method="POST" className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-600 p-3 rounded-lg bg-black text-white"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-600 p-3 rounded-lg bg-black text-white"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full border border-gray-600 p-3 rounded-lg bg-black text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;