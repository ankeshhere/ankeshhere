import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen font-inter">
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
                <a 
                  className="inline-block mt-4 px-4 py-2 text-sm border rounded hover:bg-slate-50" 
                  href="/Ankesh_CV_Aug_2025.pdf" 
                  download
                >
                  Download Resume
                </a>
              </div>

              <motion.div 
                initial={{opacity:0, y:10}} 
                whileInView={{opacity:1, y:0}} 
                viewport={{once:true}} 
                transition={{duration:0.6}} 
                className="p-6 rounded-xl border bg-white shadow"
              >
                <h4 className="text-sm font-semibold text-slate-600">Skills</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python','Java','SQL','React','Lit','Quarkus','Tailwind','Docker'].map((s, idx) => (
                    <motion.span 
                      key={s} 
                      className="text-xs px-2 py-1 bg-slate-100 rounded skill-badge"
                      initial={{opacity:0, y:5}}
                      animate={{opacity:1, y:0}}
                      transition={{delay: idx * 0.05}}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

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
