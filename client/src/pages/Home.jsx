export default function Home() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold text-black">
        Henrietta Isange
      </h1>

      <p className="text-xl mt-4 text-brownPrimary">
        Full Stack Developer | React • Node • MongoDB
      </p>

      <button className="mt-6 px-6 py-3 bg-brownPrimary text-white rounded hover:bg-brownDark transition">
        View my work
      </button>
    </section>
  );
}
