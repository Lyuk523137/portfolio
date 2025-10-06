"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string; // ISO string "2024-06-01"
  expires?: string;  // ISO or undefined for lifetime
  verifyUrl: string;
  image: string;     // /public path to issuer/logo or cert thumbnail
  hours?: number;
  skills: string[];
  credentialId?: string;
};

const CERTS: Certification[] = [
  {
    id: "1",
    title: "Make Intermediate",
    issuer: "Coursera",
    issueDate: "2025-09-21",
    verifyUrl: "https://www.credly.com/badges/6102ff7d-1d33-4bbd-8ead-722323d34547/linked_in_profile",
    image: "/certificates/Make.png",
    hours: 120,
    skills: ["React", "CSS", "UI"],

  },
  {
    id: "2",
    title: "JavaScript by Mozilla",
    issuer: "LinkedIn Learning",
    issueDate: "2025-6-08",
    verifyUrl: "https://www.linkedin.com/learning/certificates/05a138c10cc07187fa386ab46d474715b022ae92af479fc25903f0eba4f6b434",
    image: "/certificates/Mozilla.png",
    skills: ["JavaScript", "Algorithms"],
  },
  {
    id: "3",
    title: "GitHub Career Path",
    issuer: "LinkedIn Learning",
    issueDate: "2025-03-05",
    expires: "2028-05-22",
    verifyUrl: "https://www.linkedin.com/learning/certificates/6d71d8d56872058cd6cd5324e80ac6108e48b0907d86eeae4cf9a021bc5fb1b4",
    image: "/certificates/GitHub.png",
    skills: ["Managment", "Cloud", "Code"],

  },
  {
    id: "4",
    title: "Airtable Builder",
    issuer: "Airtable",
    issueDate: "2025-03-05",
    expires: "2027-03-01",
    verifyUrl: "https://verify.skilljar.com/c/tzbvn2zu8qbt",
    image: "/certificates/Airtable.png",
    skills: ["Databases", "NoCode"],

  },
];

const ALL_ISSUERS = Array.from(new Set(CERTS.map(c => c.issuer))).sort();
const ALL_SKILLS = Array.from(new Set(CERTS.flatMap(c => c.skills))).sort();

export default function CertificationsPage() {
  const [issuer, setIssuer] = useState<string>("All");
  const [skill, setSkill] = useState<string>("All");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const items = useMemo(() => {
    let list = [...CERTS];
    if (issuer !== "All") list = list.filter(c => c.issuer === issuer);
    if (skill !== "All") list = list.filter(c => c.skills.includes(skill));
    list.sort((a, b) =>
      sort === "newest"
        ? +new Date(b.issueDate) - +new Date(a.issueDate)
        : +new Date(a.issueDate) - +new Date(b.issueDate)
    );
    return list;
  }, [issuer, skill, sort]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-100 dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Certifications</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-2">
          Verified credentials and courses I’ve completed. Click any card to verify.
        </p>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap gap-3">
          <select
            value={issuer}
            onChange={e => setIssuer(e.target.value)}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-800/50 px-3 py-2"
          >
            <option>All</option>
            {ALL_ISSUERS.map(v => <option key={v}>{v}</option>)}
          </select>
          <select
            value={skill}
            onChange={e => setSkill(e.target.value)}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-800/50 px-3 py-2"
          >
            <option>All</option>
            {ALL_SKILLS.map(v => <option key={v}>{v}</option>)}
          </select>
          <select
            value={sort}
            onChange={e => setSort(e.target.value as any)}
            className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-800/50 px-3 py-2"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        {/* Grid */}
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(cert => (
            <li key={cert.id}>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur
                           shadow-sm hover:shadow-lg transition-all overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-400/40"
              >
                {/* Header / Logo */}
                <div className="flex items-center gap-3 p-4">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
                    <Image
                      src={cert.image}
                      alt={`${cert.issuer} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold leading-tight">{cert.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span>Issued {new Date(cert.issueDate).toLocaleDateString()}</span>
                    {cert.expires ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-300/20 dark:text-amber-200 px-2 py-0.5">
                        Expires {new Date(cert.expires).toLocaleDateString()}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-300/20 dark:text-emerald-200 px-2 py-0.5">
                        Lifetime
                      </span>
                    )}
                  </div>

                  {cert.credentialId && (
                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.hours && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cert.hours} hours
                    </p>
                  )}

                  {/* Skills */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.skills.map(s => (
                      <span key={s} className="text-xs rounded-full px-2 py-1 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Verify CTA */}
                  <div className="mt-4">
                    <span className="inline-flex items-center gap-2 rounded-lg px-3 py-2 bg-blue-600 text-white text-sm
                                      group-hover:bg-blue-500 transition-colors">
                      Verify
                      <svg width="16" height="16" fill="currentColor" className="opacity-90"><path d="M3 8h8.586l-3.293 3.293 1.414 1.414L15.414 8l-5.707-5.707-1.414 1.414L11.586 7H3z"/></svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // You can generate this server-side too, but inline is fine for a few items
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": CERTS.map((c, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "EducationalOccupationalCredential",
                "name": c.title,
                "description": `${c.title} by ${c.issuer}`,
                "credentialCategory": "Certification",
                "url": c.verifyUrl,
                "recognizedBy": { "@type": "Organization", "name": c.issuer },
                "dateIssued": c.issueDate,
                ...(c.expires ? { "validUntil": c.expires } : {}),
                ...(c.skills?.length ? { "competencyRequired": c.skills } : {}),
                ...(c.credentialId ? { "identifier": c.credentialId } : {}),
              }
            }))
          })
        }}
      />
    </main>
  );
}
