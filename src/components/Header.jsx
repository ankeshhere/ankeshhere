import React from 'react'
import { motion } from 'framer-motion'

export default function Header(){
  return (
    <motion.header initial={{opacity:0, y:-8}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-bold">Ankesh Prasad</h1>
        <p className="text-sm text-slate-600 mt-1">Full Stack Engineer • Lit | Quarkus | React</p>
      </div>
      <div className="flex gap-3 items-center">
        <a aria-label="github" href="https://github.com/ankeshhere" target="_blank" rel="noreferrer" className="text-slate-600 text-sm">GitHub</a>
        <a aria-label="linkedin" href="#" className="text-slate-600 text-sm">LinkedIn</a>
      </div>
    </motion.header>
  )
}