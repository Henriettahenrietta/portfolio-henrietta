export default function Projects() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Student Management System",
              desc: "Manage students, courses, and departments with a secure backend.",
              tech: "Node.js • MongoDB",
            },
            {
              title: "To-Do List App",
              desc: "A modern and responsive task management app.",
              tech: "React • Tailwind",
            },
            {
              title: "Portfolio Website",
              desc: "Personal portfolio to showcase skills and projects.",
              tech: "React • Tailwind",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-700 mb-4">{p.desc}</p>
              <p className="text-sm text-brownPrimary mb-4">{p.tech}</p>
              <button className="text-white bg-brownPrimary px-4 py-2 rounded hover:bg-brownDark">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
