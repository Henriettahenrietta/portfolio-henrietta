export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-black">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project 1 */}
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">
            Student Management System
          </h3>
          <p className="text-gray-700 mb-4">
            A system to manage students, courses, and departments using
            MongoDB and Node.js.
          </p>
          <p className="text-sm text-brownPrimary mb-4">
            Tech: Node.js, MongoDB
          </p>
          <a
            href="#"
            className="text-white bg-brownPrimary px-4 py-2 rounded hover:bg-brownDark"
          >
            View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">
            To-Do List App
          </h3>
          <p className="text-gray-700 mb-4">
            A responsive to-do list application built with React hooks.
          </p>
          <p className="text-sm text-brownPrimary mb-4">
            Tech: React, Tailwind CSS
          </p>
          <a
            href="#"
            className="text-white bg-brownPrimary px-4 py-2 rounded hover:bg-brownDark"
          >
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">
            Portfolio Website
          </h3>
          <p className="text-gray-700 mb-4">
            A personal portfolio website showcasing projects and contact
            information.
          </p>
          <p className="text-sm text-brownPrimary mb-4">
            Tech: React, Tailwind CSS
          </p>
          <a
            href="#"
            className="text-white bg-brownPrimary px-4 py-2 rounded hover:bg-brownDark"
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}
