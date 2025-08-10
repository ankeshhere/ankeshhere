import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Ankesh Prasad</h1>
          <p className="text-sm text-gray-600">Full Stack Engineer — Jamshedpur, India</p>
          <p className="text-sm text-gray-600 mt-1">+91-8682875690 • ankeshhere@gmail.com</p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold border-b pb-2">Experience</h2>

            <article>
              <h3 className="font-semibold">Full Stack Engineer — Standard Chartered</h3>
              <p className="text-sm text-gray-600">Nov 2024 – Present</p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                <li><strong>BCBS App Migration</strong> — Led a 3-member team migrating an app from PEGA to Lit & Quarkus, implementing full functionality.</li>
                <li><strong>GET Dashboard</strong> — Built dashboard for GBS sourcing team (Lit frontend, Quarkus backend).</li>
              </ul>
            </article>

            <article>
              <h3 className="font-semibold">Technical Specialist — Standard Chartered</h3>
              <p className="text-sm text-gray-600">Apr 2023 – Oct 2024</p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                <li>Python tool for Oracle DB reporting with automated Excel & email dispatch.</li>
                <li>Windows executable for Excel automation.</li>
                <li>Real-time dashboards with Elasticsearch.</li>
                <li>SSL expiry automation (Selenium) & log rotation alerts.</li>
                <li>Password rotation with HashiCorp Vault & AES-256 encryption.</li>
                <li>Email sentiment classification with FinBERT.</li>
              </ul>
            </article>
          </section>

          <aside className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
              <p className="mt-2 text-sm"><strong>VIT</strong> — B.Tech ECE, 7.96 CGPA (2015–2019)</p>
              <p className="text-sm">D.B.M.S English School — ISC 93.2% (2014)</p>
              <p className="text-sm">D.B.M.S English School — ICSE 89% (2012)</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
              <p className="text-sm"><strong>Languages:</strong> Python, Java, SQL, JavaScript, HTML/CSS</p>
              <p className="text-sm"><strong>Frameworks:</strong> Lit, React, Quarkus, SpringBoot, Tailwind</p>
              <p className="text-sm"><strong>Tools:</strong> Git, Docker, VS Code, IntelliJ, Postman</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold border-b pb-2">Awards</h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Merit Scholarship — HSC</li>
                <li>GEMS Spot Award (2020)</li>
                <li>Outstanding Performer (2021, 2022)</li>
                <li>MB-910 Microsoft Dynamics 365 Certified</li>
              </ul>
            </div>
          </aside>
        </main>

        <footer className="mt-8 text-center text-xs text-gray-500"></footer>
      </div>
    </div>
  )
}