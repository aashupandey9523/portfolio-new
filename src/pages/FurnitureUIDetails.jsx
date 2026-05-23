import { Link } from "react-router-dom";

function FurnitureUIDetails() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 py-16">

      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Furniture Showcase UI
      </h1>

      <p className="text-gray-400 text-lg leading-8 max-w-4xl mb-14">
        A premium furniture shopping UI designed with luxury aesthetics,
        clean layouts and modern product showcase experience.
      </p>

      {/* MAIN IMAGE */}
      <div className="rounded-3xl overflow-hidden border border-gray-800 mb-16">

        <img
          src="/images/furniture-ui.png"
          alt="Furniture UI"
          className="w-full object-cover"
        />

      </div>

      {/* DETAILS */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">

        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Project Goal
          </h2>

          <p className="text-gray-400 leading-8">
            Designed a luxury furniture browsing experience focused on
            premium visuals, clean navigation and modern shopping interactions.
          </p>

        </div>

        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">

          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Design Highlights
          </h2>

          <p className="text-gray-400 leading-8">
            Elegant typography, premium product cards, responsive layouts,
            modern navbar and smooth shopping experience.
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
            Premium Product Cards
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Modern Shopping UI
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Luxury Layout Design
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Responsive Experience
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Product Filtering UI
          </div>

          <div className="bg-[#111] p-6 rounded-2xl border border-gray-800">
            Conversion Focused Design
          </div>

        </div>

      </div>

      {/* TOOLS */}
      <div className="mb-20">

        <h2 className="text-3xl font-bold mb-8">
          Tools & Technologies
        </h2>

        <div className="flex flex-wrap gap-4">

          <span className="bg-red-900/20 border border-red-700 px-5 py-3 rounded-full text-red-400">
            Figma
          </span>

          <span className="bg-red-900/20 border border-red-700 px-5 py-3 rounded-full text-red-400">
            UI/UX
          </span>

          <span className="bg-red-900/20 border border-red-700 px-5 py-3 rounded-full text-red-400">
            Responsive Design
          </span>

          <span className="bg-red-900/20 border border-red-700 px-5 py-3 rounded-full text-red-400">
            E-Commerce
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

export default FurnitureUIDetails;