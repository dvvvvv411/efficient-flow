import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Software', href: '#software' },
  { label: 'Methodik', href: '#methodik' },
  { label: 'Kontakt', href: '#kontakt' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={`max-w-5xl mx-auto transition-all duration-500 rounded-full border px-8 h-16 flex items-center justify-between ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-foreground/5 border-border/80'
            : 'bg-white/60 backdrop-blur-md border-border/40 shadow-sm'
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-gradient-blue flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xs">EF</span>
          </div>
          <span className="font-bold text-foreground text-sm tracking-tight">
            Efficient<span className="text-gradient-blue">Flow</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background text-[13px] font-semibold hover:bg-foreground/90 transition-colors"
          >
            Projekt starten
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1.5 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden max-w-4xl mx-auto mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-border shadow-xl px-6 pb-5 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="mt-3 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold"
          >
            Projekt starten
            <ArrowRight size={14} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
