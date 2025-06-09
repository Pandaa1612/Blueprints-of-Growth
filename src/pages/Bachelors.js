import React from "react";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

function Bachelors() {
  return (
    <div className="p-12 relative">
      <h2 className="text-3xl font-bold mb-6 text-blue-400 flex items-center gap-2">
        <FaUniversity /> Bachelor's Journey
      </h2>

      <img 
        src={`${process.env.PUBLIC_URL}/assets/bachelors.JPG`} 
        alt="Bachelor's Experience" 
        className="mx-auto mb-6 rounded-lg shadow-md w-full max-w-xs" 
      />

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">Lynn University, Florida</span>
        I graduated with a <strong>3.81 GPA</strong> (Summa Cum Laude) and made the <strong>Dean’s List 4 out of 6 semesters</strong>. I was inducted into the <strong>Psi Chi Honor Society</strong> for academic excellence in psychology.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">Debate Club – VP & Social Media Head</span>
        From October 2020 to May 2022, I participated in competitive tournaments like the State Debate Finals and the FIFA Dialogue Series. As VP, I mentored new members and rebranded our online presence, helping the club expand reach and improve rankings.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        <span className="block text-xl font-bold text-blue-300 mb-1">South Asian Club – Co-founder & VP</span>
        I co-founded the South Asian Club to bring visibility to our cultures on campus through dance, food festivals, and awareness events. From hosting Holi celebrations to sari draping tutorials, we built spaces where representation felt joyful, not performative.
      </p>

      <div className="text-center bg-blue-950 mt-10 py-8 px-6 rounded-lg shadow-lg">
        <p className="text-white text-xl font-semibold mb-2">📘 Every journey begins with strong roots.</p>
        <p className="text-blue-200 text-sm max-w-xl mx-auto">
          My undergraduate years taught me to speak up, lead with heart, and pursue both rigor and rhythm. These experiences still anchor who I am as a grad student and aspiring I/O professional.
        </p>
      </div>

      <FaGraduationCap className="absolute top-6 left-6 text-blue-900 opacity-10 text-8xl rotate-12" />
    </div>
  );
}

export default Bachelors;
