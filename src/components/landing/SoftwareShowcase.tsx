import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const SoftwareShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="software" ref={ref} className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <p className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} text-sm font-semibold text-primary uppercase tracking-widest mb-3`}>
              Software
            </p>
            <h2 className={`scroll-hidden delay-1 ${isVisible ? 'scroll-visible' : ''} text-3xl md:text-4xl font-extrabold tracking-tight mb-6`}>
              Maßgeschneiderte{' '}
              <span className="text-gradient-blue">Software-Lösungen</span>
            </h2>
            <p className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} text-muted-foreground text-lg leading-relaxed mb-6`}>
              Wir entwickeln individuelle Plattformen und Tools, die Ihre internen
              Prozesse automatisieren und Daten in Echtzeit visualisieren — 
              skalierbar, sicher und mit erstklassiger UX.
            </p>
            <ul className={`scroll-hidden delay-3 ${isVisible ? 'scroll-visible' : ''} space-y-3 mb-8`}>
              {['Dashboards & Analytics', 'Workflow-Automatisierung', 'API-Integrationen', 'Cloud-native Architektur'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className={`scroll-hidden delay-4 ${isVisible ? 'scroll-visible' : ''} group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline`}
            >
              Mehr erfahren
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mockup */}
          <div className={`scroll-hidden delay-2 ${isVisible ? 'scroll-visible' : ''} relative`}>
            <div className="rounded-2xl border border-border/60 bg-white shadow-2xl shadow-primary/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="p-5 space-y-4">
                {/* Table mockup */}
                <div className="rounded-xl border border-border/40 overflow-hidden">
                  <div className="grid grid-cols-4 gap-px bg-border/30">
                    {['Prozess', 'Status', 'Effizienz', 'Trend'].map((h) => (
                      <div key={h} className="bg-muted/40 px-4 py-2.5">
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{h}</span>
                      </div>
                    ))}
                  </div>
                  {[
                    { name: 'Onboarding', status: 'Optimiert', eff: '94%', trend: '↑' },
                    { name: 'Beschaffung', status: 'In Bearbeitung', eff: '67%', trend: '↑' },
                    { name: 'Reporting', status: 'Optimiert', eff: '89%', trend: '→' },
                    { name: 'Freigaben', status: 'Analyse', eff: '43%', trend: '↑' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-px bg-border/20">
                      <div className="bg-white px-4 py-3">
                        <span className="text-xs font-medium">{row.name}</span>
                      </div>
                      <div className="bg-white px-4 py-3">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          row.status === 'Optimiert'
                            ? 'bg-green-100 text-green-700'
                            : row.status === 'In Bearbeitung'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>{row.status}</span>
                      </div>
                      <div className="bg-white px-4 py-3">
                        <span className="text-xs font-bold">{row.eff}</span>
                      </div>
                      <div className="bg-white px-4 py-3">
                        <span className="text-xs text-green-600 font-bold">{row.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Glow behind */}
            <div className="absolute -inset-4 -z-10 bg-primary/5 blur-3xl rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareShowcase;
