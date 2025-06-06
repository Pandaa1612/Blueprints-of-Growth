import React from "react";
import { FaHome } from "react-icons/fa";

function Home() {
  const heroImage = "/grad6.JPG";

  return (
    <div className="p-12">
      <h2 className="text-3xl font-bold mb-10 text-blue-400 flex items-center gap-2">
        <FaHome /> Welcome to Blueprints of Growth
      </h2>

      <img
        src={heroImage}
        alt="Hero"
        className="rounded-2xl shadow-lg mb-8 w-full max-h-[500px] object-cover"
      />

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-blue-300 mb-4">About Me</h3>
        <p className="text-lg leading-relaxed">
          My name is Mahek Bhagchandani, and I’m currently pursuing my Master’s in Industrial and Organizational Psychology at the University of New Haven. Since 2019, my journey has been fueled by a desire to create meaningful impact through community, leadership, and human-centered strategy. I’m a South Asian woman navigating spaces that haven’t always been built for me, which is exactly why I work to change that.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I’ve always been someone who leads through empathy and intentionality, not by trying to speak over others, but by making space for them. From founding Desi Chargers to showcase and preserve South Asian culture, to being appointed a Graduate Assistant during my very first semester, my trajectory has always reflected my values. I believe leadership is about creating psychological safety, designing inclusive systems, and showing up consistently even when it’s hard.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          My work spans HR, event planning, peer mentorship, academic research, and digital innovation. Whether I’m facilitating a training session, building an onboarding program, or helping international students feel at home, my goal is always the same: help people feel seen and supported while creating systems that work better for everyone. I see this website as a living archive of that mission.
        </p>
      </section>
    </div>
  );
}

export default Home;
