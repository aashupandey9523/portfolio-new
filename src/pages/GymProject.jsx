import { useState } from "react";
import { Link } from "react-router-dom";

function GymProject() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-16">

      {/* 🔥 TITLE */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Gym Website Platform
      </h1>

      <p className="text-gray-400 text-lg mb-10 max-w-3xl leading-8">
        A modern high-converting fitness platform designed to help gyms
        grow online, attract customers, and deliver a premium user experience
        with responsive UI and conversion-focused layouts.
      </p>


      {/* 🔥 IMAGE GRID */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">

        <img
          src="/src/assets/gym1.png"
          className="
            rounded-2xl
            cursor-pointer
            hover:scale-[1.02]
            transition duration-300
            border border-gray-800
            hover:border-red-700
            hover:shadow-[0_10px_40px_rgba(255,0,0,0.2)]
          "
          onClick={() => setSelectedImage("/src/assets/gym1.png")}
        />

        <img
          src="/src/assets/gym2.png"
          className="
            rounded-2xl
            cursor-pointer
            hover:scale-[1.02]
            transition duration-300
            border border-gray-800
            hover:border-red-700
            hover:shadow-[0_10px_40px_rgba(255,0,0,0.2)]
          "
          onClick={() => setSelectedImage("/src/assets/gym2.png")}
        />

        <img
          src="/src/assets/gym3.png"
          className="
            rounded-2xl
            cursor-pointer
            hover:scale-[1.02]
            transition duration-300
            border border-gray-800
            hover:border-red-700
            hover:shadow-[0_10px_40px_rgba(255,0,0,0.2)]
          "
          onClick={() => setSelectedImage("/src/assets/gym3.png")}
        />

        <img
          src="/src/assets/gym4.png"
          className="
            rounded-2xl
            cursor-pointer
            hover:scale-[1.02]
            transition duration-300
            border border-gray-800
            hover:border-red-700
            hover:shadow-[0_10px_40px_rgba(255,0,0,0.2)]
          "
          onClick={() => setSelectedImage("/src/assets/gym4.png")}
        />

      </div>


      {/* 🔥 POPUP IMAGE */}
      {selectedImage && (
        <div
          className="
            fixed inset-0 bg-black/80
            flex items-center justify-center
            z-50
            p-6
          "
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="
              max-w-6xl
              w-full
              rounded-2xl
              border border-red-800
              shadow-[0_0_60px_rgba(255,0,0,0.3)]
            "
          />
        </div>
      )}


      {/* 🔥 DETAILS */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">

        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Problem
          </h2>

          <p className="text-gray-400 leading-8">
            Most gyms struggle with outdated websites, poor user experience,
            and low conversion rates. Users often leave because of slow,
            cluttered, and unprofessional interfaces.
          </p>
        </div>

        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Solution
          </h2>

          <p className="text-gray-400 leading-8">
            Designed a premium fitness platform with modern UI/UX,
            responsive layouts, interactive sections, membership plans,
            and conversion-focused design strategies.
          </p>
        </div>

      </div>


      {/* 🔥 FEATURES */}
      <div className="mb-16">

        <h2 className="text-3xl font-semibold mb-8">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Responsive Design",
            "Membership Plans",
            "Trainer Profiles",
            "BMI Calculator",
            "Testimonials Section",
            "WhatsApp Integration",
            "Sticky Navbar",
            "Premium Hero Section",
            "Modern Footer UI",
          ].map((feature, index) => (
            <div
              key={index}
              className="
                bg-[#111]
                p-6
                rounded-2xl
                border border-gray-800
                hover:border-red-700
                hover:-translate-y-2
                hover:shadow-[0_10px_40px_rgba(255,0,0,0.2)]
                transition duration-300
              "
            >
              {feature}
            </div>
          ))}

        </div>

      </div>


      {/* 🔥 TECH STACK */}
      <div className="mb-16">

        <h2 className="text-3xl font-semibold mb-8">
          Tech Stack
        </h2>

        <div className="flex gap-4 flex-wrap">

          <span className="bg-gray-900 px-5 py-3 rounded-full border border-red-800">
            React.js
          </span>

          <span className="bg-gray-900 px-5 py-3 rounded-full border border-red-800">
            Tailwind CSS
          </span>

          <span className="bg-gray-900 px-5 py-3 rounded-full border border-red-800">
            Responsive UI
          </span>

          <span className="bg-gray-900 px-5 py-3 rounded-full border border-red-800">
            Modern UX
          </span>

        </div>

      </div>


      {/* 🔥 BACK BUTTON */}
      <Link
        to="/"
        className="
          inline-block
          border border-red-700
          px-6 py-3
          rounded-xl
          text-red-500
          hover:bg-red-700/20
          hover:scale-105
          transition duration-300
        "
      >
        ← Back to Home
      </Link>

    </div>
  );
}

export default GymProject;