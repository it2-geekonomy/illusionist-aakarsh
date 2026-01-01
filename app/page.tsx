export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="p-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center shadow-2xl">
        <h1 className="text-4xl font-extrabold mb-4">
          Tailwind CSS is Working 🚀
        </h1>
        <p className="text-lg opacity-90">
          Illusionist Aakarsh setup successful
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition-transform">
          Test Button
        </button>
      </div>
    </main>
  );
}
