
import GymProject from "./pages/GymProject";
import ProductProject from "./pages/ProductProject.jsx";
import ProductReviewDetails from "./pages/ProductReviewDetails";
import GymPlatformDetails from "./pages/GymPlatformDetails";
import PlantsUIDetails from "./pages/PlantsUIDetails";
import FurnitureUIDetails from "./pages/FurnitureUIDetails";
import Work from "./pages/Work";
import { Routes, Route, Link } from "react-router-dom";
import profile from "./assets/profile.jpeg";
import heroBg from "./assets/hero-bg.png";
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";


function Home() {
  return (
    <div className="bg-black text-white min-h-screen md:h-screen">

      {/* NAVBAR */}
      <nav
  className="
    fixed top-0 left-0 w-full z-50
    flex justify-between items-center
    px-6 md:px-16 py-4
    bg-black/70 backdrop-blur-md
    border-b border-gray-800
  "
>
  {/* LOGO */}
  <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
    Aashu<span className="text-red-600">.</span>
  </h1>

  {/* NAV LINKS */}
  <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
    <li className="hover:text-red-500 transition cursor-pointer">
      <a href="#home">Home</a>
    </li>

    <li className="hover:text-red-500 transition cursor-pointer">
      <a href="#projects">Projects</a>
    </li>

    <li className="hover:text-red-500 transition cursor-pointer">
      <a href="#services">Services</a>
    </li>

    <li className="hover:text-red-500 transition cursor-pointer">
      <a href="#contact">Contact</a>
    </li>
  </ul>

  {/* BUTTON */}
  <button
    className="
      border border-red-700
      px-5 py-2 rounded-xl
      hover:bg-red-700 hover:text-white
      transition duration-300
      shadow-[0_0_20px_rgba(255,0,0,0.15)]
      hover:shadow-[0_0_30px_rgba(255,0,0,0.35)]
    "
  >
    Hire Me
  </button>
</nav>

      {/* HERO */}
      <div
      
  id="home"
  className="relative h-[85vh] pt-24 flex items-center justify-center px-6 overflow-hidden scroll-mt-24"
>
      {/* HERO BACKGROUND */}
<div className="absolute inset-0 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <img
    src={heroBg}
    alt="hero background"
   className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* RED GLOW */}
  <div
    className="absolute top-0 right-0 w-[700px] h-[800px]
    bg-red-600/20 blur-[160px] rounded-full"
  ></div>

  {/* EXTRA DEPTH */}
  <div
    className="absolute bottom-0 left-0 w-[500px] h-[700px]
    bg-red-900/20 blur-[140px] rounded-full"
  ></div>

 

</div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-900 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-4xl text-center relative z-10">
          <p className="text-gray-400 mb-4 tracking-widest">PORTFOLIO</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            I build{" "}
            <span className="bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent">
              high-converting websites
            </span>
            <br />
            that help businesses grow online.
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            UI/UX Designer & Web Developer focused on creating modern,
            scalable and user-friendly digital experiences.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a
  href="/work"
  className="
  bg-red-700 text-white
  px-6 py-3 rounded-lg
  hover:bg-red-800
  hover:scale-105
  hover:shadow-[0_10px_40px_rgba(255,0,0,0.35)]
  transition duration-300
"
>
  View Work →
</a>

            <a
  href="#contact"
  className="
  border border-red-800
  px-6 py-3 rounded-lg
  hover:bg-red-900/20 transition
"
>
  Contact Me
</a>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-16 py-24 bg-black">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-red-700">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Gym Project */}
       <div className="relative bg-gradient-to-br from-[#0b0b0b] to-[#111] border border-gray-800 rounded-3xl p-12 transition duration-300 hover:border-red-800 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] overflow-hidden">

  {/* 🔥 subtle red glow background */}
  <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-red-900 opacity-10 blur-3xl rounded-full"></div>

  <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">

    {/* LEFT TEXT */}
    <div>
      <h3 className="text-3xl md:text-4xl font-semibold mb-5 tracking-wide">
        Gym Website
      </h3>

      <p className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed">
        Modern fitness website with conversion-focused UI, membership plans,
        and seamless user experience designed for business growth.
      </p>

      <Link to="/project/gym" className="inline-flex items-center gap-2 text-red-500 text-lg group">
  View Project 
  <span className="group-hover:translate-x-1 transition">→</span>
