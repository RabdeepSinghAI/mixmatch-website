'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Music-Centered Discovery',
    description:
      'MixMatch builds its identity around music-inspired discovery, giving the experience a stronger personality while making profile exploration feel more memorable and engaging.',
  },
  {
    title: 'Structured Match Browsing',
    description:
      'Users can switch between organized categories such as All, Date, and Friend, creating a cleaner and more intentional way to explore connections.',
  },
  {
    title: 'Interactive Profile Cards',
    description:
      'The main matching experience emphasizes bold profile presentation, anthem-based identity, and streamlined interaction through a visually rich card layout.',
  },
  {
    title: 'Real-Time Messaging',
    description:
      'Matched users can continue the experience through direct conversation in a focused chat interface designed for clarity, ease of use, and modern presentation.',
  },
  {
    title: 'Profile Management',
    description:
      'Users can preview, manage, and refine their profile through a dedicated account screen that supports customization and profile editing.',
  },
  {
    title: 'Unified Dark Interface',
    description:
      'The application uses a consistent black-and-purple design language with rounded layouts, soft glows, and modern spacing across all major screens.',
  },
];

const processItems = [
  {
    step: '01',
    title: 'Concept Development',
    text:
      'MixMatch began as a senior project focused on building a more immersive and visually cohesive matching experience. The goal was to create an app that felt more intentional, polished, and identity-driven.',
  },
  {
    step: '02',
    title: 'UI and Flow Design',
    text:
      'A major part of development centered on refining the user interface across the home screen, likes system, messaging experience, and profile management flow. The goal was to make the app feel modern, organized, and presentation-ready.',
  },
  {
    step: '03',
    title: 'Feature Refinement',
    text:
      'As development progressed, the team refined the scope of the project to better match the current implementation. This included focusing on the features actively represented in the app and improving the clarity of the overall user flow.',
  },
  {
    step: '04',
    title: 'Current Build',
    text:
      'The current version of MixMatch highlights categorized browsing, interactive profile presentation, real-time messaging, and a consistent visual system that ties the mobile experience together.',
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
      'Focused on interface presentation, visual refinement, and the design and development of the MixMatch project website.',
  },
  {
    name: 'Dean Husain',
    role: 'Team Leader & Backend Development',
    description:
      'Led project coordination, supported implementation planning, and contributed to backend development and overall technical direction.',
  },
  {
    name: 'Keerthi Kapavarapu',
    role: 'Frontend Development',
    description:
      'Contributed to the user experience and supported development across core screens, interaction flow, and interface refinement.',
  },
  {
    name: 'Jennifer Kwon',
    role: 'Frontend Development',
    description:
      'Assisted with app development, collaborative implementation, and continued refinement of the MixMatch user experience.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.18, 0.24, 0.18] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-purple-700/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute right-[-5%] top-[260px] h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 8, 0], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute bottom-0 left-[18%] h-[360px] w-[360px] rounded-full bg-violet-600/10 blur-3xl"
        />
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Mix<span className="text-purple-400">Match</span>
            </h1>
            <p className="text-sm text-white/45">Senior Project Showcase</p>
          </div>

          <div className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#overview" className="transition hover:text-purple-300">Overview</a>
            <a href="#features" className="transition hover:text-purple-300">Features</a>
            <a href="#screens" className="transition hover:text-purple-300">Screens</a>
            <a href="#process" className="transition hover:text-purple-300">Process</a>
            <a href="#stack" className="transition hover:text-purple-300">Stack</a>
            <a href="#team" className="transition hover:text-purple-300">Team</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300"
        >
          Music-Inspired Matching Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl"
        >
          A modern matching app built around
          <span className="text-purple-400"> interaction, style, and identity.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 max-w-4xl text-lg leading-9 text-white/70 md:text-xl"
        >
          MixMatch is a senior project exploring a more immersive matching experience through
          strong profile presentation, structured interaction flows, real-time messaging, and a
          unified black-and-purple mobile interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15 }}
          className="mt-10 flex flex-wrap gap-4"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.25 }}
          className="mt-14 grid max-w-3xl gap-6 md:grid-cols-3"
        >
          {[
            ['4', 'Featured App Screens'],
            ['3', 'Browsing Categories'],
            ['1', 'Unified Design System'],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <p className="text-3xl font-bold text-purple-300">{num}</p>
              <p className="mt-1 text-sm text-white/60">{label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="overview" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Project Overview
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">What is MixMatch?</h3>
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
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/25"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Why MixMatch?
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white">Stronger Visual Identity</h4>
                <p className="mt-2 leading-7 text-white/65">
                  The app uses a distinctive black-and-purple design language to create a more
                  polished and memorable experience.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white">Clearer User Flow</h4>
                <p className="mt-2 leading-7 text-white/65">
                  Likes, discovery, chat, and profile management are separated into focused screens
                  that improve structure and usability.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white">Current Build Showcase</h4>
                <p className="mt-2 leading-7 text-white/65">
                  The website is designed to reflect the app as it currently exists, using updated
                  screenshots and more accurate project details.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Core Features
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">What the app currently emphasizes</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              MixMatch focuses on profile-driven browsing, structured match exploration, direct
              messaging, and a cohesive visual system designed for a more engaging mobile experience.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-white/[0.07]"
              >
                <h4 className="text-2xl font-semibold text-purple-300">{feature.title}</h4>
                <p className="mt-4 leading-7 text-white/65">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="screens" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              App Screens
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">Current interface preview</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              The following screens reflect the current visual direction of MixMatch. The app uses a
              black-and-purple theme, segmented views, rounded layouts, and a consistent mobile-first
              design language across discovery, likes, messaging, and profile management.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {screenshots.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[30px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/25"
              >
                <div className="flex justify-center">
                  <div className="rounded-[32px] border border-white/10 bg-black p-3 shadow-lg shadow-purple-950/30 transition duration-300 hover:scale-[1.02]">
                    <Image
                      src={item.src}
                      alt=""
                      width={350}
                      height={720}
                      className="rounded-[26px]"
                    />
                  </div>
                </div>
                <h4 className="mt-6 text-2xl font-semibold text-purple-300">{item.title}</h4>
                <p className="mt-3 leading-7 text-white/65">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Development Process
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">How the project evolved</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              The project developed through multiple rounds of refinement, balancing design polish,
              implementation clarity, and alignment with the current working app.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {processItems.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
                  Step {item.step}
                </p>
                <h4 className="mt-3 text-2xl font-semibold text-white">{item.title}</h4>
                <p className="mt-4 leading-8 text-white/65">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 rounded-[30px] border border-purple-400/20 bg-gradient-to-r from-purple-900/25 to-fuchsia-900/10 p-8"
          >
            <h4 className="text-2xl font-semibold text-purple-200">Current Focus</h4>
            <p className="mt-4 max-w-4xl leading-8 text-white/70">
              The current focus of the project is refining the main user experience by improving
              match card presentation, strengthening categorized likes views, enhancing the chat
              interface, and making profile management feel more complete and polished.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="stack" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Technology Stack
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">Tools used in development</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              MixMatch is being developed as a mobile application with a strong focus on frontend
              presentation, organized navigation, and modern development workflows.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-purple-200"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="team" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.div {...fadeUp}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Team
            </p>
            <h3 className="text-4xl font-bold md:text-5xl">Project Contributors</h3>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
              MixMatch is the result of collaborative planning, development, refinement, and
              presentation across the senior project team.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition hover:border-purple-400/30"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-lg font-bold text-purple-200">
                  {member.name.charAt(0)}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                  {member.role}
                </p>
                <h4 className="mt-3 text-xl font-semibold text-white">{member.name}</h4>
                <p className="mt-3 min-h-[110px] text-sm leading-7 text-white/60">
                  {member.description}
                </p>
              </motion.div>
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