import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-40 pb-16 lg:pb-24 overflow-hidden hero-gradient">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[100px] animate-orb" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-[hsl(199_89%_48%/0.06)] blur-[100px] animate-orb-delayed" />
        <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[80px] animate-orb" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text content */}
        <div className="text-left">
          {/* Badge */}
          <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/[0.06] backdrop-blur-sm mb-8">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary tracking-wide">
              Beratung & Software für 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.08] mb-6">
            Wir machen Unternehmen{' '}
            <span className="text-gradient-blue">schneller.</span>
          </h1>

          {/* Subtext */}
          <p className="hero-animate hero-animate-3 text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Wir beraten Unternehmen in Effizienzsteigerung, Digitalisierung und
            Prozessoptimierung — und entwickeln die Software, die Ihre Prozesse
            in echten Wettbewerbsvorteil verwandelt.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2.5 px-10 h-14 rounded-full bg-gradient-blue text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.03] transition-all duration-200"
            >
              Projekt starten
              <ArrowRight size={18} />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 px-10 h-14 rounded-full border border-border bg-background/80 backdrop-blur-sm text-foreground font-semibold text-base hover:bg-background hover:border-primary/40 transition-all duration-200"
            >
              Leistungen entdecken
              <ChevronRight size={18} className="text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Right: Dashboard Mockup */}
        <div className="hero-animate hero-animate-5 relative">
          {/* Glow behind mockup */}
          <div className="absolute -inset-10 bg-primary/[0.06] blur-[60px] rounded-full" />

          <div className="relative rounded-2xl border border-border/60 bg-background shadow-2xl shadow-primary/[0.08] overflow-hidden animate-float-slow lg:rotate-1" style={{ perspective: '1000px' }}>
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[hsl(0_84%_60%/0.6)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(45_93%_47%/0.6)]" />
                <div className="w-3 h-3 rounded-full bg-[hsl(142_71%_45%/0.6)]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-background border border-border/50 flex items-center px-3">
                  <span className="text-xs text-muted-foreground">app.efficientflow.de/dashboard</span>
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5 grid grid-cols-12 gap-3 min-h-[260px]">
              {/* Sidebar */}
              <div className="col-span-3 hidden md:flex flex-col gap-2.5">
                <div className="h-7 rounded-lg bg-primary/10 flex items-center px-2.5">
                  <div className="w-3.5 h-3.5 rounded bg-primary/30" />
                  <div className="ml-2 h-2 w-14 rounded bg-primary/20" />
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-7 rounded-lg bg-muted/60 flex items-center px-2.5">
                    <div className="w-3.5 h-3.5 rounded bg-muted-foreground/10" />
                    <div className="ml-2 h-1.5 rounded bg-muted-foreground/10" style={{ width: `${40 + i * 8}px` }} />
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="col-span-12 md:col-span-9 flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: 'Effizienz', value: '+42%', color: 'text-[hsl(142_71%_35%)]' },
                    { label: 'Prozesse', value: '128', color: 'text-primary' },
                    { label: 'Einsparung', value: '€340k', color: 'text-[hsl(270_60%_50%)]' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-xl border border-border/40 bg-background p-3">
                      <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{kpi.label}</p>
                      <p className={`text-lg font-bold mt-0.5 ${kpi.color}`}>{kpi.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex-1 rounded-xl border border-border/40 bg-background p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-2.5 w-28 rounded bg-foreground/10" />
                    <div className="flex gap-1.5">
                      <div className="h-5 w-14 rounded-md bg-muted" />
                      <div className="h-5 w-14 rounded-md bg-primary/10" />
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 92].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-gradient-blue opacity-60" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