</Link>
    </div>


    {/* RIGHT IMAGES (STACK EFFECT) */}
    <div className="overflow-hidden rounded-2xl w-full">

  <div className="flex gap-6 animate-scroll items-center">

    <img src="/src/assets/gym1.png" className="h-72 min-w-[300px] rounded-xl object-cover flex-shrink-0" />
    <img src="/src/assets/gym2.png" className="h-72 min-w-[300px] rounded-xl object-cover flex-shrink-0" />
    <img src="/src/assets/gym3.png" className="h-72 min-w-[300px] rounded-xl object-cover flex-shrink-0" />
    <img src="/src/assets/gym4.png" className="h-72 min-w-[300px] rounded-xl object-cover flex-shrink-0" />

    {/* duplicate */}
    <img src="/src/assets/gym1.png" className="h-72 min-w-[300px] rounded-xl object-cover flex-shrink-0" />
    <img src="/src/assets/gym2.png" className="h-72 min-w-[300px] rounded-xl object-cover flex-shrink-0" />
    <img src="/src/assets/gym3.png" className="h-72 min-w-[300px] rounded-xl object-cover flex-shrink-0" />
    <img src="/src/assets/gym4.png" className="h-72 min-w-[300px] rounded-xl object-cover flex-shrink-0" />

  </div>

</div>
  </div>
</div>
<div className="relative bg-gradient-to-br from-[#0b0b0b] to-[#111] border border-gray-800 rounded-3xl p-12 transition duration-300 hover:border-red-800 hover:shadow-[0_0_40px_rgba(255,0,0,0.15)] overflow-hidden">

  {/* glow */}
  <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-red-900 opacity-10 blur-3xl rounded-full"></div>

  <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">

    {/* LEFT TEXT */}
    <div>
      <h3 className="text-3xl md:text-4xl font-semibold mb-5">
        Product Review Platform
      </h3>

      <p className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed">
        A clean and modern platform where users can explore, compare, and review products for better purchasing decisions.
      </p>

     <Link to="/project/product" className="inline-flex items-center gap-2 text-red-500 text-lg group">
  View Project 
  <span className="group-hover:translate-x-1 transition">→</span>
</Link>
    </div>


    {/* RIGHT SLIDER */}
    <div className="overflow-hidden rounded-2xl w-full">

      <div className="flex gap-6 animate-scroll items-center">

        <img src="/src/assets/product1.png" className="h-72 w-auto rounded-xl object-contain" />
        <img src="/src/assets/product2.png" className="h-72 w-auto rounded-xl object-contain" />
        <img src="/src/assets/product3.png" className="h-72 w-auto rounded-xl object-contain" />
        <img src="/src/assets/product4.png" className="h-72 w-auto rounded-xl object-contain" />

        {/* duplicate */}
        <img src="/src/assets/product1.png" className="h-72 w-auto rounded-xl object-contain" />
        <img src="/src/assets/product2.png" className="h-72 w-auto rounded-xl object-contain" />
        <img src="/src/assets/product3.png" className="h-72 w-auto rounded-xl object-contain" />
        <img src="/src/assets/product4.png" className="h-72 w-auto rounded-xl object-contain" />

      </div>

    </div>

  </div>
