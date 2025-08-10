import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen font-inter relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] animate-bg-move">
      {/* Animated background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="none" viewBox="0 0 1440 900">
          <defs>
            <linearGradient id="bg-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0f2027" />
              <stop offset="100%" stopColor="#2c5364" />
            </linearGradient>
          </defs>
          <circle cx="400" cy="200" r="200" fill="url(#bg-grad)" opacity="0.3">
            <animate attributeName="cx" values="400;1200;400" dur="18s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="700" r="180" fill="#232526" opacity="0.25">
            <animate attributeName="cy" values="700;200;700" dur="22s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        <Header />
        <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <About />
            <Experience />
            {/* Real Projects from Resume with high-contrast and premium style */}
            <motion.section 
              initial={{opacity:0, y:40}} 
              whileInView={{opacity:1, y:0}} 
              viewport={{once:true}} 
              transition={{duration:0.8, type:'spring'}}
              className="rounded-3xl shadow-2xl bg-[#181f2a]/95 backdrop-blur-md border border-slate-700 p-8 mb-8 animate-fade-in"
            >
              <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">Key Projects & Solutions</h2>
              <div className="space-y-8">
                {/* BCBS App Migration */}
                <motion.div 
                  whileHover={{scale:1.03, boxShadow:'0 8px 32px 0 rgba(31,38,135,0.25)'}} 
                  className="rounded-2xl bg-gradient-to-tr from-[#232526] to-[#2c5364] p-6 shadow-lg border border-slate-700 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">BCBS App Migration</h3>
                  <p className="text-lg text-slate-100 mb-3">Led a 3-member team to migrate a business-critical app from PEGA to Lit & Quarkus, collaborating with product owners to deliver a seamless, fully functional solution (form inputs, email alerts, PDF exports) with modern web standards.</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">Lit</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">Quarkus</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">PEGA</span>
                  </div>
                </motion.div>
                {/* GET Dashboard */}
                <motion.div 
                  whileHover={{scale:1.03, boxShadow:'0 8px 32px 0 rgba(31,38,135,0.25)'}} 
                  className="rounded-2xl bg-gradient-to-tr from-[#232526] to-[#0f2027] p-6 shadow-lg border border-slate-700 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">GET Dashboard</h3>
                  <p className="text-lg text-slate-100 mb-3">Built a dashboard for the GBS sourcing team to plan, request, and onboard resources, providing real-time insights and streamlined workflows for enterprise operations.</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">React</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">D3.js</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">Tailwind CSS</span>
                  </div>
                </motion.div>
                {/* Automated Excel Reporting */}
                <motion.div 
                  whileHover={{scale:1.03, boxShadow:'0 8px 32px 0 rgba(31,38,135,0.25)'}} 
                  className="rounded-2xl bg-gradient-to-tr from-[#232526] to-[#2c5364] p-6 shadow-lg border border-slate-700 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Automated Excel Reporting</h3>
                  <p className="text-lg text-slate-100 mb-3">Developed a Python-based solution to fetch data from Oracle DB, generate monthly Excel reports, and dispatch them via email. Created a Windows executable for one-click report generation, eliminating Python install requirements.</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">Python</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">Oracle</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">Excel</span>
                  </div>
                </motion.div>
                {/* Real-time Financial Dashboard */}
                <motion.div 
                  whileHover={{scale:1.03, boxShadow:'0 8px 32px 0 rgba(31,38,135,0.25)'}} 
                  className="rounded-2xl bg-gradient-to-tr from-[#232526] to-[#0f2027] p-6 shadow-lg border border-slate-700 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Real-time Financial Dashboard</h3>
                  <p className="text-lg text-slate-100 mb-3">Leveraged Elasticsearch to aggregate and visualize financial data, delivering key metrics and drill-down insights through a real-time dashboard for business stakeholders.</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">Elasticsearch</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">React</span>
                  </div>
                </motion.div>
                {/* Chatbot & NLP Project */}
                <motion.div 
                  whileHover={{scale:1.03, boxShadow:'0 8px 32px 0 rgba(31,38,135,0.25)'}} 
                  className="rounded-2xl bg-gradient-to-tr from-[#232526] to-[#2c5364] p-6 shadow-lg border border-slate-700 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Chatbot & NLP Integration</h3>
                  <p className="text-lg text-slate-100 mb-3">Contributed to a chatbot project by writing SQL queries, developing REST APIs, and building the frontend in ReactJS. Gained hands-on experience with NLP techniques for enhanced user interaction.</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">ReactJS</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">SQL</span>
                    <span className="px-3 py-1 text-xs rounded bg-slate-800 text-slate-100">REST API</span>
                  </div>
                </motion.div>
              </div>
            </motion.section>
            {/* ...existing code for <Projects /> if you want to keep the old list... */}
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <motion.div 
                initial={{opacity:0, y:10}} 
                whileInView={{opacity:1, y:0}} 
                viewport={{once:true}} 
                transition={{duration:0.6}} 
                className="p-6 rounded-xl border bg-[#232526]/95 shadow-lg backdrop-blur-md animate-fade-in"
              >
                <h4 className="text-sm font-semibold text-white">Contact</h4>
                <p className="mt-2 text-sm text-slate-100">ankeshhere@gmail.com</p>
                <p className="text-sm text-slate-100">+91-8682875690</p>
                <a 
                  className="inline-block mt-4 px-4 py-2 text-sm border border-sky-500 text-sky-100 rounded bg-sky-700 hover:bg-sky-600 font-semibold shadow transition-colors duration-200" 
                  href="/Ankesh_CV_Aug_2025.pdf" 
                  download
                >
                  <span className="inline-block align-middle mr-2">📄</span>Download Resume
                </a>
              </motion.div>

              <motion.div 
                initial={{opacity:0, y:10}} 
                whileInView={{opacity:1, y:0}} 
                viewport={{once:true}} 
                transition={{duration:0.6}} 
                className="p-6 rounded-xl border bg-white/90 shadow-lg backdrop-blur-md animate-fade-in"
              >
                <h4 className="text-sm font-semibold text-slate-600">Skills</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Python','Java','SQL','React','Lit','Quarkus','Tailwind','Docker'].map((s, idx) => (
                    <motion.span 
                      key={s} 
                      className="text-xs px-2 py-1 bg-slate-100 rounded skill-badge shadow"
                      initial={{opacity:0, y:5}}
                      animate={{opacity:1, y:0}}
                      transition={{delay: idx * 0.05}}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{opacity:0, y:10}} 
                whileInView={{opacity:1, y:0}} 
                viewport={{once:true}} 
                transition={{duration:0.6}} 
                className="p-6 rounded-xl border bg-white/90 shadow-lg backdrop-blur-md animate-fade-in"
              >
                <h4 className="text-sm font-semibold text-slate-600">Awards</h4>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  <li>GEMS Spot Award (2020)</li>
                  <li>Outstanding Performer (2021, 2022)</li>
                </ul>
              </motion.div>
            </div>
          </aside>
        </main>
        <Footer />
      </div>
      {/* Custom keyframes for background and fade-in animation */}
      <style>{`
        @keyframes bg-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bg-move {
          background-size: 200% 200%;
          animation: bg-move 24s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  )
}
