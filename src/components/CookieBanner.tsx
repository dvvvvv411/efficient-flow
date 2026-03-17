import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookies-accepted')) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handle = (accepted: boolean) => {
    localStorage.setItem('cookies-accepted', accepted ? 'true' : 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-lg animate-[slide-up_0.4s_ease-out] glass-card rounded-xl px-5 py-4 shadow-lg">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Wir verwenden Cookies.{' '}
          <Link to="/datenschutz" className="text-primary hover:underline">
            Mehr erfahren
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handle(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Ablehnen
          </button>
          <Button size="sm" onClick={() => handle(true)}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
