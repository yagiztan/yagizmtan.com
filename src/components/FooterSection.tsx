import { useState } from 'react'

function FooterSection() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yagiztan' },
    { name: 'GitHub', url: 'https://github.com/yagiztan' },
    { name: 'Email', url: 'mailto:hello@yagizmtan.com' },
  ]

  return (
    <footer id="contact" className="relative w-full py-16 md:py-20 px-6 md:px-prose bg-aerospace-dark text-aerospace-light">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12 pb-12 border-b border-white/20">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-aerospace-accent">İletişim</h3>
            <div className="space-y-3 text-sm font-light">
              <p>
                <span className="text-aerospace-accent">Email:</span>
                <br />
                <a
                  href="mailto:hello@yagizmtan.com"
                  className="hover:text-aerospace-accent transition-colors"
                >
                  hello@yagizmtan.com
                </a>
              </p>
              <p>
                <span className="text-aerospace-accent">Konum:</span>
                <br />
                Ankara, Türkiye
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-aerospace-accent">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#projects" className="hover:text-aerospace-accent transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aerospace-accent transition-colors">
                  Yetkinlikler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aerospace-accent transition-colors">
                  Yayınlar
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-aerospace-accent transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-aerospace-accent">Sosyal Ağlar</h3>
            <ul className="space-y-2 text-sm font-light">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-aerospace-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-light text-gray-400">
          <p>© {currentYear} Yağız Tan. Tüm hakları saklıdır.</p>
          <p className="mt-4 md:mt-0">Designed & Built with React Three Fiber & GSAP</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
