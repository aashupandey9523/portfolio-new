import { Link } from "react-router-dom";

import gym1 from "../assets/gym1.png";
import plantsUI from "../assets/plants-ui.png";
import product1 from "../assets/product1.png";
import furnitureUI from "../assets/furniture-ui.png";

const projects = [
  {
    title: "Gym Website platform",
    desc: "Modern high-converting gym website with premium UI/UX and responsive layout.",
    image: gym1,
    tech: ["React", "Tailwind", "UI/UX"],

    live: "/videos/gym-website-demo.mp4",
    details: "/gym-platform-details",
  },

  {
    title: "Plants Ordering Website UI",
    desc: "Modern plants ordering website UI with premium product showcase and clean shopping experience.",
    image: plantsUI,
    tech: ["Figma", "UI Design", "E-Commerce"],

    live: "/videos/plants-ui-demo.mp4",
    details: "/plants-ui-details",
  },

  {
    title: "Product Review Platform",
    desc: "A modern product review and comparison platform with scalable frontend.",
    image: product1,
    tech: ["React", "Frontend", "Tailwind"],

    live: "/videos/product-review-demo.mp4",
    details: "/product-review-details",
  },

  {
    title: "Furniture Showcase UI",
    desc: "Premium furniture showcase UI with luxury shopping experience and modern product layouts.",
    image: furnitureUI,
    tech: ["Figma", "UI/UX", "Responsive"],

    live: "/videos/furniture-ui-demo.mp4",
    details: "/furniture-ui-details",
  },
];

export default function Work() {
  return (

    <>
  {/* PREMIUM NAVBAR */}
  <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">

    <div className="max-w-[1700px] mx-auto flex justify-between items-center px-6 md:px-16 py-5">

      {/* LOGO */}
      <Link to="/" className="text-3xl font-bold tracking-wide text-white">
        Aashu<span className="text-red-600">.</span>
      </Link>

      {/* MENU */}
      <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

        <li>
          <Link
            to="/"
            className="hover:text-red-500 transition duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-red-500 transition duration-300"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#services"
            className="hover:text-red-500 transition duration-300"
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-red-500 transition duration-300"
          >
            Contact
          </a>
        </li>

      </ul>

      {/* BUTTON */}
      <button className="border border-red-700 text-white px-6 py-2 rounded-xl hover:bg-red-700/20 transition duration-300">
        Hire Me
      </button>

    </div>

  </nav>

      {/* MAIN SECTION */}
      <div
        id="projects"
        className="bg-black text-white min-h-screen px-6 md:px-16 pt-36 pb-28"
      >
       {/* BACK BUTTON */}
<div className="mb-12 mt-6">

  <Link
    to="/"
    className="
      inline-flex items-center gap-3
      border border-red-700
      px-6 py-3
      rounded-xl
      hover:bg-red-700/20
      transition duration-300
    "
  >
    ← Back to Home
  </Link>

</div>
        {/* HEADING */}
        <div className="text-center mb-20">

          <p className="text-red-500 tracking-[6px] text-sm mb-4">
            PORTFOLIO
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            My <span className="text-red-600">Work</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            A collection of UI/UX, frontend and business-focused projects
            designed for modern startups and businesses.
          </p>

        </div>


        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
                group
                bg-[#0b0b0b]
                border border-gray-800
                rounded-3xl
                overflow-hidden
                hover:-translate-y-3
                hover:border-red-700
                transition duration-500
                hover:shadow-[0_20px_80px_rgba(255,0,0,0.15)]
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-[320px]
                    object-cover
                    group-hover:scale-105
                    transition duration-700
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <h2 className="text-3xl font-bold mb-4">
                  {project.title}
                </h2>

                <p className="text-gray-400 leading-8">
                  {project.desc}
                </p>


                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="
                        px-4 py-2 rounded-full
                        bg-red-900/20
                        border border-red-800
                        text-sm text-red-400
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>


                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">

                  {/* LIVE PREVIEW */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-red-600
                      px-6 py-3
                      rounded-xl
                      hover:bg-red-700
                      hover:scale-105
                      hover:shadow-[0_10px_30px_rgba(255,0,0,0.3)]
                      transition duration-300
                      inline-block
                    "
                  >
                    Live Preview
                  </a>


                  {/* VIEW DETAILS */}
                  <a
                    href={project.details}
                    className="
                      border border-red-700
                      px-6 py-3
                      rounded-xl
                      hover:bg-red-700/20
                      hover:scale-105
                      hover:shadow-[0_10px_30px_rgba(255,0,0,0.2)]
                      transition duration-300
                      inline-block
                    "
                  >
                    View Details
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>


       {/* PREMIUM FOOTER */}
<footer
  id="contact"
  className="mt-52 border-t border-gray-800 pt-20"
>

  <div className="grid md:grid-cols-4 gap-12">

    {/* LEFT */}
    <div>

      <h1 className="text-5xl font-bold mb-8">
        Aashu<span className="text-red-600">.</span>
      </h1>

      <p className="text-gray-400 leading-10 text-lg">
        UI/UX Designer & Web Developer focused on
        creating modern, scalable and high-converting
        digital experiences.
      </p>

      {/* SOCIAL */}
      <div className="flex gap-5 mt-10">

        <a
          href="#"
          className="w-14 h-14 rounded-2xl border border-gray-700 flex items-center justify-center hover:border-red-600 hover:-translate-y-1 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            className="w-7"
          />
        </a>

        <a
          href="#"
          className="w-14 h-14 rounded-2xl border border-gray-700 flex items-center justify-center hover:border-red-600 hover:-translate-y-1 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
            className="w-7"
          />
        </a>

        <a
          href="#"
          className="w-14 h-14 rounded-2xl border border-gray-700 flex items-center justify-center hover:border-red-600 hover:-translate-y-1 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
            className="w-7"
          />
        </a>

      </div>

    </div>


    {/* QUICK LINKS */}
    <div>

      <h2 className="text-3xl font-semibold mb-8">
        Quick Links
      </h2>

      <div className="flex flex-col gap-5 text-gray-400 text-lg">

        <Link to="/" className="hover:text-red-500 transition">
          Home
        </Link>

        <a href="#projects" className="hover:text-red-500 transition">
          Projects
        </a>

        <a href="#services" className="hover:text-red-500 transition">
          Services
        </a>

        <a href="#contact" className="hover:text-red-500 transition">
          Contact
        </a>

      </div>

    </div>


    {/* SERVICES */}
    <div id="services">

      <h2 className="text-3xl font-semibold mb-8">
        Services
      </h2>

      <div className="flex flex-col gap-5 text-gray-400 text-lg">

        <p>UI/UX Design</p>
        <p>Web Development</p>
        <p>AWS Deployment</p>
        <p>Business Solutions</p>

      </div>

    </div>


    {/* CONTACT */}
    <div>

      <h2 className="text-3xl font-semibold mb-8">
        Contact
      </h2>

      <div className="flex flex-col gap-5 text-gray-400 text-lg">

        <p>aashuranjan68@gmail.com</p>

        <p>+91 9523640797</p>

        <p>Chandigarh University, Punjab</p>

      </div>

    </div>

  </div>


  {/* BOTTOM */}
  <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between text-gray-500">

    <p>
      © 2026 Aashu Portfolio. All Rights Reserved.
    </p>

    <p>
      Designed & Developed by{" "}
      <span className="text-red-500">
        Aashu
      </span>
    </p>

  </div>

</footer>

      </div>

    </>
  );
}