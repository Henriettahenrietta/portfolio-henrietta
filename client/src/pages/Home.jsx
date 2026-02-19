export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black to-brownDark flex items-center">
      <div className="max-w-5xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Henrietta Isange
        </h1>

        <p className="text-xl text-gray-300 mb-6">
          Full Stack Developer — React, Node.js & MongoDB
        </p>

        <button className="bg-brownPrimary px-6 py-3 rounded text-white hover:bg-brownDark transition">
          View My Projects
        </button>
      </div>
    </section>
  );
}
