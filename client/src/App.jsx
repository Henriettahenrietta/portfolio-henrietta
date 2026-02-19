export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      
      {/* HERO SECTION  */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="flex-1">
          {/* Logo */}
          <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center mb-6">
            <span className="text-amber-400 font-bold text-xl tracking-widest">
              HEN
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-amber-400">Henrietta</span>
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
            I’m a passionate software developer with interest in building
            modern web applications using React, Tailwind CSS, and backend
            technologies. I enjoy turning ideas into functional and
            user-friendly digital experiences.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 rounded-2xl overflow-hidden border border-neutral-700">
            <img
              src="portfolio.jpg"
              alt="Henritta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">
          My <span className="text-amber-400">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Project Card */}
          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-2">
              Student Management System
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              A system for managing students, courses, and results using
              PHP and MySQL.
            </p>
            <span className="text-amber-400 text-sm">
              PHP • MySQL • HTML • CSS
            </span>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-2">
              To-Do List App
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              A simple task management app built with React Hooks.
            </p>
            <span className="text-amber-400 text-sm">
              React • JavaScript
            </span>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-2">
              Portfolio Website
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              A personal portfolio to showcase projects and skills.
            </p>
            <span className="text-amber-400 text-sm">
              React • Tailwind CSS
            </span>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-2">
              MongoDB CRUD App
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              A CRUD application using MongoDB and Node.js.
            </p>
            <span className="text-amber-400 text-sm">
              Node.js • MongoDB
            </span>
          </div>

          <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
            <h3 className="text-xl font-semibold mb-2">
              Authentication System
            </h3>
            <p className="text-neutral-400 text-sm mb-4">
              User authentication with login and registration features.
            </p>
            <span className="text-amber-400 text-sm">
              PHP • MySQL
            </span>
          </div>

        </div>
    

         {/*  CONTACT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Contact <span className="text-amber-400">Me</span>
        </h2>

        <p className="text-neutral-400 text-center mb-12">
          Have a project, question, or just want to say hello?
          Fill the form below and I’ll get back to you.
        </p>

        <form className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 space-y-6">
          
          <div>
            <label className="block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 text-neutral-900 font-semibold py-3 rounded-lg hover:bg-amber-300 transition"
          >
            Send Message
          </button>

        </form>
      </section>
     
           {/* FOOTER,LINKS */}
      <footer className="border-t border-neutral-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Henrietta Isange. All rights reserved.
          </p>

          <div className="flex gap-6 text-neutral-400">
            <a href="https://www.facebook.com/henrietta.isange.9" className="hover:text-amber-400">Facebook</a>
            <a href="https://www.tiktok.com/@henrietta_webdev_girl?_r=1&_t=ZS-943hyUpX5jm" className="hover:text-amber-400">TikTok</a>
            <a href="https://wa.me/237682334700" className="hover:text-amber-400">WhatsApp</a>
            <a href="https://github.com/Henriettahenrietta" className="hover:text-amber-400">GitHub</a>
            <a href="mailto:henriettahenrietta322@gmail.com" className="hover:text-amber-400">Email</a>
          </div>

        </div>
      </footer>




</section>
</div>
    
  );
}


