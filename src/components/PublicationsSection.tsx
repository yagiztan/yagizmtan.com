import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const publications = [
  {
    id: 1,
    title: 'Aerodynamic Optimization of Fighter Aircraft Wings Using ANSYS',
    authors: 'Y. Tan, M. Kara, A. Yilmaz',
    conference: 'International Aerospace Engineering Conference 2024',
    year: 2024,
    abstract: 'Bu çalışmada, savaş uçaklarının kanat tasarımının CFD optimizasyonu sunulmaktadır. Sonuçlar %15 lift-to-drag iyileşmesi göstermiştir.',
  },
  {
    id: 2,
    title: 'Structural Analysis and Optimization of Satellite Structures',
    authors: 'Y. Tan, S. Ozdemir',
    conference: 'Space Engineering Symposium 2024',
    year: 2024,
    abstract: 'Uydu yapılarının yapısal analizinde çok aşamalı optimizasyon yaklaşımı. Kütle %10 azaltılmış ve güvenlik faktörü 3.5 sağlanmıştır.',
  },
  {
    id: 3,
    title: 'Real-time Flight Control System Design Using Modern Control Theory',
    authors: 'Y. Tan, H. Gümüş, B. Aslan',
    conference: 'Control Systems and Robotics Conference 2023',
    year: 2023,
    abstract: 'Uçak kontrol sistemlerinin real-time tasarımı ve uygulaması. Sistem kararlılığı ve yanıt hızı kritik seviyelerde başarıyla test edilmiştir.',
  },
]

function PublicationCard({
  publication,
  index,
}: {
  publication: (typeof publications)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
          markers: false,
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
      }
    )
  }, [])

  return (
    <div
      ref={cardRef}
      className="p-6 md:p-8 border-l-4 border-aerospace-accent bg-aerospace-dark/2 rounded-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base md:text-lg font-semibold text-aerospace-dark flex-1">
          {publication.title}
        </h3>
        <span className="text-sm font-mono text-aerospace-accent ml-3 shrink-0">
          {publication.year}
        </span>
      </div>

      <p className="text-sm text-gray-600 font-light mb-3">
        {publication.authors}
      </p>

      <p className="text-sm md:text-base text-gray-700 font-light leading-relaxed mb-4">
        {publication.abstract}
      </p>

      <p className="text-xs md:text-sm text-aerospace-accent font-mono">
        {publication.conference}
      </p>
    </div>
  )
}

function PublicationsSection() {
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
    <section className="relative w-full py-20 md:py-32 px-6 md:px-prose bg-aerospace-light">
      <div ref={containerRef} className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-aerospace-dark mb-6">
            Akademik Yayınlar
          </h2>
          <p className="text-lg text-gray-700 font-light max-w-2xl">
            Uluslararası konferanslarda sunulan ve hakem kontrolünden geçen mühendislik çalışmalarımız.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <PublicationCard key={pub.id} publication={pub} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PublicationsSection
