import React from "react";
import { FaUserGraduate, FaChartLine } from "react-icons/fa";

function Bachelors() {
  return (
    <div className="p-12 relative">
      <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
        <FaUserGraduate /> Bachelor's Journey
      </h2>
      <img src="/bachelors.JPG" alt="Bachelor's Highlights" className="mx-auto mb-6 rounded-lg shadow-md w-full max-w-sm" />

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">Academic Excellence</span>
        I graduated summa cum laude with a 3.81 GPA and earned a place on the Dean’s List for 4 out of 6 semesters. I was inducted into Psi Chi, the International Honor Society in Psychology, for my academic achievements and passion for the field. These accomplishments reflect my discipline, curiosity, and commitment to high standards.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">Debate Leadership</span>
        As Vice President and Social Media Head of the Debate Club, I helped lead a team of driven students who thrived in competitive, high-pressure environments. I participated in several major tournaments, including the State Debate Tournament and the FIFA Debate Challenge, from October 2020 to May 2022. I promoted our club’s activities online, managed engagement strategy, and supported my peers in preparation and confidence-building.
      </p>

      <p className="text-lg leading-relaxed">
        <span className="block text-xl font-bold text-blue-300 mb-1">Cultural Impact</span>
        I co-founded and served as Vice President of the South Asian Club (SAC), a space created to celebrate and share our cultures with the broader university community. Through dance, food, and storytelling, we helped foster dialogue and inclusivity. It became a platform where South Asian students could reconnect with their identities and others could learn, appreciate, and join in on cultural exchange. We weren’t just building events; we were building belonging.
      </p>

      <FaChartLine className="absolute bottom-8 right-8 text-blue-900 opacity-10 text-8xl" />
    </div>
  );
}

export default Bachelors;