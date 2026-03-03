"use client";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi20Qg8Yh4gQ-zO-DTIve4qZpIeiTGjq52cnj6DPgXN15SZ5KWHY9-VYe3RNq-V31qsd0UA0am9xTjf41TZs5kRCYVg_yUtLRXg7d_oAY72Q7sghI_8rKboT82xLNX6oo9r98WazGXTg7WpodtH0VqZqoW42QsTM-xZJ3CMai37iepvSD38vlKN4SoVyOw/s1280/photo_2026-03-01_14-53-36.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">

            {/* Logo */}
            <a
              href="https://www.rialo.io/"
              target="_blank"
              className="flex items-center gap-3 font-bold text-2xl hover:opacity-80 transition"
            >
              <img
                src="https://pbs.twimg.com/profile_images/1950265537784926208/qbjSWMDP_400x400.jpg"
                alt="Rialo Logo"
                className="w-10 h-10 rounded-xl"
              />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Rialo
              </span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4 ml-4">

              <a href="https://x.com/RialoHQ" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg"
                  alt="X"
                  className="w-5 h-5 invert hover:scale-110 hover:opacity-80 transition"
                />
              </a>

              <a href="https://discord.com/invite/RialoProtocol" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg"
                  alt="Discord"
                  className="w-5 h-5 invert hover:scale-110 hover:opacity-80 transition"
                />
              </a>

              <a href="https://t.me/rialoprotocol" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg"
                  alt="Telegram"
                  className="w-5 h-5 invert hover:scale-110 hover:opacity-80 transition"
                />
              </a>

            </div>

          </div>

          {/* RIGHT MENU */}
          <div className="hidden md:flex gap-8 text-sm tracking-widest text-gray-300">
            <a href="/" className="hover:text-cyan-400 transition">HOME</a>
            <a href="https://www.rialo.io/docs" target="_blank" className="hover:text-cyan-400 transition">DOCS</a>
            <a href="https://www.rialo.io/blog" target="_blank" className="hover:text-cyan-400 transition">BLOG</a>
            <a href="https://learn.rialo.io/" target="_blank" className="hover:text-cyan-400 transition">LEARN</a>
            <a href="https://www.rialo.io/news" target="_blank" className="hover:text-cyan-400 transition">NEWS</a>
          </div>

        </div>
      </nav>

      {/* HERO GLASS PANEL */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="w-full max-w-4xl bg-black/30 backdrop-blur-md border border-white/10 rounded-3xl px-12 py-16 text-center shadow-[0_0_50px_rgba(0,255,255,0.06)]">

          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]">
            RIALO ECOSYSTEM
          </h1>

          <p className="mt-6 max-w-xl text-gray-300 mx-auto">
            Play for fun or go fully on-chain and test your luck
          </p>

          {/* BUTTON GRID */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

            {[
              {
                title: "🎮 Launch Drop Bomb",
                link: "https://rialo-drops.vercel.app/"
              },
              {
                title: "🎰 Launch CoinFlip",
                link: "https://coinflip-rialo.vercel.app/"
              },
              {
                title: "🎲 Lucky Dice",
                link: "https://rialo-lucckydice.vercel.app/"
              },
              {
                title: "🎰 Lucky Slots",
                link: "https://rialoluckkyslots.vercel.app/"
              }
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                className="group relative px-8 py-5 rounded-2xl border border-white/10 bg-black/40 hover:bg-black/60 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span className="relative z-10 text-lg font-semibold">
                  {item.title}
                </span>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"></div>
              </a>
            ))}

          </div>

        </div>

      </div>

      {/* FOOTER */}
      <footer className="absolute bottom-6 w-full text-center text-gray-600 text-sm z-10">
        Created By Juniorrr1945 X Sza
      </footer>

    </div>
  );
}
