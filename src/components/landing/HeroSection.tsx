import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl animate-orb" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(199_89%_48%/0.05)] blur-3xl animate-orb-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] rounded-full bg-primary/3 blur-3xl animate-orb" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="scroll-hidden inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/80 backdrop-blur-sm shadow-sm mb-8"
          style={{ animationDelay: '0ms' }}
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-semibold text-muted-foreground tracking-wide uppercase">
            Beratung & Software für 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="scroll-hidden delay-1 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
          Effizienz.{' '}
          <span className="text-gradient-blue">Digitalisiert.</span>
        </h1>

        {/* Subtext */}
        <p className="scroll-hidden delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Wir beraten Unternehmen in Effizienzsteigerung, Digitalisierung und
          Prozessoptimierung — und entwickeln die Software, die Ihre Prozesse
          in echten Wettbewerbsvorteil verwandelt.
        </p>

        {/* CTAs */}
        <div className="scroll-hidden delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-blue text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            Projekt starten
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#leistungen"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-white/80 backdrop-blur-sm text-foreground font-semibold hover:bg-accent hover:border-primary/20 transition-all duration-200"
          >
            Leistungen entdecken
          </a>
        </div>

        {/* Dashboard Mockup */}
        <div className="scroll-hidden delay-4 mt-16 md:mt-20 relative">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-border/60 bg-white shadow-2xl shadow-primary/10 overflow-hidden animate-float-slow">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-6 rounded-md bg-background border border-border/50 flex items-center px-3">
                  <span className="text-xs text-muted-foreground">app.efficientflow.de/dashboard</span>
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[360px]">
              {/* Sidebar */}
              <div className="col-span-3 hidden md:flex flex-col gap-3">
                <div className="h-8 rounded-lg bg-primary/10 flex items-center px-3">
                  <div className="w-4 h-4 rounded bg-primary/30" />
                  <div className="ml-2 h-2.5 w-16 rounded bg-primary/20" />
                </div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 rounded-lg bg-muted/60 flex items-center px-3">
                    <div className="w-4 h-4 rounded bg-muted-foreground/10" />
                    <div className="ml-2 h-2 rounded bg-muted-foreground/10" style={{ width: `${50 + i * 10}px` }} />
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="col-span-12 md:col-span-9 flex flex-col gap-4">
                {/* KPI Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Effizienz', value: '+42%', color: 'bg-green-500/10 text-green-600' },
                    { label: 'Prozesse', value: '128', color: 'bg-primary/10 text-primary' },
                    { label: 'Einsparung', value: '€340k', color: 'bg-purple-500/10 text-purple-600' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-xl border border-border/40 bg-white p-4">
                      <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{kpi.label}</p>
                      <p className={`text-xl font-bold mt-1 ${kpi.color}`}>{kpi.value}</p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="flex-1 rounded-xl border border-border/40 bg-white p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-3 w-32 rounded bg-foreground/10" />
                    <div className="flex gap-2">
                      <div className="h-6 w-16 rounded-md bg-muted" />
                      <div className="h-6 w-16 rounded-md bg-primary/10" />
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-32">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 92].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md bg-gradient-blue opacity-70" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle shadow below mockup */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary/5 blur-3xl rounded-full" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
