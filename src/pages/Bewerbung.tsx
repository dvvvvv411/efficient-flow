import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Upload, Send } from 'lucide-react';

import PageHero from '@/components/landing/PageHero';
import Footer from '@/components/landing/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { stellen } from '@/data/karriereStellen';

const Bewerbung = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('stelle') || '';
  const { ref, isVisible } = useScrollAnimation();

  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    strasse: '',
    plz: '',
    stadt: '',
    stelle: preselected,
    lebenslauf: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, lebenslauf: e.target.files?.[0] || null });
  };

  return (
    <>

      <PageHero
        title="Deine"
        highlight="Bewerbung"
        subtitle="Fülle das Formular aus und bewirb dich auf eine unserer offenen Stellen. Wir freuen uns darauf, dich kennenzulernen."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Karriere', href: '/karriere' },
          { label: 'Bewerbung' },
        ]}
      />

      <section ref={ref} className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className={`scroll-hidden ${isVisible ? 'scroll-visible' : ''} rounded-2xl border border-border/60 bg-card p-8 md:p-10`}>
            <h2 className="text-2xl font-extrabold tracking-tight mb-2">Bewerbungsformular</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Felder mit * sind Pflichtfelder.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {/* Stelle */}
              <div className="space-y-2">
                <Label htmlFor="stelle">Stelle *</Label>
                <Select value={form.stelle} onValueChange={(v) => setForm({ ...form, stelle: v })}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Stelle auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {stellen.map((s) => (
                      <SelectItem key={s.slug} value={s.titel}>
                        {s.titel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="vorname">Vorname *</Label>
                  <Input id="vorname" name="vorname" placeholder="Max" value={form.vorname} onChange={handleChange} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nachname">Nachname *</Label>
                  <Input id="nachname" name="nachname" placeholder="Mustermann" value={form.nachname} onChange={handleChange} className="rounded-xl" />
                </div>
              </div>

              {/* Contact */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" name="email" type="email" placeholder="max@beispiel.de" value={form.email} onChange={handleChange} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefon *</Label>
                  <Input id="telefon" name="telefon" type="tel" placeholder="+49 123 456 789" value={form.telefon} onChange={handleChange} className="rounded-xl" />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label htmlFor="strasse">Straße & Hausnummer *</Label>
                <Input id="strasse" name="strasse" placeholder="Musterstraße 42" value={form.strasse} onChange={handleChange} className="rounded-xl" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="plz">PLZ *</Label>
                  <Input id="plz" name="plz" placeholder="80331" value={form.plz} onChange={handleChange} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stadt">Stadt *</Label>
                  <Input id="stadt" name="stadt" placeholder="München" value={form.stadt} onChange={handleChange} className="rounded-xl" />
                </div>
              </div>

              {/* File upload */}
              <div className="space-y-2">
                <Label htmlFor="lebenslauf">Lebenslauf</Label>
                <label
                  htmlFor="lebenslauf"
                  className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-border bg-muted/30 cursor-pointer hover:border-primary/40 hover:bg-muted/50 transition-colors"
                >
                  <Upload size={20} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {form.lebenslauf ? form.lebenslauf.name : 'PDF oder DOCX hochladen'}
                  </span>
                  <input
                    id="lebenslauf"
                    type="file"
                    accept=".pdf,.docx,.doc"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-blue text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-200"
              >
                Bewerbung absenden
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Bewerbung;
