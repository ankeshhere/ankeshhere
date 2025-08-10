import React from 'react'
import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Full Stack Engineer — Standard Chartered',
    date: 'Nov 2024 – Present',
    bullets: [
      'BCBS App Migration — led a 3-member team to migrate a PEGA app to Lit & Quarkus, implemented forms, email alerts & PDF exports.',
      'GET Dashboard — built dashboard for GBS sourcing team (Lit frontend, Quarkus backend).'
    ]
  },
  {
    title: 'Technical Specialist — Standard Chartered',
    date: 'Apr 2023 – Oct 2024',
    bullets: [
      'Built Python tools for Oracle DB reporting and automated Excel/email workflows.',
      'Built Elasticsearch dashboards and automated certificate monitoring.'
    ]
  }
]

export default function Experience(){
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}} className="p-6 rounded-xl border bg-white shadow">
      <h2 className="text-lg font-semibold">Experience</h2>
      <div className="mt-4 space-y-4">
        {roles.map(r => (
          <div key={r.title}>
            <h3 className="font-semibold">{r.title}</h3>
            <p className="text-xs text-slate-500">{r.date}</p>
            <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-slate-700">
              {r.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  )
}