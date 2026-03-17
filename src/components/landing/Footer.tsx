import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-14">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {/* Logo + Tagline */}
          <div>
            <Link to="/" className="flex items-center mb-3">
              <img src={logo} alt="EfficientFlow" className="h-8 hover:scale-105 transition-transform duration-200" />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Beratung, Digitalisierung und Software für Unternehmen, die bereit sind, effizienter zu arbeiten.
            </p>
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
                <a href="mailto:info@efficientflow.solutions" className="hover:text-foreground transition-colors">
                  info@efficientflow.solutions
                </a>
              </li>
              <li>Marc-Chagall-Str. 142</li>
              <li>40477 Düsseldorf, Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Efficient Flow Solutions GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/impressum" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