</div>

        </div>
        {/* 🔥 SERVICES SECTION */}
{/* 🔥 SERVICES SECTION */}
<section id="services" className="px-6 md:px-16 py-24 bg-black mt-16">

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
    My <span className="text-red-700">Services</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Service 1 */}
    <div
      className="relative bg-[#111] border border-gray-800 rounded-2xl p-8 
      transition duration-300 
      hover:border-red-700 
      hover:shadow-[0_20px_50px_rgba(255,0,0,0.15)] 
      transform-gpu will-change-transform"

      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        e.currentTarget.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.05)
        `;
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 hover:opacity-100 transition duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-4">
          UI/UX & Website Design
        </h3>

        <p className="text-gray-400 mb-4">
          Modern, clean and high-converting designs focused on user experience.
        </p>

        <ul className="text-gray-500 text-sm space-y-1">
          <li>• Figma UI/UX Design</li>
          <li>• Landing Pages</li>
          <li>• Responsive Design</li>
          <li>• Conversion Layouts</li>
        </ul>
      </div>
    </div>


    {/* Service 2 */}
    <div
      className="relative bg-[#111] border border-gray-800 rounded-2xl p-8 
      transition duration-300 
      hover:border-red-700 
      hover:shadow-[0_20px_50px_rgba(255,0,0,0.15)] 
      transform-gpu will-change-transform"

      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        e.currentTarget.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.05)
        `;
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 hover:opacity-100 transition duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-4">
          Web Development
        </h3>

        <p className="text-gray-400 mb-4">
          Fast and responsive websites using React & modern tech.
        </p>

        <ul className="text-gray-500 text-sm space-y-1">
          <li>• React.js Development</li>
          <li>• Tailwind CSS</li>
          <li>• Dynamic UI</li>
          <li>• SEO Optimization</li>
        </ul>
      </div>
    </div>


    {/* Service 3 */}
    <div
      className="relative bg-[#111] border border-gray-800 rounded-2xl p-8 
      transition duration-300 
      hover:border-red-700 
      hover:shadow-[0_20px_50px_rgba(255,0,0,0.15)] 
      transform-gpu will-change-transform"

      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        e.currentTarget.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.05)
        `;
      }}

      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 hover:opacity-100 transition duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-4">
          Cloud & Business Solutions
        </h3>

        <p className="text-gray-400 mb-4">
          AWS deployment + startup-focused systems.
        </p>

        <ul className="text-gray-500 text-sm space-y-1">
          <li>• AWS (EC2, Hosting)</li>
          <li>• Full Stack Integration</li>
          <li>• MVP Development</li>
          <li>• Business Strategy</li>
        </ul>
      </div>
    </div>

  </div>

</section>
 {/* 🔥 ABOUT SECTION */}
<section id="about" className="px-6 md:px-16 py-24 bg-black">

  <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 md:p-16 
  transition duration-300 
  hover:border-red-700 
  hover:shadow-[0_20px_60px_rgba(255,0,0,0.15)] 
  transform-gpu will-change-transform"

  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    e.currentTarget.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  }}
  >

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT TEXT */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-red-600">Me</span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          I am a UI/UX Designer and Web Developer focused on building modern,
          high-converting websites that help businesses grow online. I combine
          design thinking with technical skills to create clean, scalable, and
          user-friendly digital products.
        </p>

        <p className="text-gray-500 leading-relaxed">
          I have experience working on real-world projects including fitness platforms,
          product review systems, and startup-based solutions. I also work with cloud
          technologies like AWS for deployment and performance optimization.
        </p>
      </div>


      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
       <img 
  src={profile}
  className="w-96 h-96 object-cover rounded-2xl border border-gray-800 
  shadow-[0_20px_60px_rgba(255,0,0,0.25)]
  animate-float"
/>
      </div>

    </div>

  </div>

</section>
{/* 🔥 SKILLS SECTION */}
<section className="px-6 md:px-16 py-24 bg-black">

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
    My <span className="text-red-700">Skills</span>
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* UI/UX */}
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 
transition-all duration-300 ease-out 
hover:-translate-y-3 
hover:scale-[1.02]
hover:border-red-700 
hover:shadow-[0_30px_80px_rgba(255,0,0,0.3)]">
      
      <h3 className="text-xl font-semibold mb-2"> UI/UX Design</h3>
      <p className="text-gray-400 text-sm mb-4">
        Expert in Figma, creating high-converting, clean and modern user interfaces.
      </p>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div className="h-2 bg-red-600 rounded-full w-[100%]"></div>
      </div>

      <p className="text-red-500 text-sm mt-2">100%</p>
    </div>


    {/* React */}
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 
transition-all duration-300 ease-out 
hover:-translate-y-3 
hover:scale-[1.02]
hover:border-red-700 
hover:shadow-[0_30px_80px_rgba(255,0,0,0.3)]">

      <h3 className="text-xl font-semibold mb-2">React.js</h3>
      <p className="text-gray-400 text-sm mb-4">
        Building dynamic UI components and responsive frontend applications.
      </p>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div className="h-2 bg-red-600 rounded-full w-[60%]"></div>
      </div>

      <p className="text-red-500 text-sm mt-2">60%</p>
    </div>


    {/* AWS */}
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 
transition-all duration-300 ease-out 
hover:-translate-y-3 
hover:scale-[1.02]
hover:border-red-700 
hover:shadow-[0_30px_80px_rgba(255,0,0,0.3)]">

      <h3 className="text-xl font-semibold mb-2"> AWS / Cloud</h3>
      <p className="text-gray-400 text-sm mb-4">
        Deployment using EC2, server setup, hosting and production environment handling.
      </p>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div className="h-2 bg-red-600 rounded-full w-[100%]"></div>
      </div>

      <p className="text-red-500 text-sm mt-2">100% (Intermediate)</p>
    </div>


    {/* Marketing */}
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 
transition-all duration-300 ease-out 
hover:-translate-y-3 
hover:scale-[1.02]
hover:border-red-700 
hover:shadow-[0_30px_80px_rgba(255,0,0,0.3)]">

      <h3 className="text-xl font-semibold mb-2">Marketing</h3>
      <p className="text-gray-400 text-sm mb-4">
        Social media growth, brand positioning, and startup-focused marketing strategies.
      </p>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div className="h-2 bg-red-600 rounded-full w-[70%]"></div>
      </div>

      <p className="text-red-500 text-sm mt-2">70%</p>
    </div>


    {/* Business */}
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 
transition-all duration-300 ease-out 
hover:-translate-y-3 
hover:scale-[1.02]
hover:border-red-700 
hover:shadow-[0_30px_80px_rgba(255,0,0,0.3)]">

      <h3 className="text-xl font-semibold mb-2"> Business Development</h3>
      <p className="text-gray-400 text-sm mb-4">
        Startup experience, client acquisition, and revenue growth strategies.
      </p>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div className="h-2 bg-red-600 rounded-full w-[65%]"></div>
      </div>

      <p className="text-red-500 text-sm mt-2">60–70%</p>
    </div>


    {/* Content Writing */}
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 
transition-all duration-300 ease-out 
hover:-translate-y-3 
hover:scale-[1.02]
hover:border-red-700 
hover:shadow-[0_30px_80px_rgba(255,0,0,0.3)]">

      <h3 className="text-xl font-semibold mb-2"> Content Writing</h3>
      <p className="text-gray-400 text-sm mb-4">
        Writing engaging, conversion-focused content for websites and products.
      </p>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div className="h-2 bg-red-600 rounded-full w-[80%]"></div>
      </div>

      <p className="text-red-500 text-sm mt-2">80%</p>
    </div>


    {/* Website Building */}
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 
transition-all duration-300 ease-out 
hover:-translate-y-3 
hover:scale-[1.02]
hover:border-red-700 
hover:shadow-[0_30px_80px_rgba(255,0,0,0.3)]">

      <h3 className="text-xl font-semibold mb-2"> Website Building</h3>
      <p className="text-gray-400 text-sm mb-4">
        End-to-end website creation with design, development, and deployment.
      </p>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div className="h-2 bg-red-600 rounded-full w-[100%]"></div>
      </div>

      <p className="text-red-500 text-sm mt-2">Expert Level</p>
    </div>


    {/* Soft Skills */}
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 
transition-all duration-300 ease-out 
hover:-translate-y-3 
hover:scale-[1.02]
hover:border-red-700 
hover:shadow-[0_30px_80px_rgba(255,0,0,0.3)]">

      <h3 className="text-xl font-semibold mb-2"> Soft Skills</h3>
      <p className="text-gray-400 text-sm mb-4">
        Communication, problem-solving, and strong conversational ability.
      </p>

      <div className="w-full h-2 bg-gray-800 rounded-full">
        <div className="h-2 bg-red-600 rounded-full w-[90%]"></div>
      </div>

      <p className="text-red-500 text-sm mt-2">Strong</p>
    </div>

  </div>

</section>
{/* 🔥 CONTACT SECTION */}
{/* 🔥 CONTACT SECTION */}
<section id="contact" className="px-6 md:px-16 py-28 bg-black relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-900/10 blur-[180px] rounded-full"></div>

  {/* HEADING */}
  <div className="text-center mb-20 relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold">
      Let’s Build Something{" "}
      <span className="text-red-600">Amazing</span>
    </h2>

    <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
      Have a startup idea, business project, or modern website in mind?
      Let’s connect and create something impactful together.
    </p>
  </div>

  {/* MAIN BOX */}
  <div className="grid lg:grid-cols-2 gap-10 items-center relative z-10">

    {/* LEFT SIDE */}
    <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-10 relative overflow-hidden group 
hover:border-red-700 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(255,0,0,0.18)] 
transition-all duration-500">

      {/* RED GLOW */}
      <div className="absolute -top-20 -left-20 w-52 h-52 bg-red-700/10 blur-3xl rounded-full group-hover:bg-red-700/20 transition duration-500"></div>

      <div className="relative z-10">

       <p className="text-red-500 tracking-[6px] mb-4 text-lg font-bold uppercase">
  CONTACT
</p>

        <h3 className="text-4xl font-bold leading-tight mb-6">
          Ready To Work <br />
          Together?
        </h3>

        <p className="text-gray-400 leading-8 mb-10">
          I create high-converting websites, modern UI/UX experiences,
          startup solutions, and scalable digital products focused on
          growth and user experience.
        </p>

        {/* CONTACT CARDS */}
        <div className="space-y-5">

          {/* CONTACT CARDS */}
<div className="flex items-center gap-5 bg-black border border-gray-800 rounded-2xl p-5 
hover:border-red-700 hover:-translate-y-2 
hover:shadow-[0_10px_30px_rgba(255,0,0,0.15)] 
transition-all duration-300">
{/* email box */}
  <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center">
    <img 
      src="/src/assets/gmail.png"
      alt=""
      className="w-7 h-7 object-contain"
    />
  </div>

  <div>
    <h4 className="font-semibold text-lg">Email Address</h4>

    <p className="text-gray-400">
      aashuranjan68@gmail.com
    </p>
  </div>

</div>

{/* WHATSAPP BOX */}
<a
  href="https://wa.me/919523640797?text=Hi%20Aashu%20👋%20I%20want%20to%20discuss%20a%20project%20with%20you."
  target="_blank"
  className="flex items-center gap-5 bg-black border border-gray-800 rounded-2xl p-5 
  hover:border-red-700 hover:-translate-y-2 
  hover:shadow-[0_10px_30px_rgba(255,0,0,0.15)] 
  transition-all duration-300"
>

  <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center">
    <img 
      src="/src/assets/whatsapp.png"
      alt=""
      className="w-7 h-7 object-contain"
    />
  </div>

  <div>
    <h4 className="font-semibold text-lg">WhatsApp</h4>

    <p className="text-gray-400">
      Chat Instantly
    </p>
  </div>

</a>


          {/* LOCATION BOX */}
<a
  href="https://www.google.com/maps/place/Chandigarh+University/@30.7680906,76.5755136,17z"
  target="_blank"
  className="flex items-center gap-5 bg-black border border-gray-800 rounded-2xl p-5 
  hover:border-red-700 hover:-translate-y-2 
  hover:shadow-[0_10px_30px_rgba(255,0,0,0.15)] 
  transition-all duration-300"
>

   <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center text-2xl">
    <img 
      src="/src/assets/placeholder.png"
      alt=""
      className="w-7 h-7 object-contain"
    />
  </div>

  <div>
    <h4 className="font-semibold text-lg">Location</h4>

    <p className="text-gray-400">
      NH-75, CHANDIGARH UNIVERSITY, Gharuan, Punjab, India
    </p>
  </div>

</a>

        </div>

      </div>

    </div>


    {/* RIGHT SIDE FORM */}
    <div className="bg-[#0f0f0f] border border-gray-800 rounded-3xl p-10 relative overflow-hidden 
hover:border-red-700 hover:-translate-y-3 
hover:shadow-[0_20px_60px_rgba(255,0,0,0.18)] 
transition-all duration-500">

      {/* GLOW */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-700/10 blur-3xl rounded-full"></div>

      <div className="relative z-10">

        <h3 className="text-3xl font-bold mb-8">
          Send Me A Message
        </h3>

        <form className="space-y-6">

          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-gray-800 rounded-xl px-5 py-4 text-white outline-none focus:border-red-600 transition"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-gray-800 rounded-xl px-5 py-4 text-white outline-none focus:border-red-600 transition"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="project type (e.g. website, UI/UX Design, etc.)"
              className="w-full bg-black border border-gray-800 rounded-xl px-5 py-4 text-white outline-none focus:border-red-600 transition"
            />
          </div>

          <div>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-black border border-gray-800 rounded-xl px-5 py-4 text-white outline-none focus:border-red-600 transition resize-none"
            ></textarea>
          </div>

          <button
            className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold text-lg transition duration-300 hover:scale-[1.02]"
          >
            Send Message 
          </button>

        </form>

      </div>

    </div>

  </div>

</section>


      </section>
      {/* 🔥 FOOTER SECTION */}
<footer className="w-full bg-black border-t border-gray-800 pt-20 pb-6 px-6 md:px-16 overflow-hidden">

  {/* RED GLOW */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/10 blur-[140px] rounded-full"></div>

  <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

    {/* LEFT */}
    <div className="md:col-span-1">

      <h2 className="text-4xl font-bold mb-5">
        Aashu<span className="text-red-600">.</span>
      </h2>

      <p className="text-gray-400 leading-8 text-[17px] max-w-[320px]">
        UI/UX Designer & Web Developer focused on creating modern,
        scalable and high-converting digital experiences.
      </p>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 mt-8">

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com"
          target="_blank"
          className="w-12 h-12 rounded-xl bg-[#111] border border-gray-800 
          flex items-center justify-center
          hover:border-red-700 hover:-translate-y-2
          hover:shadow-[0_10px_25px_rgba(255,0,0,0.25)]
          transition-all duration-300"
        >
          <img
            src="/src/assets/instagram.png"
            alt=""
            className="w-6 h-6 object-contain"
          />
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com"
          target="_blank"
          className="w-12 h-12 rounded-xl bg-[#111] border border-gray-800 
          flex items-center justify-center
          hover:border-red-700 hover:-translate-y-2
          hover:shadow-[0_10px_25px_rgba(255,0,0,0.25)]
          transition-all duration-300"
        >
          <img
            src="/src/assets/linkedin.png"
            alt=""
            className="w-6 h-6 object-contain"
          />
        </a>

        {/* TELEGRAM */}
        <a
          href="https://telegram.org"
          target="_blank"
          className="w-12 h-12 rounded-xl bg-[#111] border border-gray-800 
          flex items-center justify-center
          hover:border-red-700 hover:-translate-y-2
          hover:shadow-[0_10px_25px_rgba(255,0,0,0.25)]
          transition-all duration-300"
        >
          <img
            src="/src/assets/telegram.png"
            alt=""
            className="w-6 h-6 object-contain"
          />
        </a>

      </div>
    </div>


    {/* QUICK LINKS */}
    <div className="md:ml-10">
      <h3 className="text-2xl font-semibold mb-6">
        Quick Links
      </h3>

      <ul className="space-y-4 text-gray-400 text-[17px]">

        <li>
          <a href="#home" className="hover:text-red-500 transition">
  Home
</a>
        </li>

        <li>
         <a href="#projects" className="hover:text-red-500 transition">
  Projects
</a>
        </li>

        <li>
          <a href="#services" className="hover:text-red-500 transition">
  Services
</a>
        </li>

        <li>
          <a href="#contact" className="hover:text-red-500 transition">
  Contact
</a>
        </li>

      </ul>
    </div>


    {/* SERVICES */}
    <div>
      <h3 className="text-2xl font-semibold mb-6">
        Services
      </h3>

      <ul className="space-y-4 text-gray-400 text-[17px]">

        <li>UI/UX Design</li>
        <li>Web Development</li>
        <li>AWS Deployment</li>
        <li>Business Solutions</li>

      </ul>
    </div>


    {/* CONTACT */}
    <div>
      <h3 className="text-2xl font-semibold mb-6">
        Contact
      </h3>

      <ul className="space-y-5 text-gray-400 text-[17px]">

        <li className="flex gap-3">
          <span className="text-red-500"></span>
          aashuranjan68@gmail.com
        </li>

        <li className="flex gap-3">
          <span className="text-red-500"></span>
          +91 9523640797
        </li>

        <li className="flex gap-3">
          <span className="text-red-500"></span>
          Chandigarh University, Punjab
        </li>

      </ul>
    </div>

  </div>



  {/* BOTTOM */}
  <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm relative z-10">

    <p>
      © 2026 Aashu Portfolio. All Rights Reserved.
    </p>

    <p className="mt-4 md:mt-0">
      Designed & Developed by <span className="text-red-500">Aashu</span>
    </p>

  </div>

</footer>

    </div>
  );
}
<div className="hidden"></div>


function App() {
  return (
   <Routes>

  <Route path="/" element={<Home />} />

  <Route
    path="/project/gym"
    element={<GymProject />}
  />

  <Route
    path="/project/product"
    element={<ProductProject />}
  />

  <Route
    path="/product-review-details"
    element={<ProductReviewDetails />}
  />

  <Route
    path="/gym-platform-details"
    element={<GymPlatformDetails />}
  />
  <Route
   path="/plants-ui-details"
  element={<PlantsUIDetails />}
   />

   <Route 
   path="/furniture-ui-details" 
   element={<FurnitureUIDetails />} 
   />

  <Route
    path="/work"
    element={<Work />}
  />

</Routes>
    
  );
}

export default App;
