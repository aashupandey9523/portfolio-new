import { Link } from "react-router-dom";

function PlantsUIDetails() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-16">

      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Plants Ordering Website UI
      </h1>

      <p className="text-gray-400 text-lg max-w-4xl leading-8 mb-14">
        A premium modern plants ordering UI designed for a clean shopping
        experience with elegant visuals, modern typography and conversion-focused layout.
      </p>

      {/* MAIN IMAGE */}
      <div className="rounded-3xl overflow-hidden border border-gray-800 mb-16">
        <img
          src="/src/assets/plants-ui.png"
          alt="Plants UI"
          className="w-full object-cover"
        />
      </div>

      {/* PROJECT DETAILS */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">

        <div className="bg-[#0f0f0f] p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Project Goal
          </h2>

          <p className="text-gray-400 leading-8">
            The goal of this project was to create a modern and visually premium
            plants ordering experience that feels elegant, minimal and interactive.
            The design focuses on user engagement and product presentation.
          </p>
        </div>

        <div className="bg-[#0f0f0f] p-8 rounded-3xl border border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Design Highlights
          </h2>

          <p className="text-gray-400 leading-8">
            Glassmorphism cards, dark luxury theme, premium typography,
            modern CTA buttons, responsive product showcase and immersive hero section.
          </p>
        </div>

      </div>

      {/* FEATURES */}
      <div className="mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Premium Hero Section
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Product Showcase UI
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Modern Navigation Bar
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Glassmorphism Cards
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Responsive Layout
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Conversion Focused Design
          </div>

        </div>

      </div>

      {/* TECH STACK */}
      <div className="mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Tools & Technologies
        </h2>

        <div className="flex flex-wrap gap-4">

          <span className="bg-red-900/20 border border-red-700 px-5 py-3 rounded-full text-red-400">
            Figma
          </span>

          <span className="bg-red-900/20 border border-red-700 px-5 py-3 rounded-full text-red-400">
            UI/UX Design
          </span>

          <span className="bg-red-900/20 border border-red-700 px-5 py-3 rounded-full text-red-400">
            Responsive Design
          </span>

          <span className="bg-red-900/20 border border-red-700 px-5 py-3 rounded-full text-red-400">
            E-Commerce UI
          </span>

        </div>

      </div>

      {/* BACK BUTTON */}
      <Link
        to="/work"
        className="
          inline-block
          border border-red-700
          px-8 py-4
          rounded-xl
          hover:bg-red-700/20
          transition
        "
      >
        ← Back to Work
      </Link>

    </div>
  );
}

export default PlantsUIDetails;