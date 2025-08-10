import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 font-inter">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <Header />
        <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <About />
            <Experience />
            <Projects />
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="p-6 rounded-xl border bg-white shadow">
                <h4 className="text-sm font-semibold text-slate-600">Contact</h4>
                <p className="mt-2 text-sm">ankeshhere@gmail.com</p>
                <p className="text-sm">+91-8682875690</p>
                <a className="inline-block mt-4 px-4 py-2 text-sm border rounded hover:bg-slate-50" href="/Ankesh_CV_Aug_2025.pdf" download>Download Resume</a>
              </div>

              <div className="p-6 rounded-xl border bg-white shadow">
                <h4 className="text-sm font-semibold text-slate-600">Skills</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python','Java','SQL','React','Lit','Quarkus','Tailwind','Docker'].map(s => (
                    <span key={s} className="text-xs px-2 py-1 bg-slate-100 rounded">{s}</span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl border bg-white shadow">
                <h4 className="text-sm font-semibold text-slate-600">Awards</h4>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  <li>GEMS Spot Award (2020)</li>
                  <li>Outstanding Performer (2021, 2022)</li>
                </ul>
              </div>
            </div>
          </aside>
        </main>
        <Footer />
      </div>
    </div>
  )
}