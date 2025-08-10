import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}} className="p-6 rounded-xl border bg-white shadow">
      <h2 className="text-lg font-semibold">About</h2>
      <p className="mt-3 text-sm text-slate-700">I’m a Full Stack Engineer currently at Standard Chartered. I enjoy building reliable user-facing applications and backend services. Recently I’ve worked on migrating a PEGA application to Lit + Quarkus and built a resource onboarding dashboard for the GBS sourcing team.</p>
    </motion.section>
  )
}