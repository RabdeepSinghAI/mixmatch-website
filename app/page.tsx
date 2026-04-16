'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Music-Centered Matching',
    description:
      'MixMatch is designed around music-inspired discovery, where profile presentation, preferences, and interaction flow feel more personal and intentional.',
  },
  {
    title: 'Filtered Match Views',
    description:
      'Users can explore different match categories such as All, Date, and Friend, making the experience feel more organized and tailored.',
  },
  {
    title: 'Engaging Profile Cards',
    description:
      'The home experience presents visually rich profile cards with anthem-based identity, compatibility cues, and clean call-to-action controls.',
  },
  {
    title: 'Real-Time Messaging',
    description:
      'Matched users can move into a dedicated chat experience with a modern conversation layout that keeps interaction simple and direct.',
  },
  {
    title: 'Profile Management',
    description:
      'Users can manage their active profile, preview how they appear, edit details, and personalize their account through settings and anthem choices.',
  },
  {
    title: 'Consistent Mobile UI',
    description:
      'The app uses a unified dark theme with purple accents, rounded layouts, and simplified navigation to create a polished mobile experience.',
  },
];

const processItems = [
  {
    title: 'Concept and Direction',
    text:
      'MixMatch began as a senior project centered on creating a modern matching experience with a stronger emphasis on identity, interaction, and presentation.',
  },
  {
    title: 'UI and Flow Development',
    text:
      'A large part of development focused on refining the mobile interface, navigation flow, profile presentation, likes system, and messaging layout.',
  },
  {
    title: 'Iteration and Scope Refinement',
    text:
      'As the project evolved, the team refined the feature set to better match the current build, removing outdated ideas and focusing on what is actively implemented in the app.',
  },
  {
    title: 'Current State',
    text:
      'The current version highlights the core matching interface, filtered likes views, user messaging, and account/profile management in a consistent visual system.',
  },
];

const stack = [
  'React Native',
  'Expo',
  'Firebase',
  'TypeScript / JavaScript',
  'GitHub',
  'Figma / UI Planning',
];

const screenshots = [
  {
    src: '/home.jpeg',
    title: 'Home Matching Screen',
    desc: 'Main discovery view with anthem-based profile card and segmented matching filters.',
  },
  {
    src: '/likes.jpeg',
    title: 'Likes Screen',
    desc: 'Grid-based likes interface with All, Date, and Friend filters for organized browsing.',
  },
  {
    src: '/chat.jpeg',
    title: 'Messaging Screen',
    desc: 'Real-time conversation layout for matched users with a clean dark interface.',
  },
  {
    src: '/profile.jpeg',
    title: 'Profile Screen',
    desc: 'Account management page for previewing, editing, and customizing user profile details.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute right-[-5%] top-[300px] h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-3xl" />
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

  <h2 className="text-6xl font-bold leading-tight">
    A modern matching app built around
    <span className="text-purple-400"> interaction, style, and identity.</span>
  </h2>

  <p className="mt-8 text-xl leading-9 text-white/70">
    MixMatch is a senior project focused on building a visually engaging
    mobile matching experience. The app emphasizes strong profile
    presentation, organized interaction flows, music-centered identity,
    real-time chat, and a dark modern interface designed for a smoother
    user experience.
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

  <div className="mt-14 grid grid-cols-2 gap-6 max-w-xl">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-3xl font-bold text-purple-300">4</p>
      <p className="mt-1 text-sm text-white/60">
        Core UI Screens Highlighted
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-3xl font-bold text-purple-300">3</p>
      <p className="mt-1 text-sm text-white/60">
        Main Interaction Modes
      </p>
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
              more immersive, intentional, and visually cohesive. Rather than relying only on a
              generic swipe model, the project focuses on presentation, categorized user discovery,
              clean profile layouts, and conversation-oriented interaction.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/70">
              The website documents the current state of the project by showing the interface,
              describing the core functionality, and summarizing how the application has evolved
              through design and implementation.
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
            black and purple theme, rounded layouts, segmented views, and a consistent mobile-first
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
                      alt={item.title}
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
              The current focus of the project is refining the main user experience: improving the
              presentation of match cards, supporting categorized likes views, strengthening the
              chat experience, and making the profile section feel more complete and polished. This
              website mirrors that direction by documenting the active UI rather than outdated
              project ideas.
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
            MixMatch is being built as a mobile project with a focus on frontend experience,
            structured navigation, and modern app development workflows.
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
            {['Rabdeep Singh', 'Dean Husain', 'Keerthi Kapavarapu', 'Jennifer Kwon'].map((name) => (
              <div
                key={name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 h-14 w-14 rounded-full bg-purple-500/20" />
                <h4 className="text-xl font-semibold text-white">{name}</h4>
                <p className="mt-2 text-sm leading-6 text-white/55">
                  Senior project team member contributing to the design, development, and
                  refinement of the MixMatch app experience.
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