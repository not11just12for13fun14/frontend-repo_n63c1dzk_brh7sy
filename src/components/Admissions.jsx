import React, { useState } from 'react'

export default function Admissions() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      await new Promise((r) => setTimeout(r, 1000))
      setStatus('success')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Admissions open</h2>
            <p className="mt-3 text-slate-600">
              Share your details and our team will call you to book a campus tour and guide you through the process.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• Rolling admissions for Nursery to Grade 4</li>
              <li>• Scholarships for exceptional talent</li>
              <li>• Transport available across major routes</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Parent name</label>
                <input required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input required type="tel" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Child age</label>
                <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <option>3-4 years (Nursery)</option>
                  <option>4-5 years (KG)</option>
                  <option>6-7 years (Grade 1)</option>
                  <option>7-8 years (Grade 2)</option>
                  <option>8-9 years (Grade 3)</option>
                  <option>9-10 years (Grade 4)</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Tell us about your child..." />
              </div>
            </div>
            <button disabled={status==='loading'} className="mt-4 w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3 text-white font-medium shadow-lg shadow-orange-300/50">
              {status==='loading' ? 'Submitting...' : status==='success' ? 'Submitted! We will call you shortly' : 'Request a call back'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
