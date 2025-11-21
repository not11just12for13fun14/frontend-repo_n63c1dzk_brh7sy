import React from 'react'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Facilities from './components/Facilities'
import Admissions from './components/Admissions'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Programs />
      <Facilities />
      <Admissions />
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} International Springs. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#admissions" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
