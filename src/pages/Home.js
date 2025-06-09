import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

function Home() {
  return (
    <div className="p-12 text-center bg-gradient-to-b from-blue-100 to-white min-h-screen relative overflow-hidden">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Blueprints of Growth</h1>
      <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
        Welcome! I'm Mahek Bhagchandani - a graduate student in I/O Psychology, community-builder, HR intern, student leader, dancer, and firm believer that growth happens when we lean into discomfort. This site is a collection of my academic and leadership journey, creative projects, and reflections.
      </p>

      <img 
        src={`${process.env.PUBLIC_URL}/assets/grad6.JPG`} 
        alt="Mahek smiling warmly" 
        className="mx-auto rounded-lg shadow-xl w-full max-w-md mb-10" 
      />

      <div className="flex justify-center gap-6 flex-wrap">
        <Link to="/bachelors" className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-900 transition">Bachelor’s Journey</Link>
        <Link to="/masters" className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-900 transition">Master’s Path</Link>
        <Link to="/hr-portfolio" className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-900 transition">HR Portfolio</Link>
        <Link to="/blog" className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-900 transition">Blog</Link>
        <Link to="/contact" className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-900 transition">Contact</Link>
      </div>

      <div className="mt-16 text-gray-700 max-w-2xl mx-auto text-lg">
        <p className="mb-4">
          I'm passionate about helping people feel seen, supported, and stretched, whether that’s through inclusive hiring, coaching student leaders, or choreographing a cultural dance showcase.
        </p>
        <p className="mb-4">
          I believe we grow through shared stories, transparent leadership, and the small brave decisions that shape who we are. This space is a reflection of that growth, and a warm invitation to share yours, too.
        </p>
        <p>
          <strong>Ready to Change?</strong>
        </p>
      </div>

      {/* Decorative Twinkling Stars */}
      <FaStar className="text-yellow-300 text-4xl opacity-20 absolute top-10 left-10 animate-pulse" />
      <FaStar className="text-yellow-400 text-5xl opacity-25 absolute top-20 right-10 animate-ping" />
      <FaStar className="text-yellow-200 text-3xl opacity-15 absolute bottom-10 left-16 animate-bounce" />
      <FaStar className="text-yellow-300 text-5xl opacity-10 absolute bottom-16 right-12 animate-pulse" />
      <FaStar className="text-yellow-400 text-4xl opacity-30 absolute top-40 left-1/3 animate-pulse" />
      <FaStar className="text-yellow-100 text-3xl opacity-10 absolute top-5 right-1/2 animate-pulse" />
      <FaStar className="text-yellow-300 text-4xl opacity-15 absolute bottom-32 right-1/4 animate-pulse" />
      <FaStar className="text-yellow-300 text-3xl opacity-20 absolute bottom-20 left-1/4 animate-ping" />
      <FaStar className="text-yellow-200 text-5xl opacity-10 absolute top-1/3 right-20 animate-pulse" />
      <FaStar className="text-yellow-300 text-3xl opacity-25 absolute top-1/4 left-1/2 animate-bounce" />
    </div>
  );
}

export default Home;
