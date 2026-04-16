'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Music-Centered Discovery',
    description:
      'MixMatch is designed around a music-inspired identity, giving the app a more personal and distinctive feel while making profile exploration more engaging.',
  },
  {
    title: 'Filtered Match Categories',
    description:
      'Users can switch between different match views such as All, Date, and Friend, creating a more organized and flexible browsing experience.',
  },
  {
    title: 'Interactive Profile Cards',
    description:
      'The main matching screen emphasizes profile presentation through visually rich cards, anthem-based identity, and streamlined actions for user engagement.',
  },
  {
    title: 'Real-Time Messaging',
    description:
      'Matched users can move into a dedicated chat interface designed to support direct interaction in a clean, modern conversation layout.',
  },
  {
    title: 'Profile and Account Management',
    description:
      'Users can view, edit, and manage their profile through a centralized account screen that supports personalization and profile refinement.',
  },
  {
    title: 'Unified Dark Interface',
    description:
      'The application uses a consistent black-and-purple design language with rounded layouts, modern spacing, and cohesive visual styling across screens.',
  },
];

const processItems = [
  {
    title: 'Concept Development',
    text:
      'MixMatch began as a senior project aimed at creating a more immersive and visually cohesive matching experience. The project focused on making interaction feel more intentional while giving the app a stronger identity through music-centered presentation.',
  },
  {
    title: 'Interface Design',
    text:
      'A major part of development centered on refining the app’s user interface, including the matching screen, likes system, messaging experience, and profile management flow. The goal was to create a design that felt polished, modern, and easy to navigate.',
  },
  {
    title: 'Feature Refinement',
    text:
      'As development progressed, the team refined the scope of the project to better reflect the current implementation. This included focusing on features actively represented in the codebase and improving the clarity of the overall user flow.',
  },
  {
    title: 'Current Build',
    text:
      'The current version of MixMatch highlights categorized browsing, interactive profile presentation, real-time messaging, and a consistent visual system that ties the full mobile experience together.',
  },
];

const stack = [
  'React Native',
  'Expo',
  'Firebase',
  'TypeScript / JavaScript',
  'GitHub',
  'UI / UX Prototyping',
];

const screenshots = [
  {
    src: '/home.jpeg',
    title: 'Home Matching Screen',
    desc: 'The main discovery view presents users through large profile cards, anthem-based identity, and segmented interaction filters.',
  },
  {
    src: '/likes.jpeg',
    title: 'Likes Screen',
    desc: 'The likes interface organizes connections into All, Date, and Friend categories for a cleaner and more flexible browsing experience.',
  },
  {
    src: '/chat.jpeg',
    title: 'Messaging Screen',
    desc: 'The messaging interface supports direct user conversation in a dark, focused layout designed for simple and modern communication.',
  },
  {
    src: '/profile.jpeg',
    title: 'Profile Screen',
    desc: 'The profile page centralizes account management, profile editing, and personalization in a polished and consistent layout.',
  },
];

