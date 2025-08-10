import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <motion.section 
      initial={{opacity:0, y:10}} 
      whileInView={{opacity:1, y:0}} 
      viewport={{once:true}} 
      transition={{duration:0.6}} 
      className="p-6 rounded-xl border bg-white shadow"
    >
      <h2 className="text-lg font-semibold">About</h2>
      <p className="mt-3 text-sm text-slate-700">
        I’m a passionate <strong>Full Stack Engineer</strong> specializing in both frontend and backend technologies. 
        My recent work includes leading a migration from PEGA to Lit & Quarkus, and developing a 
        resource onboarding dashboard for the GBS sourcing team. I love creating solutions that are 
        efficient, maintainable, and delightful to use.
      </p>
    </motion.section>
  )
}
