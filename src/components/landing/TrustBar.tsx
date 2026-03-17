import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const companies = [
  'TechVentures', 'DataCore', 'NovaSystems', 'CloudBridge', 'SynergyLab', 'FlowDynamics'
];

const TrustBar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className={`text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
          Vertraut von führenden Unternehmen
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {companies.map((name, i) => (
            <div
              key={name}
              className={`scroll-hidden delay-${i + 1} ${isVisible ? 'scroll-visible' : ''}`}
            >
              <div className="flex items-center gap-2 text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-xs font-bold">{name[0]}</span>
                </div>
                <span className="text-sm font-semibold tracking-tight">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
