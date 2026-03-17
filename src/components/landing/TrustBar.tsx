import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const companies = [
  'TechVentures', 'DataCore', 'NovaSystems', 'CloudBridge', 'SynergyLab', 'FlowDynamics', 'NextLogic', 'ScaleForce'
];

const LogoItem = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2.5 px-6 text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors shrink-0">
    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
      <span className="text-xs font-bold">{name[0]}</span>
    </div>
    <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{name}</span>
  </div>
);

const TrustBar = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-14 border-y border-border/40 overflow-hidden">
      <p className={`text-center text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-8 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}>
        Vertraut von führenden Unternehmen
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {/* Double the items for seamless loop */}
          {[...companies, ...companies].map((name, i) => (
            <LogoItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
