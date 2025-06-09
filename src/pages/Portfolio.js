import React from "react";
import { FaChartLine, FaTools, FaUsers, FaLightbulb, FaBook } from "react-icons/fa";

function HRPortfolio() {
  return (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-8 text-blue-400 flex items-center gap-2">
        <FaBook /> HR Portfolio Highlights
      </h2>

      <img 
        src={`${process.env.PUBLIC_URL}/assets/HR.jpg`} 
        alt="HR Portfolio work" 
        className="mx-auto mb-10 rounded-lg shadow-md w-full max-w-md" 
      />

      <div className="space-y-10 text-lg leading-relaxed">
        <div>
          <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
            <FaUsers /> Recruitment & Hiring
          </h3>
          <p>
            I created inclusive job descriptions, detailed interview rubrics, and robust onboarding frameworks for student leader hiring at the Office of Graduate & International Student Life. I redesigned selection guides using NACE competencies and DEI best practices to reduce bias and increase diverse applicant success rates. My work contributed to more transparent, fair, and efficient hiring experiences for student leaders.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
            <FaTools /> Training & Development
          </h3>
          <p>
            I led the onboarding and training for Graduate Assistants and student volunteers through peer-based mentoring, hands-on simulations, and visual documentation like slide decks and workflow charts. My training materials emphasized clarity, accessibility, and relevance, which directly improved performance feedback and onboarding satisfaction scores.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
            <FaChartLine /> Employee Experience & Engagement
          </h3>
          <p>
            I designed and analyzed pulse surveys to track engagement and communication needs. Based on results, I collaborated with pro staff to address burnout, improve team meetings, and develop recognition systems. One outcome was a feedback wall initiative, which increased peer acknowledgment and built team morale.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
            <FaLightbulb /> Research & Analytics
          </h3>
          <p>
            In a research project, I used the MLQ and JSS scales to examine how leadership styles impact job satisfaction among Gen Z student employees. We found that transformational leadership ,  especially individual consideration and idealized influence ,  positively influenced satisfaction and motivation. I co-designed the surveys, conducted analysis, and helped translate our findings into campus strategies.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-300 flex items-center gap-2">
            <FaLightbulb /> Systems Thinking & Innovation
          </h3>
          <p>
            I created a concept called ThriveLocal ,  a digital platform linking relocated employees and students with local wellness vendors and cultural spaces. I prototyped a minimal app, mapped user journeys, and drafted a full-scale business model with marketing and financial strategies. The project helped me connect HR knowledge to entrepreneurship and practical problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HRPortfolio;
