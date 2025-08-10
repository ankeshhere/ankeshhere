import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'GET Dashboard',
    desc: 'Resource planning and onboarding dashboard for GBS sourcing team using Lit & Quarkus.',
    tags: ['Lit','Quarkus','Frontend','Backend']
  },
  {
    title: 'BCBS App Migration',
    desc: 'Migrated PEGA application to Lit & Quarkus. Led a 3-member team and migrated DB queries.',
    tags: ['PEGA','Lit','Quarkus','DB']
  }
]

export default function Projects(){
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="p-6 rounded-xl border bg-white shadow">
      <h2 className="text-lg font-semibold">Projects</h2>
      <div className="mt-4 grid grid-cols-1 gap-4">
        {projects.map(p => (
          <article key={p.title} className="p-4 border rounded hover:shadow-md transition">
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm mt-1 text-slate-700">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
