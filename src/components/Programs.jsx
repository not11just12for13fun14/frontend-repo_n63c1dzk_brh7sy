import React from 'react'
import { Sparkles, Palette, Library, Languages } from 'lucide-react'

const ProgramCard = ({ icon: Icon, title, description, color }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
    <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${color} text-white shadow-sm shadow-black/10`}>
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-1 text-slate-600">{description}</p>
    <div className="mt-4 text-sm text-slate-500">Small class sizes • Caring educators</div>
  </div>
)

export default function Programs() {
  const programs = [
    {
      icon: Library,
      title: 'Early Years (Nursery–KG)',
      description:
        'Play-based foundations with phonics, number sense, motor skills and social-emotional learning.',
      color: 'bg-rose-500',
    },
    {
      icon: Sparkles,
      title: 'Grade 1–2',
      description:
        'Hands-on literacy and numeracy with projects in nature, science and community.',
      color: 'bg-amber-500',
    },
    {
      icon: Palette,
      title: 'Grade 3–4',
      description:
        'Inquiry-led learning with art, music, physical education and beginner coding + robotics.',
      color: 'bg-sky-500',
    },
    {
      icon: Languages,
      title: 'Global Languages',
      description:
        'English immersion with optional second-language clubs to build confident communicators.',
      color: 'bg-emerald-500',
    },
  ]

  return (
    <section id="programs" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Programs</h2>
          <p className="mt-3 text-slate-600">
            A carefully sequenced journey from early curiosity to confident, independent learners.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
