import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function App() {
  const [gateOpen, setGateOpen] = useState(false);
  const [showGate, setShowGate] = useState(true);

  return (
    <div className="min-h-screen font-inter relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] animate-bg-move">
      {/* GATE LANDING OVERLAY */}
      {showGate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-gradient-to-b from-[#0f2027] via-[#232526] to-black overflow-hidden">
          {/* Space background with stars and nebula */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="nebula" cx="50%" cy="50%" r="80%" fx="60%" fy="40%">
                  <stop offset="0%" stopColor="#7f7fd5" stopOpacity="0.7" />
                  <stop offset="40%" stopColor="#86a8e7" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#232526" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <rect width="1440" height="900" fill="url(#nebula)" />
              {/* Stars */}
              {[...Array(120)].map((_,i) => (
                <circle key={i} cx={Math.random()*1440} cy={Math.random()*900} r={Math.random()*1.2+0.3} fill="#fff" opacity={Math.random()*0.7+0.3} />
              ))}
            </svg>
          </div>
          {/* Gate doors - now with sci-fi elements */}
          <div className="absolute inset-0 flex z-10">
            {/* Left Door with spaceship and alien */}
            <motion.div
              initial={false}
              animate={gateOpen ? { translateX: '-100%' } : { translateX: 0 }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="w-1/2 h-full bg-gradient-to-br from-[#232526] via-[#2c5364] to-[#0f2027] border-r-4 border-sky-700 shadow-2xl flex items-center justify-end relative overflow-hidden"
              style={{ zIndex: 51 }}
              onAnimationComplete={() => {
                if (gateOpen) setTimeout(() => setShowGate(false), 200);
              }}
            >
              {/* Spaceship SVG - Bigger */}
              <svg width="170" height="170" className="absolute left-2 top-8 animate-bounce-slow" viewBox="0 0 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="85" cy="140" rx="55" ry="16" fill="#222" opacity="0.3"/>
                <ellipse cx="85" cy="85" rx="60" ry="24" fill="#b2f5ea" stroke="#7f7fd5" strokeWidth="3"/>
                <ellipse cx="85" cy="85" rx="36" ry="14" fill="#fff" opacity="0.7"/>
                <rect x="65" y="56" width="40" height="36" rx="16" fill="#7f7fd5" stroke="#86a8e7" strokeWidth="3"/>
                <rect x="78" y="98" width="14" height="20" rx="7" fill="#7f7fd5" stroke="#86a8e7" strokeWidth="2"/>
              </svg>
              {/* Green Alien SVG - Bigger */}
              <svg width="120" height="120" className="absolute left-4 bottom-10 animate-alien-wave" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="60" cy="70" rx="36" ry="44" fill="#39FF14" opacity="0.8"/>
                <ellipse cx="44" cy="76" rx="6" ry="12" fill="#222"/>
                <ellipse cx="76" cy="76" rx="6" ry="12" fill="#222"/>
                <ellipse cx="60" cy="100" rx="14" ry="6" fill="#222" opacity="0.3"/>
                <ellipse cx="60" cy="50" rx="14" ry="10" fill="#fff" opacity="0.2"/>
              </svg>
              <div className="w-2 h-1/2 bg-sky-400 rounded-r-full blur-lg opacity-40 absolute right-0 top-1/4 animate-pulse" />
            </motion.div>
            {/* Right Door with coder silhouette */}
            <motion.div
              initial={false}
              animate={gateOpen ? { translateX: '100%' } : { translateX: 0 }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="w-1/2 h-full bg-gradient-to-bl from-[#0f2027] via-[#2c5364] to-[#232526] border-l-4 border-sky-700 shadow-2xl flex items-center justify-start relative overflow-hidden"
              style={{ zIndex: 51 }}
            >
              {/* Coder silhouette SVG */}
              <svg width="80" height="100" className="absolute right-8 bottom-16 animate-coder-float" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="40" cy="90" rx="22" ry="7" fill="#222" opacity="0.3"/>
                <circle cx="40" cy="38" r="14" fill="#7f7fd5"/>
                <rect x="24" y="52" width="32" height="24" rx="10" fill="#232536" stroke="#7f7fd5" strokeWidth="2"/>
                <rect x="32" y="60" width="16" height="8" rx="3" fill="#fff" opacity="0.2"/>
                <rect x="36" y="68" width="8" height="6" rx="2" fill="#fff" opacity="0.1"/>
              </svg>
              <div className="w-2 h-1/2 bg-sky-400 rounded-l-full blur-lg opacity-40 absolute left-0 top-1/4 animate-pulse" />
            </motion.div>
          </div>
      {/* Custom keyframes for sci-fi gate animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3.5s infinite cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes alien-wave {
          0%, 100% { transform: rotate(-8deg) scale(1); }
          50% { transform: rotate(8deg) scale(1.08); }
        }
        .animate-alien-wave {
          animation: alien-wave 2.8s infinite cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes coder-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.04); }
        }
        .animate-coder-float {
          animation: coder-float 3.2s infinite cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
          {/* Center content - with fallback avatar if image fails */}
          <motion.div 
            initial={{ opacity: 1, scale: 1 }} 
            animate={gateOpen ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }} 
            transition={{ duration: 0.7 }}
            className="relative z-20 flex flex-col items-center"
          >
            <div className="w-32 h-32 mb-6 rounded-full border-4 border-sky-400 shadow-lg bg-slate-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/1654432670902.jpeg" 
                alt="Ankesh Prasad" 
                className="w-full h-full object-cover" 
                onError={e => { e.target.style.display='none'; e.target.parentNode.innerHTML='<svg width=100 height=100 viewBox=\'0 0 100 100\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><circle cx=50 cy=50 r=48 fill=\'#232536\' stroke=\'#7f7fd5\' stroke-width=4/><path d=\'M50 30a15 15 0 1 1 0 30a15 15 0 0 1 0-30z\' fill=\'#7f7fd5\'/><ellipse cx=50 cy=70 rx=18 ry=10 fill=\'#7f7fd5\' opacity=\'0.3\'/></svg>'; }}
              />
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg tracking-widest">Ankesh Prasad</h1>
            <p className="text-lg text-sky-200 mb-6 font-mono">Full Stack Engineer <span className="text-sky-400">• Lit | Quarkus | React</span></p>
            <button
              onClick={() => setGateOpen(true)}
              className="px-10 py-3 rounded-full bg-gradient-to-r from-sky-600 via-indigo-500 to-purple-700 hover:from-sky-500 hover:to-indigo-600 text-white text-xl font-bold shadow-xl transition-all duration-200 border-2 border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-300 tracking-widest"
            >
              Enter Universe
            </button>
          </motion.div>
        </div>
      )}

      {/* Animated space background pattern for main site */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="none" viewBox="0 0 1440 900">
          <defs>
            <radialGradient id="main-nebula" cx="50%" cy="50%" r="80%" fx="60%" fy="40%">
              <stop offset="0%" stopColor="#7f7fd5" stopOpacity="0.7" />
              <stop offset="40%" stopColor="#86a8e7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#232526" stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#main-nebula)" />
          {/* Stars */}
          {[...Array(100)].map((_,i) => (
            <circle key={i} cx={Math.random()*1440} cy={Math.random()*900} r={Math.random()*1.2+0.3} fill="#fff" opacity={Math.random()*0.7+0.3} />
          ))}
        </svg>
      </div>
      <div className={`relative z-10 max-w-5xl mx-auto px-6 py-10 transition-opacity duration-700 ${gateOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
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
