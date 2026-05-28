"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Briefcase,
  ChevronUp,
  Database,
  Download,
  FileSpreadsheet,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  PieChart,
  Send,
  Sun,
  X,
} from "lucide-react";

const candidate = {
  name: "Vivek Lanke",
  title: "Aspiring Data Analyst",
  degree: "BCA in Artificial Intelligence & Machine Learning",
  graduation: "2023 - 2026",
  university: "D.Y. Patil University, Pune",
  location: "India",
  email: "viveklanke100@gmail.com",
  linkedin: "https://linkedin.com/in/vivek-lanke-87a1a628a",
  github: "https://github.com/viveklanke007",
  resume: "/resume.pdf",
};

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const statCards = [
  "3+ Analytics Projects",
  "Power BI Dashboards",
  "Python & SQL",
  "Data Visualization Enthusiast",
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "SQL"],
    icon: Database,
  },
  {
    title: "Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib"],
    icon: FileSpreadsheet,
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Excel Dashboards", "Data Storytelling"],
    icon: PieChart,
  },
  {
    title: "Data Analytics",
    skills: ["EDA", "Data Cleaning", "Business Reporting", "Customer Analytics"],
    icon: Briefcase,
  },
  {
    title: "Tools",
    skills: ["Jupyter Notebook", "Git", "GitHub"],
    icon: Github,
  },
];

const projects = [
  {
    title: "Tata Data Visualization Virtual Experience",
    features: [
      "Interactive Power BI dashboards",
      "Revenue trend analysis",
      "Customer insights",
      "Business storytelling",
    ],
    technologies: ["Power BI", "Excel"],
    visual: "sales",
  },
  {
    title: "Quantium Data Analytics Project",
    features: [
      "Customer segmentation",
      "Sales trend analysis",
      "Trial vs Control analysis",
      "Business recommendations",
    ],
    technologies: ["Python", "Pandas", "Matplotlib"],
    visual: "churn",
  },
  {
    title: "Sales Data Analysis Dashboard",
    features: [
      "Sales trend analysis",
      "Revenue growth insights",
      "Customer behavior analysis",
      "Data visualization dashboard",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Excel"],
    visual: "student",
  },
];

const certifications = [
  {
    title: "Tata Data Visualization - Forage",
    image: "/tata.png",
  },
  {
    title: "Quantium Data Analytics - Forage",
    image: "/quantium.png",
  },
  {
    title: "British Airways Data Science - Forage",
    image: "/British.png",
  },
];

const achievements = [
  "Built real-world analytics dashboards",
  "Performed EDA using Python",
  "Created business reports and visualizations",
  "Worked on customer analytics projects",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const SectionHeading = ({ eyebrow, title, description }) => (
  <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    )}
  </motion.div>
);

