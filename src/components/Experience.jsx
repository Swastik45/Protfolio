import React, { useState, useCallback } from 'react'

const experiences = [
  {
    company: 'Madargaach Holdings',
    role: 'Software Intern → Full Stack Developer',
    period: '2025 — Present',
    location: 'Nepal',
    project: 'Padhum',
    tagline: 'Interactive Exam Preparation & Study Platform',
    description:
      'Led end-to-end development of Padhum — a high-performance entrance exam prep platform (IOE, USMLE, PG medical) serving interactive MCQ testing, syllabus tracking, collaborative learning, and performance analytics for thousands of prospective students.',
    technologies: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Supabase',
      'Tailwind CSS v4',
      'Redis',
      'WebAuthn',
      'Twilio',
      'Nodemailer',
    ],
    responsibilities: [
      'Architected full-stack auth: email OTP, SMS login, Google OAuth, and WebAuthn passkeys',
      'Built secure MCQ test engine with server-side grading and live anti-cheat integrity controls',
      'Migrated production database from SQLite to Supabase PostgreSQL with Prisma ORM',
      'Implemented WMA rating system, global leaderboard, milestone badges, and revision vault',
      'Developed AI study tutor via Pollinations API with syllabus-aware performance analysis',
      'Shipped admin dashboard, data-entry tooling with duplicate-question detection, and payment flows',
    ],
    features: [
      'Classic, Subject-Wise, Blitz & Marathon mock test modes',
      'Weighted syllabus progress tracker across 4 subjects',
      'Collaborative mnemonics hub with upvoting & markdown study notes',
      'Interactive formula sheet, quick quiz & weekly mock reservation system',
      'Notification center, help & support FAQ with contact workflows',
      'Multi-layer client caching with silent background metric syncs',
    ],
    engineering: [
      'Redis-backed rate limiting with LRU memory fallback for SMS OTP',
      'Scalar-only Prisma queries & revision vault batch resolution',
      'HomeProvider context cache for instant tab navigation',
      'KaTeX math rendering, DOMPurify sanitization & mobile responsiveness',
      'db seed pipeline for 100+ MCQs and categorized study notes',
    ],
    org: 'https://github.com/Madargaach-Holdings',
  },
]

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const toggleExperience = useCallback((index) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <section
      id="experience"
      className="section-split min-h-screen py-20 px-4 sm:px-6 bg-transparent"
    >
      <div className="section-content relative z-10 max-w-5xl mx-auto">

        <div className="mb-16 inline-block">
          <h2 className="text-6xl font-black uppercase tracking-tighter text-white">
            Experience
          </h2>
          <div className="h-4 bg-gradient-to-r from-blue-600 via-black to-red-600 w-full mt-2" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div
                key={`${exp.company}-${index}`}
                className="relative bg-white/95 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-600 to-red-600" />

                <div className="pt-4">
                  <div
                    role="button"
                    tabIndex={0}
                    className={`
                      p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between transition-all duration-200
                      ${isExpanded ? 'bg-black text-white' : 'hover:bg-gray-100 text-black'}
                    `}
                    onClick={() => toggleExperience(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggleExperience(index)
                      }
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <span
                        className={`text-4xl font-black shrink-0 ${isExpanded ? 'text-white/40' : 'text-black/20'}`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div>
                        <p
                          className={`text-xs font-black uppercase tracking-widest mb-1 ${isExpanded ? 'text-red-400' : 'text-red-600'}`}
                        >
                          {exp.period} · {exp.location}
                        </p>

                        <h3 className="text-2xl font-black uppercase tracking-tight">
                          {exp.role}
                        </h3>

                        <p
                          className={`text-sm font-black uppercase tracking-widest mt-1 ${isExpanded ? 'text-white/70' : 'text-gray-500'}`}
                        >
                          {exp.company}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {(exp.technologies || []).slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className={`
                                text-[10px] font-black uppercase tracking-widest border-2 px-2 py-1
                                ${isExpanded ? 'border-white' : 'border-black'}
                              `}
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 6 && (
                            <span
                              className={`
                                text-[10px] font-black uppercase tracking-widest border-2 px-2 py-1
                                ${isExpanded ? 'border-white text-white/60' : 'border-black text-gray-500'}
                              `}
                            >
                              +{exp.technologies.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 shrink-0">
                      <span
                        className={`text-xs font-black uppercase px-4 py-2 border-2 ${isExpanded ? 'border-white' : 'border-black'}`}
                      >
                        {isExpanded ? 'HIDE DETAILS [-]' : 'VIEW DETAILS [+]'}
                      </span>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-8 border-t-4 border-black bg-white/95 space-y-8">

                      <div className="border-4 border-black p-6 bg-gray-50">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div>
                            <p className="text-xs font-black uppercase tracking-widest text-red-600 mb-1">
                              Flagship Project
                            </p>
                            <h4 className="text-3xl font-black uppercase tracking-tight text-black">
                              {exp.project}
                            </h4>
                            <p className="text-sm font-black uppercase text-blue-600 tracking-widest mt-1">
                              {exp.tagline}
                            </p>
                          </div>

                          <span className="self-start bg-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-black">
                            Private Repo
                          </span>
                        </div>

                        <p className="text-base font-bold leading-relaxed text-gray-800 uppercase">
                          {exp.description}
                        </p>
                      </div>

                      <div className="p-4 border-2 border-black bg-gray-100">
                        <h4 className="font-black uppercase text-xs mb-4 text-black tracking-widest">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2 text-xs font-black">
                          {(exp.responsibilities || []).map((item) => (
                            <li key={item} className="flex gap-2 text-gray-800">
                              <span className="text-red-600 shrink-0">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 border-2 border-black bg-gray-100">
                          <h4 className="font-black uppercase text-xs mb-3 text-red-600 tracking-widest">
                            Platform Features
                          </h4>
                          <ul className="space-y-2 text-xs font-black">
                            {(exp.features || []).map((f) => (
                              <li key={f} className="flex gap-2 text-gray-800">
                                <span>//</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 border-2 border-black bg-gray-100">
                          <h4 className="font-black uppercase text-xs mb-3 text-blue-600 tracking-widest">
                            Engineering Highlights
                          </h4>
                          <ul className="space-y-2 text-xs font-black">
                            {(exp.engineering || []).map((t) => (
                              <li key={t} className="flex gap-2 text-gray-800">
                                <span>&gt;</span>
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-black uppercase tracking-widest border-2 border-black px-2 py-1 bg-white"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <a
                          href={exp.org}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-black text-white text-center py-4 border-2 border-black font-black uppercase tracking-widest hover:bg-red-600 transition-colors"
                        >
                          Organization
                        </a>
                      </div>

                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Experience
