import React from 'react'
import { motion } from 'framer-motion'

export default function Header(){
  return (
    <motion.header initial={{opacity:0, y:-8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="flex items-start justify-between">
      <div className="flex items-center gap-6">
        <div className="relative">
          <img 
            src={import.meta.env.BASE_URL + '1654432670902.jpeg'} 
            alt="Ankesh Prasad" 
            className="w-20 h-20 rounded-full border-4 border-sky-400 shadow-lg object-cover bg-slate-200 ring-2 ring-sky-500 ring-offset-2 ring-offset-[#181f2a] transition-transform duration-300 hover:scale-105" 
            style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.25)'}}
          />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">Ankesh Prasad</h1>
          <p className="text-lg font-medium text-sky-200 mt-1 drop-shadow">Full Stack Engineer <span className="text-sky-400">• Lit | Quarkus | React</span></p>
        </div>
      </div>
      <div className="flex gap-4 items-center mt-2">
        <a aria-label="github" href="https://github.com/ankeshhere" target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white text-lg font-semibold transition-colors duration-200 flex items-center gap-1">
          <svg width="20" height="20" fill="currentColor" className="inline-block align-middle"><path d="M10 .3a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 10 5.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 10 .3"/></svg>
          GitHub
        </a>
        <a aria-label="linkedin" href="https://www.linkedin.com/in/ankesh-prasad-b09846136/" target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white text-lg font-semibold transition-colors duration-200 flex items-center gap-1">
          <svg width="20" height="20" fill="currentColor" className="inline-block align-middle"><path d="M16.5 3A2.5 2.5 0 0 1 19 5.5v9A2.5 2.5 0 0 1 16.5 17h-13A2.5 2.5 0 0 1 1 14.5v-9A2.5 2.5 0 0 1 3.5 3h13zm-8.75 4.25h-2v7.5h2v-7.5zm-1-1.25a1.13 1.13 0 1 0 0-2.25 1.13 1.13 0 0 0 0 2.25zm8.25 8.75v-3.25c0-1.1-.9-2-2-2s-2 .9-2 2v3.25h2v-3.25c0-.28.22-.5.5-.5s.5.22.5.5v3.25h2z"/></svg>
          LinkedIn
        </a>
      </div>
    </motion.header>
  )
}