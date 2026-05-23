const ProductReviewDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-24">

      {/* Heading */}
      <div className="max-w-5xl mx-auto">

        <p className="text-red-500 tracking-[4px] uppercase mb-4">
          Project Details
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Product Review Platform
        </h1>

        <p className="text-gray-400 text-lg leading-8">
          A modern and scalable product review platform designed to help
          users discover trusted products through authentic reviews,
          ratings, and comparisons.
        </p>

        {/* Main Overview */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-red-500">
              Project Overview
            </h2>

            <p className="text-gray-400 leading-8">
              This platform allows users to explore products, compare ratings,
              read authentic reviews, and make better purchasing decisions.
              The project focuses on clean UI/UX, modern frontend architecture,
              responsive layouts, and scalable design systems.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-red-500">
              Key Features
            </h2>

            <ul className="space-y-4 text-gray-400">
              <li>✔ Product comparison system</li>
              <li>✔ Review & rating interface</li>
              <li>✔ Modern responsive UI</li>
              <li>✔ Interactive product cards</li>
              <li>✔ Search & filtering layout</li>
              <li>✔ High-converting landing page</li>
              <li>✔ Mobile-friendly experience</li>
            </ul>
          </div>

        </div>

        {/* Tech Stack */}
        <div className="mt-12 bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold mb-6 text-red-500">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "React.js",
              "Tailwind CSS",
              "Responsive Design",
              "Modern UI/UX",
              "Frontend Architecture",
              "Component-Based Design",
            ].map((tech, i) => (
              <div
                key={i}
                className="px-5 py-3 rounded-full border border-red-700 text-red-400"
              >
                {tech}
              </div>
            ))}

          </div>
        </div>

        {/* Problem Solving */}
        <div className="mt-12 bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold mb-6 text-red-500">
            Problem Solving Approach
          </h2>

          <p className="text-gray-400 leading-8">
            The primary goal of this project was to create a trust-focused
            platform where users can confidently explore and review products.
            The UI was designed with a conversion-focused structure to increase
            engagement, improve readability, and provide smooth navigation.
          </p>
        </div>

        {/* Final Result */}
        <div className="mt-12 bg-gradient-to-r from-red-900/20 to-black border border-red-900 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold mb-6 text-red-500">
            Final Outcome
          </h2>

          <p className="text-gray-300 leading-8">
            The final result is a production-level frontend experience with
            modern animations, scalable structure, clean component design,
            responsive behavior, and visually engaging UI sections suitable
            for real-world startup products.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductReviewDetails;