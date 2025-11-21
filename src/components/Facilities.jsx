import React from 'react'
import { Shield, Trees, MonitorSmartphone, HeartHandshake } from 'lucide-react'

const Facility = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="h-12 w-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center"><Icon className="h-6 w-6" /></div>
    <div>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 mt-1">{desc}</p>
    </div>
  </div>
)

export default function Facilities() {
  const list = [
    { icon: Shield, title: 'Safety-first campus', desc: '24/7 security, CCTV and verified pick-up protocols.' },
    { icon: Trees, title: 'Nature corners', desc: 'Indoor green spaces and outdoor play zones for daily movement.' },
    { icon: MonitorSmartphone, title: 'Smart classrooms', desc: 'Interactive boards, tablets and age-appropriate robotics.' },
    { icon: HeartHandshake, title: 'Care & wellbeing', desc: 'On-campus nurse, counselors and nutritious meals.' },
  ]

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-white to-orange-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Premium facilities for little explorers</h2>
            <p className="mt-3 text-slate-600">
              Built for joyful discovery with comfort, safety and technology thoughtfully woven in.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {list.map((f) => (
                <Facility key={f.title} {...f} />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-orange-100 via-amber-50 to-white shadow-xl" />
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl bg-orange-400/20 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-28 w-28 rounded-2xl bg-amber-400/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