const ProjectVisual = ({ type }) => {
  const barSets = {
    sales: [52, 78, 44, 88, 64, 96],
    netflix: [72, 38, 84, 55, 91, 62],
    churn: [40, 67, 35, 79, 58, 73],
    student: [64, 82, 51, 76, 89, 57],
    recommendation: [45, 66, 92, 71, 53, 84],
    vision: [86, 62, 77, 94, 69, 58],
  };

  const colors = {
    sales: "from-blue-500 to-cyan-400",
    netflix: "from-red-500 to-blue-500",
    churn: "from-slate-900 to-blue-500",
    student: "from-emerald-500 to-blue-500",
    recommendation: "from-violet-500 to-blue-500",
    vision: "from-amber-500 to-blue-500",
  };

  return (
    <div className="relative h-48 overflow-hidden border-b border-slate-300 bg-slate-50 p-5 text-slate-950 dark:border-white/10 dark:bg-slate-950 dark:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(14,165,233,0.08))] dark:bg-[linear-gradient(135deg,rgba(59,130,246,0.24),rgba(255,255,255,0.04))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.16)_1px,transparent_0)] bg-[length:22px_22px] opacity-35 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] dark:opacity-40" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-white">
            Analytics Preview
          </span>
          <PieChart size={24} className="text-blue-700 dark:text-blue-200" />
        </div>
        <div className="flex h-24 items-end gap-2">
          {barSets[type].map((height, index) => (
            <motion.span
              key={`${type}-${height}-${index}`}
              initial={{ height: 8 }}
              whileInView={{ height }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className={`w-full rounded-t-md bg-gradient-to-t ${colors[type]}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-300 bg-white/85 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <Image
            src="/vivek-avatar.png"
            alt="Vivek Lanke"
            width={44}
            height={44}
            className="rounded-xl border border-slate-300 bg-white object-cover dark:border-white/10"
            priority
          />
          <div>
            <p className="text-base font-bold text-slate-950 dark:text-white">
              {candidate.name}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Data Analyst Portfolio
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:border-blue-400 hover:text-blue-700 dark:border-white/10 dark:bg-transparent dark:text-slate-200 dark:hover:border-blue-400"
            aria-label="Toggle dark and light mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href={candidate.resume}
            download
            className="hidden items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
          >
            <Download size={16} />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition dark:border-white/10 dark:bg-transparent dark:text-slate-200 lg:hidden"
            aria-label="Open navigation menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-300 bg-white px-5 py-5 dark:border-white/10 dark:bg-slate-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-base font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href={candidate.resume}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  const roles = useMemo(
    () => ["Data Analyst", "Junior Data Scientist", "Business Analyst"],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");

  useEffect(() => {
    const fullText = roles[roleIndex];
    if (typedRole.length < fullText.length) {
      const timer = setTimeout(
        () => setTypedRole(fullText.slice(0, typedRole.length + 1)),
        70
      );
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setTypedRole("");
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 1350);

    return () => clearTimeout(timer);
  }, [roleIndex, roles, typedRole]);

  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(37,99,235,0.10),transparent_38%,rgba(14,165,233,0.08))] dark:bg-[linear-gradient(120deg,rgba(37,99,235,0.20),transparent_38%,rgba(14,165,233,0.10))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] dark:bg-[size:44px_44px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/50 bg-white/80 px-3 py-1 text-sm font-semibold text-blue-700 shadow-sm dark:border-cyan-300/20 dark:bg-slate-800 dark:text-cyan-200">
            <Briefcase size={15} />
            Turning Data into Business Insights
          </div>

          <h1 className="mt-7 text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Vivek Lanke
          </h1>

          <p className="mt-5 min-h-8 text-xl font-semibold text-blue-700 dark:text-blue-300">
            Target role: {typedRole}
            <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 bg-blue-600 dark:bg-blue-300" />
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            Aspiring Data Analyst skilled in Python, SQL, Excel, and Power BI.
            Passionate about transforming raw data into meaningful business
            insights through analytics and visualization.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              View Projects
              <ArrowRight size={17} />
            </a>
            <a
              href={candidate.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:border-blue-300"
            >
              <Download size={17} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 dark:border-white/10 dark:text-white dark:hover:border-blue-300"
            >
              <Mail size={17} />
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {statCards.map((stat) => (
              <div
                key={stat}
                className="rounded-xl border border-slate-300 bg-white/85 p-4 text-sm font-bold text-slate-900 shadow-sm dark:border-white/10 dark:bg-slate-800 dark:text-white"
              >
                {stat}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          className="mx-auto w-full max-w-lg"
        >
          <div className="rounded-2xl border border-slate-300 bg-white shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:bg-slate-900 dark:shadow-blue-950/20">
            <div className="border-b border-slate-300 p-5 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                    Dashboard Snapshot
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                    Insights Workspace
                  </h2>
                </div>
                <Database className="text-blue-600 dark:text-blue-300" size={28} />
              </div>
            </div>

            <div className="grid gap-4 p-5">
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Revenue", "24.8L", "+18%"],
                  ["Retention", "82%", "+9%"],
                  ["Forecast", "91%", "accuracy"],
                ].map(([label, value, change]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-slate-300 bg-slate-50 p-4 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-blue-600 dark:text-blue-300">
                      {change}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-slate-300 bg-slate-50 p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Monthly Analysis
                  </p>
                  <FileSpreadsheet size={20} className="text-blue-600" />
                </div>
                <div className="flex h-36 items-end gap-3">
                  {[42, 58, 45, 75, 61, 90, 72, 96].map((height, index) => (
                    <motion.span
                      key={height + index}
                      initial={{ height: 12 }}
                      animate={{ height }}
                      transition={{ duration: 0.7, delay: index * 0.08 }}
                      className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-300"
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "Excel", "Power BI", "SQL", "ML"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-400/10 dark:text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="bg-white py-24 dark:bg-slate-900">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
      <motion.div {...fadeUp}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-300">
          About Me
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white md:text-4xl">
          BCA AI/ML student focused on analytics and business intelligence.
        </h2>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-300 bg-slate-50 p-5 shadow-sm dark:border-white/10 dark:bg-slate-800">
          <div className="relative mx-auto aspect-square max-w-[320px] overflow-hidden rounded-2xl border border-slate-300 bg-white dark:border-white/10 dark:bg-slate-900">
            <Image
              src="/vivek-avatar.png"
              alt="Vivek Lanke profile avatar"
              fill
              sizes="(max-width: 1024px) 320px, 360px"
              className="object-cover"
            />
          </div>
          <div className="mt-5 text-center">
            <p className="text-xl font-bold text-slate-950 dark:text-white">
              {candidate.name}
            </p>
            <p className="mt-1 text-sm font-semibold text-blue-700 dark:text-cyan-200">
              {candidate.title}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.08 }}>
        <p className="text-lg leading-9 text-slate-700 dark:text-slate-300">
          I am a BCA student specializing in Artificial Intelligence & Machine
          Learning with a strong interest in Data Analytics and Business
          Intelligence.
        </p>

        <p className="mt-5 text-lg leading-9 text-slate-700 dark:text-slate-300">
          I enjoy working with datasets, identifying trends, performing
          exploratory data analysis, and building dashboards that help
          businesses make data-driven decisions.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-800">
            <GraduationCap className="text-blue-600 dark:text-blue-300" />
            <p className="mt-4 font-bold text-slate-950 dark:text-white">
              Education
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {candidate.degree}
            </p>
          </div>
          <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-800">
            <MapPin className="text-blue-600 dark:text-blue-300" />
            <p className="mt-4 font-bold text-slate-950 dark:text-white">
              Location
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {candidate.location}
            </p>
          </div>
          <div className="rounded-xl border border-slate-300 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-800">
            <Briefcase className="text-blue-600 dark:text-blue-300" />
            <p className="mt-4 font-bold text-slate-950 dark:text-white">
              Target Roles
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Data Analyst, Junior Data Scientist, Business Analyst
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-bold text-slate-950 dark:text-white">
            Hands-on experience with:
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy", "Matplotlib"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-cyan-400/10 dark:text-cyan-200"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="bg-slate-50 py-24 dark:bg-slate-950">
    <div className="mx-auto max-w-7xl px-5">
      <SectionHeading
        eyebrow="Skills"
        title="Core data analyst skills"
        description="A focused toolkit for data cleaning, exploratory analysis, dashboarding, reporting, and business insight generation."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
          <motion.div
            key={group.title}
            {...fadeUp}
            transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.24) }}
            className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-400 dark:border-white/10 dark:bg-slate-800"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-cyan-400/10 dark:text-cyan-200">
              <Icon size={20} />
            </span>
            <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">
              {group.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="bg-white py-24 dark:bg-slate-900">
    <div className="mx-auto max-w-7xl px-5">
      <SectionHeading
        eyebrow="Projects"
        title="Analytics projects"
        description="Project cards focus on features and tech stack only, with no external project links added."
      />

      <div className="mt-12 grid gap-7 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.22) }}
            className="group overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl hover:shadow-slate-200/80 dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-blue-950/20"
          >
            <ProjectVisual type={project.visual} />
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                {project.title}
              </h3>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
                  Features
                </p>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="bg-slate-50 py-24 dark:bg-slate-950">
    <div className="mx-auto max-w-7xl px-5">
      <SectionHeading
        eyebrow="Education"
        title="BCA - Artificial Intelligence & Machine Learning"
        description="D.Y. Patil University, Pune | 2023 - 2026"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-slate-300 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-800"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-cyan-400/10 dark:text-cyan-200">
              <GraduationCap size={24} />
            </span>
            <div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                {candidate.degree}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {candidate.university}
              </p>
              <p className="mt-1 font-semibold text-blue-600 dark:text-cyan-200">
                {candidate.graduation}
              </p>
            </div>
          </div>

          <div className="mt-7 border-l-2 border-blue-200 pl-6 dark:border-blue-400/30">
            <div className="relative pb-7">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-blue-600 dark:border-slate-950" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
                2023 - 2026
              </p>
              <h4 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                BCA in Artificial Intelligence & Machine Learning
              </h4>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Focused on analytics, programming, machine learning, and
                practical AI/ML foundations.
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-4 border-white bg-slate-400 dark:border-slate-950" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Current Focus
              </p>
              <h4 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                Data Analyst / Junior Data Scientist / Business Analyst
              </h4>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Building portfolio projects that combine data cleaning,
                visualization, dashboards, and machine learning insights.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-2xl border border-slate-300 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-slate-800"
        >
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
            Resume
          </h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Download the current data analyst resume draft. You can replace it
            later with your final PDF resume.
          </p>
          <a
            href={candidate.resume}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            <Download size={17} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const Achievements = () => (
  <section id="achievements" className="bg-white py-24 dark:bg-slate-900">
    <div className="mx-auto max-w-7xl px-5">
      <SectionHeading
        eyebrow="Achievements"
        title="Practical analytics work"
        description="A quick summary of the hands-on outcomes shown across projects and virtual experience programs."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement}
            {...fadeUp}
            transition={{ duration: 0.48, delay: index * 0.05 }}
            className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-800"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-cyan-400/10 dark:text-cyan-200">
              {index + 1}
            </span>
            <p className="mt-5 font-bold leading-7 text-slate-950 dark:text-white">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section id="certifications" className="bg-white py-24 dark:bg-slate-900">
    <div className="mx-auto max-w-7xl px-5">
      <SectionHeading
        eyebrow="Certifications"
        title="Virtual experience certifications"
        description="Certification cards include image placeholders so certificate screenshots can be added later."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert}
            {...fadeUp}
            transition={{ duration: 0.48, delay: index * 0.05 }}
            className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue-400 dark:border-white/10 dark:bg-slate-800"
          >
            <div className="relative h-52 border-b border-slate-300 bg-slate-50 dark:border-white/15 dark:bg-slate-900/70">
              <Image
                src={cert.image}
                alt={`${cert.title} certificate`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                {cert.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Verified virtual experience certificate.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="bg-slate-50 py-24 dark:bg-slate-900">
    <div className="mx-auto max-w-7xl px-5">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        description="Open to internships, fresher roles, portfolio reviews, and entry-level data analytics opportunities."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div {...fadeUp} className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: candidate.email, href: `mailto:${candidate.email}` },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/vivek-lanke-87a1a628a", href: candidate.linkedin },
            { icon: Github, label: "GitHub", value: "github.com/viveklanke007", href: candidate.github },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-slate-300 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 dark:border-white/10 dark:bg-slate-950"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-all font-bold text-slate-950 dark:text-white">
                    {item.value}
                  </span>
                </span>
              </a>
            );
          })}
        </motion.div>

        <motion.form
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          action={`mailto:${candidate.email}`}
          method="post"
          encType="text/plain"
          className="rounded-2xl border border-slate-300 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input
                name="name"
                required
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Message
            <textarea
              name="message"
              required
              rows={6}
              className="resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
              placeholder="Tell me about the role, project, or opportunity."
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            <Send size={17} />
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-slate-300 bg-white py-8 dark:border-white/10 dark:bg-slate-950">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        &copy; {new Date().getFullYear()} {candidate.name}. Data Analyst & AI/ML
        Graduate portfolio.
      </p>
      <div className="flex justify-center gap-3">
        <a
          href={candidate.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-blue-400 hover:text-blue-700 dark:border-white/10 dark:text-slate-200"
          aria-label="GitHub profile"
        >
          <Github size={18} />
        </a>
        <a
          href={candidate.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-blue-400 hover:text-blue-700 dark:border-white/10 dark:text-slate-200"
          aria-label="LinkedIn profile"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={`mailto:${candidate.email}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-blue-400 hover:text-blue-700 dark:border-white/10 dark:text-slate-200"
          aria-label="Send email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

const BackToTop = ({ visible }) => (
  <a
    href="#home"
    className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition ${
      visible
        ? "translate-y-0 opacity-100"
        : "pointer-events-none translate-y-4 opacity-0"
    }`}
    aria-label="Back to top"
  >
    <ChevronUp size={20} />
  </a>
);

export default function Page() {
  const [theme, setTheme] = useState("dark");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(savedTheme || (prefersDark ? "dark" : "light"));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop visible={showBackToTop} />
    </div>
  );
}
