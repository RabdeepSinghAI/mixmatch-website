export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen overflow-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold text-purple-600">MixMatch</h1>
        <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700">
          Coming Soon
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 mt-16 max-w-6xl mx-auto">

        {/* Left Side */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold leading-tight">
            Match Through <span className="text-purple-600">Music</span>, Not Looks
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            A new way to connect. Build real relationships through shared music taste before anything else.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700">
              Get Started
            </button>
            <button className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="mt-12 md:mt-0 relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20 rounded-full"></div>

          {/* Phone */}
          <div className="relative w-[260px] h-[520px] bg-black rounded-[40px] border shadow-2xl p-3">
            
            {/* Screen */}
            <div className="w-full h-full bg-gradient-to-br from-purple-700 to-purple-900 rounded-[30px] flex flex-col items-center justify-center text-white p-4">
              
              <p className="text-sm opacity-70">Now Playing</p>
              
              <div className="mt-4 w-24 h-24 bg-white/20 rounded-xl"></div>

              <h3 className="mt-4 font-semibold">Your Vibe</h3>
              <p className="text-xs opacity-70">Matching in progress...</p>

              {/* Progress bar (your idea 👀) */}
              <div className="w-full mt-6">
                <div className="h-2 bg-white/20 rounded-full">
                  <div className="h-2 bg-green-400 rounded-full w-[60%]"></div>
                </div>
                <p className="text-xs mt-1 text-center opacity-70">
                  60 Messages — Connection Growing
                </p>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Features */}
      <section className="mt-24 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12">
          Why MixMatch?
        </h3>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="p-6 rounded-2xl border hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-purple-600">
              🎧 Music-Based Matching
            </h4>
            <p className="text-gray-600">
              Discover connections through shared playlists and listening habits.
            </p>
          </div>

          <div className="p-6 rounded-2xl border hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-purple-600">
              🔒 Hidden Profiles
            </h4>
            <p className="text-gray-600">
              Build genuine connections before revealing appearances.
            </p>
          </div>

          <div className="p-6 rounded-2xl border hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-purple-600">
              🤖 AI Icebreakers
            </h4>
            <p className="text-gray-600">
              Start conversations effortlessly with AI-powered prompts.
            </p>
          </div>

          <div className="p-6 rounded-2xl border hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2 text-purple-600">
              📞 Unlock Calls
            </h4>
            <p className="text-gray-600">
              Calling unlocks after meaningful interaction.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MixMatch. Built with purpose.
      </footer>

    </main>
  );
}