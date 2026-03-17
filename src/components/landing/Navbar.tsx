import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Software', href: '/software' },
  { label: 'Methodik', href: '/methodik' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="relative z-50 px-4 pt-6">
      <div className="max-w-5xl mx-auto flex items-center gap-4">
        {/* Logo: freistehend */}
        <Link to="/" className="shrink-0">
          <img src={logo} alt="EfficientFlow" className="h-10 w-auto hover:scale-105 transition-transform duration-200" style={{ imageRendering: 'auto', backfaceVisibility: 'hidden' }} />
        </Link>

        {/* Nav pill */}
        <nav
          className={`flex-1 transition-all duration-500 rounded-full border px-8 h-16 flex items-center justify-between ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-foreground/5 border-border/80'
              : 'bg-white/60 backdrop-blur-md border-border/40 shadow-sm'
          }`}
        >
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block ml-auto">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Projekt starten
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-1.5 text-foreground ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-border shadow-xl px-6 pb-5 pt-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="mt-3 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold"
          >
            Projekt starten
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
