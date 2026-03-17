import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';

const rows = [
  {
    problem: 'Legacy-Systeme bremsen Ihr Wachstum',
    solution: 'Moderne digitale Infrastruktur, die mit Ihnen skaliert',
  },
  {
    problem: 'Manuelle Prozesse verschwenden wertvolle Ressourcen',
    solution: 'Intelligente Automatisierung von Workflows',
  },
  {
    problem: 'Datensilos verhindern fundierte Entscheidungen',
    solution: 'Integrierte Plattformen für volle Transparenz',
  },
];

const ProblemSolution = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Problem erkannt. <span className="text-gradient-blue">Lösung geliefert.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Wir identifizieren Engpässe und verwandeln sie in Wettbewerbsvorteile.
          </p>
        </div>

        <div className="space-y-6">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''} grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center`}
            >
              {/* Problem */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-red-50/60 border border-red-100/60">
                <AlertTriangle size={20} className="text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm font-medium text-foreground/80">{row.problem}</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight size={20} className="text-primary" />
              </div>

              {/* Solution */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-accent border border-primary/10">
                <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                <p className="text-sm font-medium text-foreground/80">{row.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