const teamMembers = [
  {
    name: 'Rabdeep Singh',
    role: 'Frontend Development & Website Design',
    description:
      'Contributed to the visual direction of the project, interface refinement, and development of the MixMatch website and app presentation.',
  },
  {
    name: 'Dean Husain',
    role: 'Team Leader and Backend Development',
    description:
      '',
  },
  {
    name: 'Keerthi Kapavarapu',
    role: 'Frontend Development',
    description:
      'Contributed to the improvement of the user experience and supported development across core screens and interaction flows.',
  },
  {
    name: 'Jennifer Kwon',
    role: 'Frontend Development',
    description:
      'Assisted with app development, collaborative implementation, and the continued refinement of the MixMatch user experience.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[280px] h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-[20%] h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Mix<span className="text-purple-400">Match</span>
            </h1>
            <p className="text-sm text-white/50">Senior Project Showcase</p>
          </div>

          <div className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#overview" className="transition hover:text-purple-300">
              Overview
            </a>
            <a href="#features" className="transition hover:text-purple-300">
              Features
            </a>
            <a href="#screens" className="transition hover:text-purple-300">
              Screens
            </a>
            <a href="#process" className="transition hover:text-purple-300">
              Process
            </a>
            <a href="#stack" className="transition hover:text-purple-300">
              Stack
            </a>
            <a href="#team" className="transition hover:text-purple-300">
              Team
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
          Music-Inspired Matching Experience
        </p>

        <h2 className="text-6xl font-bold leading-tight md:text-7xl">
          A modern matching app built around
          <span className="text-purple-400"> interaction, style, and identity.</span>
        </h2>

        <p className="mt-8 max-w-4xl text-xl leading-9 text-white/70">
          MixMatch is a senior project exploring a more immersive matching experience
          through strong profile presentation, structured interaction flows, real-time
          messaging, and a unified black-and-purple mobile interface.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#screens"
            className="rounded-full bg-purple-500 px-6 py-3 font-semibold text-white transition hover:bg-purple-400"
          >
            View Screens
          </a>

          <a
            href="#process"
            className="rounded-full border border-purple-400/40 px-6 py-3 font-semibold text-purple-200 transition hover:bg-white/5"
          >
            Development Process
          </a>
        </div>

        <div className="mt-14 grid max-w-xl grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-bold text-purple-300">4</p>
            <p className="mt-1 text-sm text-white/60">Featured App Screens</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl font-bold text-purple-300">1</p>
            <p className="mt-1 text-sm text-white/60">Unified Design System</p>
          </div>
        </div>
      </section>

      <section id="overview" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Project Overview
            </p>
            <h3 className="text-4xl font-bold">What is MixMatch?</h3>
            <p className="mt-6 text-lg leading-8 text-white/70">
              MixMatch is a mobile senior project that explores how a matching platform can feel
              more immersive, intentional, and visually cohesive. Instead of relying only on a
              generic swipe model, the project emphasizes presentation, categorized discovery,
              clean profile layouts, and conversation-oriented interaction.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/70">
              This website serves as a showcase of the project’s current interface, design
              direction, technical structure, and ongoing development progress.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            Core Features
          </p>
          <h3 className="text-4xl font-bold">What the app currently emphasizes</h3>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-purple-400/30"
              >
                <h4 className="text-2xl font-semibold text-purple-300">{feature.title}</h4>
                <p className="mt-4 leading-7 text-white/65">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="screens" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            App Screens
          </p>
          <h3 className="text-4xl font-bold">Current interface preview</h3>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
            The following screens reflect the current visual direction of MixMatch. The app uses a
            black-and-purple theme, segmented views, rounded layouts, and a consistent mobile-first
            design language across discovery, likes, messaging, and profile management.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {screenshots.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/30"
              >
                <div className="flex justify-center">
                  <div className="rounded-[30px] border border-white/10 bg-black p-3">
                    <Image
                      src={item.src}
                      alt=""
                      width={340}
                      height={700}
                      className="rounded-[24px]"
                    />
                  </div>
                </div>
                <h4 className="mt-6 text-2xl font-semibold text-purple-300">{item.title}</h4>
                <p className="mt-3 leading-7 text-white/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            Development Process
          </p>
          <h3 className="text-4xl font-bold">How the project evolved</h3>

          <div className="mt-12 space-y-6">
            {processItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-sm font-bold text-purple-200">
                    {index + 1}
                  </div>
                  <h4 className="text-2xl font-semibold text-purple-300">{item.title}</h4>
                </div>
                <p className="leading-8 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-purple-400/20 bg-gradient-to-r from-purple-900/20 to-fuchsia-900/10 p-8">
            <h4 className="text-2xl font-semibold text-purple-200">Current Focus</h4>
            <p className="mt-4 max-w-4xl leading-8 text-white/70">
              The current focus of the project is refining the main user experience by improving
              match card presentation, strengthening categorized likes views, enhancing the chat
              interface, and making profile management feel more complete and polished.
            </p>
          </div>
        </div>
      </section>

      <section id="stack" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            Technology Stack
          </p>
          <h3 className="text-4xl font-bold">Tools used in development</h3>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
            MixMatch is being developed as a mobile application with a strong focus on frontend
            presentation, organized navigation, and modern development workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-purple-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            Team
          </p>
          <h3 className="text-4xl font-bold">Project Contributors</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 h-14 w-14 rounded-full bg-purple-500/20" />
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-300">
                  {member.role}
                </p>
                <h4 className="mt-3 text-xl font-semibold text-white">{member.name}</h4>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MixMatch Senior Project</p>
          <p>Designed to reflect the current app interface and development direction.</p>
        </div>
      </footer>
    </main>
  );
}