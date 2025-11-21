import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, Phone, MapPin } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white">
      {/* Top navigation */}
      <div className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-lg shadow-orange-200/60 flex items-center justify-center text-white font-bold">IS</div>
            <div>
              <p className="text-lg font-semibold text-slate-800 tracking-tight">International Springs</p>
              <p className="text-xs text-slate-500 -mt-1">Where little minds bloom</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition">About</a>
            <a href="#programs" className="hover:text-slate-900 transition">Programs</a>
            <a href="#facilities" className="hover:text-slate-900 transition">Facilities</a>
            <a href="#admissions" className="hover:text-slate-900 transition">Admissions</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#admissions" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition">
              <Phone className="h-4 w-4" /> Book a tour
            </a>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Spline 3D Scene */}
      <div className="relative z-10 pt-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div className="py-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              Early Years • Grades 1–4
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              A joyful start to world-class learning
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              A premium, global school experience designed for curious minds up to Grade 4. Safe, playful and future-ready with creative technology at heart.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#admissions" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 text-white font-medium shadow-lg shadow-orange-300/50 hover:shadow-orange-400/60 transition">Start Admissions</a>
              <a href="#programs" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-slate-700 font-medium hover:bg-white/60 backdrop-blur">
                Explore Programs
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-600" /> Premium City Campus</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> International Curriculum</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100 shadow-inner">
            <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft glow gradient overlay - allow interactions to pass through */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-500/10 via-transparent to-amber-400/10" />
          </div>
        </div>
      </div>

      {/* Decorative gradient bottom */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-80 w-[110%] bg-gradient-to-t from-orange-100 to-transparent blur-3xl" />
    </section>
  )
}
