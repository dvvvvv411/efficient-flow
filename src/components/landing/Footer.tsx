import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="flex items-center mb-3">
              <img src={logo} alt="EfficientFlow" className="h-6" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Beratung, Digitalisierung und Software für Unternehmen, die bereit sind, effizienter zu arbeiten.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Leistungen', href: '/leistungen' },
                { label: 'Software', href: '/software' },
                { label: 'Methodik', href: '/methodik' },
                { label: 'Karriere', href: '/karriere' },
                { label: 'Kontakt', href: '/kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Kontakt</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@efficientflow.de" className="hover:text-foreground transition-colors">
                  info@efficientflow.de
                </a>
              </li>
              <li>Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Efficient Flow Solutions. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
