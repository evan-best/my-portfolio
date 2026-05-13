import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon, Sun03Icon, Moon02Icon, Menu01Icon, Cancel01Icon } from '@hugeicons/core-free-icons'
import evan from './assets/evan.png'

const spring = { type: 'spring', duration: 0.6, bounce: 0 }

const navItems = [
  { path: '/work', label: 'Work' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const experienceItems = [
  {
    company: 'Weevva',
    role: 'Frontend Development Lead',
    dates: '2025 → now',
  },
  {
    company: 'Weevva',
    role: 'Mobile Application Developer',
    dates: '2024 → 2025',
  },
  {
    company: 'Memorial University of Newfoundland',
    role: 'Computer Science Student',
    dates: '2022 → now',
  },
]

const interestItems = [
  {
    name: 'Mobbin',
    blurb: 'Design inspiration.',
    image: '/interests/mobbin.webp',
    href: 'https://mobbin.com',
  },
  {
    name: 'Hugeicons',
    blurb: 'Icons I usually use.',
    image: '/interests/hugeicons.webp',
    href: 'https://hugeicons.com',
  },
  {
    name: 'Apple',
    blurb: 'Cool products.',
    image: '/interests/apple.webp',
    href: 'https://apple.com',
  },
  {
    name: 'Linear',
    blurb: 'Great web design.',
    image: '/interests/linear.webp',
    href: 'https://linear.app',
  },
]

const contactItems = [
  {
    label: 'Mail',
    value: 'evan.best4@gmail.com',
    href: 'mailto:evan.best4@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'evan-best',
    href: 'https://linkedin.com/in/evan-best',
  },
  {
    label: 'GitHub',
    value: '@evan-best',
    href: 'https://github.com/evan-best',
  },
  {
    label: 'Threads',
    value: '@evan_best4',
    href: 'https://www.threads.net/@evan_best4',
  },
]

const audinoteScreenshots = [
  '/audinote_1-portrait.webp',
  '/audinote_2-portrait.webp',
  '/audinote_3-portrait.webp',
]

const medalertScreenshots = [
  '/medalert_1-portrait.webp',
  '/medalert_2-portrait.webp',
  '/medalert_3-portrait.webp',
]

const techStack = [
  { name: 'Swift', category: 'Programming language', icon: '/swift.webp' },
  { name: 'SwiftUI', category: 'Interface framework', icon: '/swiftui.webp' },
  { name: 'SwiftData', category: 'Persistence', icon: '/swiftdata.webp' },
  { name: 'CloudKit', category: 'Sync and storage', icon: '/icloud.webp', rounded: true },
  { name: 'Xcode', category: 'Development environment', icon: '/xcode.webp' },
  { name: 'TypeScript', category: 'Programming language', icon: '/ts.webp', rounded: true, compact: true },
  { name: 'JavaScript', category: 'Programming language', icon: '/js.webp', rounded: true, compact: true },
]

function getCurrentPage() {
  if (typeof window === 'undefined') {
    return '/work'
  }

  return navItems.some((item) => item.path === window.location.pathname)
    ? window.location.pathname
    : '/work'
}

function SectionHeading({ id, children }) {
  if (!id) {
    return (
      <h2 className="text-[14px] font-medium leading-tight tracking-[-0.005em] text-fg-muted">
        {children}
      </h2>
    )
  }

  return (
    <h2
      id={id}
      className="group relative w-fit scroll-mt-24 text-[14px] font-medium leading-tight tracking-[-0.005em] text-fg-muted"
    >
      <a
        href={`#${id}`}
        aria-label={`Link to ${children}`}
        className="no-underline hover:text-fg-default"
      >
        <span
          aria-hidden="true"
          className="absolute right-full top-0 mr-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
        >
          #
        </span>
        {children}
      </a>
    </h2>
  )
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex size-11 cursor-pointer items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg-default"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
          className="flex items-center justify-center"
        >
          <HugeiconsIcon
            icon={isDark ? Sun03Icon : Moon02Icon}
            size={18}
            color="currentColor"
            strokeWidth={2.5}
          />
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

function ArrowUpRightIcon() {
  return (
    <HugeiconsIcon
      icon={ArrowUpRight01Icon}
      size={16}
      color="currentColor"
      strokeWidth={2}
    />
  )
}

function BlurbLink({ href, children, external = false, muted = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-start font-medium leading-none underline decoration-fg-soft underline-offset-[3px] hover:decoration-fg-default ${muted ? 'text-fg-muted hover:text-fg-default' : ''}`}
    >
      <span>{children}</span>
      {external && (
        <HugeiconsIcon
          icon={ArrowUpRight01Icon}
          size={10}
          color="currentColor"
          strokeWidth={2}
          className="-mt-0.5 shrink-0"
        />
      )}
    </a>
  )
}

function TechStackSection() {
  return (
    <section className="py-10">
      <SectionHeading id="tech-stack">Tech Stack</SectionHeading>
      <ul className="mt-5 space-y-2">
        {techStack.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-4 rounded-xl bg-bg-card px-4 py-3"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center">
                <img
                  src={item.icon}
                  alt=""
                  width={192}
                  height={192}
                  loading="lazy"
                  decoding="async"
                  className={`${item.compact ? 'size-10' : 'size-11'} ${item.rounded ? 'rounded-md' : ''} object-contain [image-rendering:-webkit-optimize-contrast]`}
                />
              </span>
              <span className="truncate text-[16px] font-medium leading-none text-fg-default">
                {item.name}
              </span>
            </div>
            <span className="shrink-0 text-[14px] font-medium text-fg-muted">
              {item.category}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function WorkPage() {
  return (
    <div>
      <section className="pt-28 pb-24">
        <div className="mb-2 flex items-center">
          <SectionHeading>Currently working on</SectionHeading>
        </div>
        <h1 className="max-w-3xl text-[24px] font-semibold leading-tight tracking-[-0.02em] text-fg-default lg:text-[26px]">
          Tenant verification tools at Weevva
        </h1>
      </section>

      <section className="py-10">
        <p>
          I'm a developer at{' '}
          <BlurbLink href="https://www.weevva.com" external>
            Weevva
          </BlurbLink>
          , where I build mobile and web experiences for tenant verification
          across Canada, covering identity, income, rental history, and
          fraud checks end to end.
        </p>
        <p className="mt-4">
          When I'm not at work I'm usually building something on my own. Right
          now that's{' '}
          <BlurbLink href="#audinote">AudiNote</BlurbLink>
          , an audio journaling app with live transcription and timestamped
          playback, and{' '}
          <BlurbLink href="#medalert">MedAlert</BlurbLink>
          , a medication tracker built around Canadian drug data.
        </p>
      </section>

      <section className="py-10">
        <SectionHeading id="experience">Experience</SectionHeading>

        <ul className="mt-5 space-y-2">
          {experienceItems.map((item) => (
            <li
              key={`${item.company}-${item.role}`}
              className="flex flex-col gap-2 rounded-xl bg-bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col leading-[1.3]">
                <span className="text-[16px] font-semibold tracking-[-0.005em] text-fg-default">
                  {item.company}
                </span>
                <span className="text-[14px] font-normal text-fg-muted">
                  {item.role}
                </span>
              </div>
              <span className="shrink-0 text-[14px] font-normal tabular-nums text-fg-muted">
                {item.dates}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-10">
        <SectionHeading id="projects">Projects</SectionHeading>
        <ul className="mt-5 space-y-8">
          <li id="audinote" className="scroll-mt-24 space-y-4">
            <div
              aria-label="AudiNote project preview"
              className="overflow-hidden rounded-xl bg-bg-card px-6 py-8"
            >
              <div className="grid grid-cols-3 items-end gap-4">
                {audinoteScreenshots.map((screenshot, index) => (
                  <img
                    key={screenshot}
                    src={screenshot}
                    alt={`AudiNote app screenshot ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-fg-default">AudiNote</span>
                <BlurbLink href="https://github.com/evan-best/AudiNote" external muted>
                  GitHub
                </BlurbLink>
              </div>
              <p className="text-fg-muted">
                An audio journaling app with live transcription via the
                Speech framework and timestamped playback through
                AVFoundation, with entries persisted in SwiftData and synced
                across devices via CloudKit. iOS, Swift, SwiftUI.
              </p>
            </div>
          </li>
          <li id="medalert" className="scroll-mt-24 space-y-4">
            <div
              aria-label="MedAlert project preview"
              className="overflow-hidden rounded-xl bg-bg-card px-6 py-8"
            >
              <div className="grid grid-cols-3 items-end gap-4">
                {medalertScreenshots.map((screenshot, index) => (
                  <img
                    key={screenshot}
                    src={screenshot}
                    alt={`MedAlert app screenshot ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-fg-default">MedAlert</span>
                <BlurbLink href="https://github.com/evan-best/MedAlert" external muted>
                  GitHub
                </BlurbLink>
              </div>
              <p className="text-fg-muted">
                A medication tracker with local reminders via
                UserNotifications, built around a cleaned-up local SQLite
                copy of the Canadian government drug database. iOS, Swift,
                SwiftUI.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <TechStackSection />

      <motion.footer
        className="mt-24 flex flex-col items-end gap-2 pt-6 text-[13px] font-medium tracking-[-0.005em] text-fg-muted"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.2 }}
      >
        <span
          className="text-[20px] leading-none text-fg-default"
          style={{ fontFamily: '"Caveat", cursive' }}
        >
          thanks for stopping by !
        </span>
        <span
          aria-hidden="true"
          className="pr-3 pt-4 text-[22px] leading-none text-fg-default"
          style={{ fontFamily: '"Caveat", cursive' }}
        >
          - EB
        </span>
      </motion.footer>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <section className="pt-28 pb-24">
        <div className="mb-2 flex items-center">
          <SectionHeading>About me</SectionHeading>
        </div>
        <h1 className="max-w-3xl text-[24px] font-semibold leading-tight tracking-[-0.02em] text-fg-default lg:text-[26px]">
          Developer from St. John's, Newfoundland
        </h1>
      </section>

      <section className="py-10">
        <p>
          I've been obsessed with computers and tech for as long as I can
          remember. That curiosity turned into a Computer Science degree at{' '}
          <BlurbLink
            href="https://www.mun.ca"
            external
          >
            Memorial University
          </BlurbLink>
          {' '}and a job at{' '}
          <BlurbLink href="https://www.weevva.com" external>
            Weevva
          </BlurbLink>
          , where I lead frontend development.
        </p>
        <p className="mt-4">
          Outside of work I'm building iOS apps like{' '}
          <BlurbLink href="/work#audinote">AudiNote</BlurbLink>
          {' '}and{' '}
          <BlurbLink href="/work#medalert">MedAlert</BlurbLink>
          , watching the Habs, or playing CS2 and Rocket League.
        </p>
      </section>

      <section className="py-10">
        <SectionHeading id="ai">How I use AI</SectionHeading>
        <p className="mt-5">
          I use{' '}
          <BlurbLink href="https://claude.com/claude-code" external>
            Claude Code
          </BlurbLink>
          {' '}and{' '}
          <BlurbLink href="https://github.com/openai/codex" external>
            Codex
          </BlurbLink>
          {' '}mostly for frontend work, building interfaces that feel alive
          and minimal, and to get through the tedious parts like grids and
          spacing. One piece of writing I keep coming back to is{' '}
          <BlurbLink
            href="https://jakub.kr/writing/details-that-make-interfaces-feel-better"
            external
          >
            Details that make interfaces feel better
          </BlurbLink>
          , which pushes me past what I'd get to on my own.
        </p>
        <p className="mt-4">
          Working this way lets me ship really fast without compromising on
          quality.
        </p>
      </section>

      <section className="py-10">
        <SectionHeading id="interests">Software I admire</SectionHeading>
        <ul className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {interestItems.map((item) => (
            <li key={item.name} className="space-y-4">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.name}`}
                className="block overflow-hidden rounded-xl bg-bg-muted ring-1 ring-fg-default/10"
              >
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="aspect-[1.91/1] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </a>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-fg-default">{item.name}</span>
                <p className="text-fg-muted">{item.blurb}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

    </div>
  )
}

function ContactPage() {
  return (
    <div>
      <section className="pt-28 pb-24">
        <h1 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-fg-default lg:text-[28px]">
          Get in touch
        </h1>
      </section>

      <section className="py-10">
        <p>
          Feel free to reach out anytime at{' '}
          <a
            href="mailto:evan.best4@gmail.com"
            className="underline decoration-fg-soft underline-offset-[3px] hover:decoration-fg-default"
          >
            evan.best4@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="py-10">
        <SectionHeading id="contact-list">Contact</SectionHeading>
        <ul className="mt-5 space-y-1">
          {contactItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between gap-4 rounded-xl bg-bg-card p-4 text-fg-default no-underline transition-colors hover:bg-bg-muted"
              >
                <span className="text-[16px] font-normal">{item.label}</span>
                <span className="flex min-w-0 items-center gap-1 text-[14px] font-medium text-fg-muted">
                  <span className="truncate">{item.value}</span>
                  <ArrowUpRightIcon />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function Page({ page }) {
  if (page === '/about') {
    return <AboutPage />
  }

  if (page === '/contact') {
    return <ContactPage />
  }

  return <WorkPage />
}

function App() {
  const [page, setPage] = useState(getCurrentPage)
  const [theme, setTheme] = useState(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    const handlePopState = () => setPage(getCurrentPage())

    window.addEventListener('popstate', handlePopState)

    if (!navItems.some((item) => item.path === window.location.pathname)) {
      window.history.replaceState(null, '', '/work')
    }

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openPage = (event, nextPage) => {
    event.preventDefault()
    setMenuOpen(false)

    if (nextPage !== page) {
      window.history.pushState(null, '', nextPage)
      setPage(nextPage)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="mx-auto w-full max-w-[60em] p-5 md:p-[60px] lg:p-20">
      <div className="mb-3 flex justify-end">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>
      <header className="mb-4 flex items-center justify-between">
        <motion.a
          href="/work"
          onClick={(event) => openPage(event, '/work')}
          className="group flex items-center"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
        >
          <div
            className="mr-3 size-10 overflow-hidden rounded-full"
            style={{ boxShadow: 'var(--shadow-avatar)' }}
          >
            <motion.img
              src={evan}
              alt="My headshot"
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
              transition={spring}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold tracking-[-0.01em] text-fg-default">
              Evan Best
            </span>
            <span className="-mt-1 text-[14px] font-medium tracking-[-0.005em] text-fg-muted text-pretty">
              iOS Developer
            </span>
          </div>
        </motion.a>

        <nav className="hidden items-center gap-1 xs:flex">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.path}
              aria-current={page === item.path ? 'page' : undefined}
              className="rounded-full px-4 py-3 text-[15px] font-medium leading-tight tracking-[-0.005em] transition-colors hover:bg-bg-subtle aria-[current=page]:bg-bg-subtle"
              onClick={(event) => openPage(event, item.path)}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 + i * 0.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <motion.button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex size-11 cursor-pointer items-center justify-center rounded-full text-fg-default transition-colors hover:bg-bg-subtle xs:hidden"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.1 }}
          whileTap={{ scale: 0.94 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ type: 'spring', duration: 0.2, bounce: 0.2 }}
              className="flex items-center justify-center"
            >
              <HugeiconsIcon
                icon={menuOpen ? Cancel01Icon : Menu01Icon}
                size={22}
                color="currentColor"
                strokeWidth={2}
              />
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </header>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className="overflow-hidden xs:hidden"
          >
            <ul className="mb-4 flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    aria-current={page === item.path ? 'page' : undefined}
                    onClick={(event) => openPage(event, item.path)}
                    className="block rounded-xl px-4 py-3 text-[15px] font-medium leading-tight tracking-[-0.005em] transition-colors hover:bg-bg-subtle aria-[current=page]:bg-bg-subtle"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.main
        key={page}
        className="text-[16px] leading-[1.6] tracking-[-0.005em] text-fg-default"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.08 }}
      >
        <Page page={page} />
      </motion.main>
    </div>
  )
}

export default App
