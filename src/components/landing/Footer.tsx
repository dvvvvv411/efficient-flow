const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Logo + Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-blue flex items-center justify-center">
                <span className="text-white font-bold text-xs">EF</span>
              </div>
              <span className="font-bold text-foreground tracking-tight">
                Efficient<span className="text-gradient-blue">Flow</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Beratung, Digitalisierung und Software für Unternehmen, die bereit sind, effizienter zu arbeiten.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Leistungen', href: '#leistungen' },
                { label: 'Software', href: '#software' },
                { label: 'Methodik', href: '#methodik' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Kontakt</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>info@efficientflow.de</li>
              <li>Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
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
