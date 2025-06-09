import React from "react";
import { FaUserGraduate, FaGlobeAsia } from "react-icons/fa";

function Masters() {
  return (
    <div className="p-12 relative">
      <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
        <FaUserGraduate /> Master's Journey
      </h2>

      <img 
        src={`${process.env.PUBLIC_URL}/assets/masters.jpeg`} 
        alt="Master's Experience" 
        className="mx-auto mb-6 rounded-lg shadow-md w-full max-w-sm" 
      />

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">Founder and President – Desi Chargers</span>
        I founded Desi Chargers to create a platform for South Asian graduate students to celebrate culture, identity, and community through dance. We began with living room rehearsals and ended up winning iFest 2025 with a campus-wide performance that brought hundreds together. I led choreography, designed branding, managed the e-board, and mentored performers. Desi Chargers wasn’t just a club , it was a statement of visibility, pride, and student-driven artistry.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">Graduate Assistant | HR & OD Intern – Office of Graduate and International Student Life</span>
        Since being hired in my very first semester, I’ve led onboarding for 500+ international and graduate students, created internal training guides, facilitated cultural programs, and helped launch major events like Winter Ball, Comedy Night, Glow Party, Trivia Nights, and the Disney Spring Break Trip. My GA experience taught me how to design programs that are inclusive, intentional, and joyful , while also developing my operational and peer support skills.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">Head of Relations – SHRM </span>
        In my leadership role at SHRM, I facilitated speaker panels, built alumni networks, and co-hosted professional development events. As an HR & Organizational Development Intern at Office of Graduate and International Student Life, I focused on onboarding redesign, psychological safety training, and performance reflections. My goal has always been to help employees feel seen while helping departments run smarter and more sustainably.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">Research – Gen Z, Leadership & Satisfaction</span>
        I co-led a research study using the MLQ and JSS to understand how different leadership styles impact job satisfaction among Gen Z student employees. Our results confirmed the value of transformational leadership , especially individualized consideration , and shaped practical recommendations for university work environments. I helped design surveys, analyze the data, and present findings in class.
      </p>

      <p className="text-lg leading-relaxed">
        <span className="block text-xl font-bold text-blue-300 mb-1">Innovation – ThriveLocal</span>
        For an innovation class, I developed a business plan called ThriveLocal: a digital platform to help relocated employees and international students connect with local well-being resources and small businesses. I designed the brand identity, marketing plan, and financial model, and even prototyped a functional mini app. The project combined my passion for I/O psychology with real-world community building.
      </p>

      <FaGlobeAsia className="absolute top-6 left-6 text-blue-900 opacity-10 text-8xl rotate-12" />
    </div>
  );
}

export default Masters;
