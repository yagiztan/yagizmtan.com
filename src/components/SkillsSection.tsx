import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    category: 'CAD & Modelling',
    skills: ['SolidWorks', 'CATIA', 'Fusion 360', 'AutoCAD'],
    proficiency: 95,
  },
  {
    category: 'Simülasyon',
    skills: ['ANSYS Fluent', 'ANSYS Mechanical', 'CFX', 'COMSOL'],
    proficiency: 90,
  },
  {
    category: 'Programlama',
    skills: ['Python', 'MATLAB', 'C++', 'Fortran'],
    proficiency: 85,
  },
  {
    category: 'Sistem Tasarımı',
    skills: ['MBD', 'Controls', 'Systems Engineering', 'Requirements Analysis'],
    proficiency: 88,
  },
]

function SkillBar(({
  category,
  proficiency,
  index,
}: {
  category: string
  proficiency: number
  index: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!barRef.current) return

    gsap.fromTo(
      barRef.current,
      {
        width: '0%',
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: false,
          markers: false,
        },
        width: `${proficiency}%`,
        duration: 0.8,
        delay: index * 0.1,
      }
    )
  }, [])

  return (
    <div ref={containerRef} className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm md:text-base font-semibold text-aerospace-dark">{category}</p>
        <span className="text-sm font-mono text-aerospace-accent">{proficiency}%</span>
      </div>
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-aerospace-accent to-blue-500 rounded-full transition-all duration-300"
        />
      </div>
    </div>
  )
})

function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
          markers: false,
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
      }
    )
  }, [])

  return (
    <section className="relative w-full py-20 md:py-32 px-6 md:px-prose bg-white">
      <div ref={containerRef} className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-aerospace-dark mb-6">
            Teknik Yetkinlikler
          </h2>
          <p className="text-lg text-gray-700 font-light">
            İK uzmanlarının saniyeler içinde tarayabileceği net ve organize yetkinlik haritası.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((cat, idx) => (
            <div key={idx}>
              <SkillBar
                category={cat.category}
                proficiency={cat.proficiency}
                index={idx}
              />
              <div className="flex flex-wrap gap-2 mt-4">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2 py-1 bg-aerospace-dark/10 text-aerospace-dark rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
