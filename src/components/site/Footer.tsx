export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-light text-brand-dark">Instituto</span>
          <span className="rounded bg-brand-light/40 px-1.5 py-0.5 text-xs font-bold text-brand-dark">
            Visão Voluntária
          </span>
        </div>
        <div>© 2026 Instituto Visão Voluntária · visaovoluntaria.com.br</div>
      </div>
    </footer>
  );
}
