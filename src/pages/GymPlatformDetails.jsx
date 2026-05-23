const GymPlatformDetails = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-24">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <p className="text-red-500 tracking-[5px] uppercase mb-4">
          Project Details
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          Gym Website Platform
        </h1>

        <p className="text-gray-400 text-lg leading-8 max-w-4xl">
          A modern high-converting fitness website platform designed
          with premium UI/UX, responsive layouts, engaging sections,
          and conversion-focused user experience for gyms and fitness brands.
        </p>

        {/* Overview */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold text-red-500 mb-6">
              Project Overview
            </h2>

            <p className="text-gray-400 leading-8">
              This gym platform was created to deliver a modern fitness
              brand experience with visually engaging UI sections,
              responsive design, smooth scrolling, premium layouts,
              and user-friendly interactions.
            </p>

          </div>

          <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold text-red-500 mb-6">
              Main Features
            </h2>

            <ul className="space-y-4 text-gray-400">
              <li>✔ Premium Hero Section</li>
              <li>✔ Responsive Gym Layout</li>
              <li>✔ Membership Pricing UI</li>
              <li>✔ Animated Sections</li>
              <li>✔ Testimonials Slider</li>
              <li>✔ BMI Calculator</li>
              <li>✔ Trainer Showcase</li>
              <li>✔ Contact & CTA Sections</li>
            </ul>

          </div>

        </div>

        {/* Tech Stack */}
        <div className="mt-12 bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold text-red-500 mb-6">
            Technologies Used
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "React.js",
              "Tailwind CSS",
              "Responsive Design",
              "Modern UI/UX",
              "Frontend Architecture",
              "Component-Based Design",
              "Interactive Layouts",
            ].map((tech, index) => (
              <div
                key={index}
                className="
                  px-5 py-3
                  rounded-full
                  border border-red-700
                  text-red-400
                "
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

        {/* UI Sections */}
        <div className="mt-12 bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold text-red-500 mb-6">
            UI Sections Included
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-400">

            <div>• Hero Section with Background Effects</div>
            <div>• Services Section</div>
            <div>• About Section</div>
            <div>• Skills Showcase</div>
            <div>• Trainers Section</div>
            <div>• Pricing Plans</div>
            <div>• Testimonials</div>
            <div>• Contact Form</div>
            <div>• Sticky Navbar</div>
            <div>• Premium Footer</div>

          </div>

        </div>

        {/* Problem Solving */}
        <div className="mt-12 bg-[#0f0f0f] border border-gray-800 rounded-3xl p-8">

          <h2 className="text-2xl font-semibold text-red-500 mb-6">
            Design & User Experience
          </h2>

          <p className="text-gray-400 leading-8">
            The entire platform was designed with a conversion-focused
            approach where visual hierarchy, typography, spacing,
            animations, and user interaction were carefully optimized
            to create a premium fitness website experience.
          </p>

        </div>

        {/* Final Result */}
        <div className="
          mt-12
          bg-gradient-to-r from-red-900/20 to-black
          border border-red-900
          rounded-3xl
          p-8
        ">

          <h2 className="text-2xl font-semibold text-red-500 mb-6">
            Final Outcome
          </h2>

          <p className="text-gray-300 leading-8">
            The final result is a production-level gym website platform
            with premium aesthetics, smooth user experience,
            responsive design, scalable frontend structure,
            and high-converting UI sections suitable for real-world
            gym businesses and fitness startups.
          </p>

        </div>

      </div>

    </div>
  );
};

export default GymPlatformDetails;