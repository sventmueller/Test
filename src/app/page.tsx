"use client";
import { useMemo, useState } from "react";
import { Brain, LineChart, Wrench, Shield, Rocket, CheckCircle2, Factory, Building2, ShoppingCart, Warehouse, Cog, ArrowRight, Menu, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-indigo-500/30 selection:text-white" id="top">
      <Header />
      <Hero />
      <LogoCloud />
      <Section id="leistungen" title="Leistungen" kicker="Was wir für KMU möglich machen">
        <Services />
      </Section>
      <Section id="usecases" title="Use Cases" kicker="Schnell umsetzbar, messbar wirksam">
        <UseCases />
      </Section>
      <Section id="vorgehen" title="Vorgehen" kicker="Strukturiert. Transparent. DSGVO‑konform.">
        <Process />
      </Section>
      <Section id="roi" title="Mini‑ROI‑Rechner" kicker="Wie schnell rechnet sich KI?">
        <RoiCalculator />
      </Section>
      <Section id="referenzen" title="Stimmen aus Projekten" kicker="Praxis statt PowerPoint">
        <Testimonials />
      </Section>
      <Section id="preise" title="Pakete" kicker="Klar kalkulierbar">
        <Pricing />
      </Section>
      <Section id="faq" title="FAQ" kicker="Die häufigsten Fragen – kurz beantwortet">
        <Faq />
      </Section>
      <Section id="kontakt" title="Kontakt" kicker="Erstgespräch in 30 Sekunden anfragen">
        <Contact />
      </Section>
      <Footer />
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#usecases", label: "Use Cases" },
    { href: "#vorgehen", label: "Vorgehen" },
    { href: "#referenzen", label: "Referenzen" },
    { href: "#preise", label: "Preise" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 md:px-6">
        <a href="#top" className="group inline-flex items-center gap-2">
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 blur opacity-25 group-hover:opacity-40 transition" />
            <div className="relative rounded-xl bg-neutral-900 px-3 py-1.5 font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">evo.fin</span>
            </div>
          </div>
          <Badge className="hidden md:inline-flex bg-white/10 text-white">Praktische KI für den Mittelstand</Badge>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition">
              {n.label}
            </a>
          ))}
          <a href="#kontakt">
            <Button className="ml-2">Erstgespräch buchen</Button>
          </a>
        </nav>
        <button aria-label="Menü" className="md:hidden rounded-lg p-2 hover:bg-white/10" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 grid gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 text-neutral-300 hover:text-white hover:bg-white/5" onClick={() => setMobileOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-2">Erstgespräch buchen</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridGlow />
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 md:px-6 md:pt-24 md:pb-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
              <SparkleDot />
              <span>DSGVO‑konform · Vendor‑neutral · Hands‑on</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Praktische KI für den Mittelstand
              </span>
            </h1>
            <p className="mt-4 text-lg text-neutral-300">
              evo.fin ist die Unternehmensberatung für <em>umsetzbare</em> KI‑Anwendungen in kleinen und mittelständischen Unternehmen. Wir automatisieren Routine, verbessern Entscheidungen und schaffen Freiräume für Wertschöpfung.
            </p>
            <ul className="mt-6 grid gap-2 text-neutral-200">
              {["≥ 30% schnellere Abläufe in Pilotprozessen","Sichere Umsetzung in IT‑ und Compliance‑Rahmen","Transparente Roadmap vom Quickcheck bis zum Rollout"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#kontakt">
                <Button className="gap-2"><Calendar className="h-5 w-5" /> Erstgespräch buchen</Button>
              </a>
              <a href="#leistungen" className="rounded-lg px-4 py-2 text-neutral-300 hover:text-white hover:bg-white/5">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <Card className="bg-neutral-900/60 border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-neutral-100">
          <Brain className="h-6 w-6 text-indigo-400" /> KI‑Potenziale im Betrieb
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {[
            { icon: Building2, label: "Backoffice", hint: "E‑Mails, Doku, Angebote" },
            { icon: ShoppingCart, label: "Vertrieb", hint: "Leads, Proposals" },
            { icon: Factory, label: "Produktion", hint: "Qualität, Wartung" },
            { icon: Warehouse, label: "Logistik", hint: "Planung, Routen" },
            { icon: Cog, label: "Service", hint: "Tickets, Self‑Service" },
            { icon: Shield, label: "Compliance", hint: "Richtlinien, DSGVO" },
          ].map(({ icon: Icon, label, hint }) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-sky-400" />
                <div className="font-medium text-neutral-100">{label}</div>
              </div>
              <div className="text-xs text-neutral-400">{hint}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-4">
          <div className="flex items-center gap-2 text-neutral-200"><LineChart className="h-5 w-5" />
            <span>Typischer Effekt: 20‑50% Zeitersparnis pro Use Case in 6–10 Wochen</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LogoCloud() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
        {["Mittelstand+", "KMU‑Netzwerk", "Industrie 4.0", "Handel Direkt", "ServTec", "DataTrust"].map((n) => (
          <div key={n} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-neutral-300">
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: any }) {
  return (
    <section id={id} className="relative">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        {kicker && <div className="mb-2 text-sm text-neutral-400">{kicker}</div>}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { icon: Wrench, title: "KI‑Quickcheck", text: "Wir identifizieren in Workshops (½–1 Tag) 5–10 sinnvolle Use Cases und priorisieren nach Aufwand/Nutzen.", highlights: ["Reifegrad‑Check", "Daten‑Reality‑Check", "Roadmap"] },
    { icon: Rocket, title: "Pilot & Prototyping", text: "Proof‑of‑Concept in 4–6 Wochen: ein konkreter Prozess automatisiert – inkl. Messung und Schulung.", highlights: ["Schnellstart", "Change‑Begleitung", "Dokumentation"] },
    { icon: Shield, title: "Governance & Compliance", text: "Richtlinien, Rollen, DSGVO, Betriebsrat – praxisnah umsetzen, ohne Innovation auszubremsen.", highlights: ["Policy‑Kit", "Freigaben", "Audit‑Trail"] },
    { icon: Brain, title: "Rollout & Enablement", text: "Vom Pilot zur Breite: Schulungen, Vorlagen, Templates – damit Teams eigenständig KI einsetzen.", highlights: ["Academy", "Do‑it‑yourself‑Guides", "Support"] },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text, highlights }) => (
        <Card key={title} className="bg-neutral-900/60 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-neutral-100">
              <Icon className="h-5 w-5 text-sky-400" /> {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300 text-sm">{text}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <Badge key={h} className="bg-white/10 text-white">
                  {h}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function UseCases() {
  const cases = [
    { icon: Mail, title: "E‑Mail‑Assistenz", impact: "–40% Bearbeitungszeit", text: "eingehende Anfragen zusammenfassen, priorisieren, Antworten vorschlagen" },
    { icon: LineChart, title: "Forecasting", impact: "+15% Plan‑Güte", text: "Absatz‑/Bestandsprognosen auf Basis historischer Daten & Signale" },
    { icon: Cog, title: "Ticket‑Automation", impact: "–35% Liegezeiten", text: "automatische Klassifikation, Routing, Wissensvorschläge" },
    { icon: Factory, title: "Qualitätsprüfung", impact: "–25% Ausschuss", text: "Bilderkennung & Anomalie‑Detektion in Produktion" },
    { icon: Warehouse, title: "Dispo & Logistik", impact: "–20% Kosten", text: "Routen, Touren, Lagerbestände optimieren" },
    { icon: Building2, title: "Wissensbot", impact: "+60% Self‑Service", text: "Richtlinien, Handbücher, Verträge per Chat auffindbar machen" },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cases.map(({ icon: Icon, title, impact, text }) => (
        <Card key={title} className="bg-neutral-900/60 border-white/10">
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2 text-neutral-100">
              <span className="inline-flex items-center gap-2"><Icon className="h-5 w-5 text-emerald-400" /> {title}</span>
              <Badge className="bg-emerald-500/20 text-emerald-200">{impact}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300 text-sm">{text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Process() {
  const steps = [
    { title: "Quickcheck", time: "1 Woche", text: "Workshops, Datenlage, Use‑Case‑Backlog, Entscheidungsvorlage." },
    { title: "Pilot", time: "4–6 Wochen", text: "PoC mit messbarem Nutzen, Security & Compliance im Blick." },
    { title: "Rollout", time: "4–12 Wochen", text: "Skalierung, Templates, Schulungen, Change‑Begleitung." },
    { title: "Enablement", time: "laufend", text: "Academy, Governance, Support – Teams werden eigenständig." },
  ];
  return (
    <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
          <div className="mb-2 flex items-center gap-2 text-sm text-neutral-400">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 font-medium">{i + 1}</span>
            <span>{s.time}</span>
          </div>
          <div className="text-lg font-semibold">{s.title}</div>
          <p className="mt-1 text-sm text-neutral-300">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

function RoiCalculator() {
  const [hours, setHours] = useState(60);
  const [rate, setRate] = useState(60);
  const [autoShare, setAutoShare] = useState(0.5);
  const monthly = useMemo(() => Math.max(0, hours) * Math.max(0, rate) * Math.min(1, Math.max(0, autoShare)), [hours, rate, autoShare]);
  const yearly = monthly * 12;
  return (
    <Card className="bg-neutral-900/60 border-white/10">
      <CardContent className="grid gap-6 p-6 md:grid-cols-2">
        <div className="grid gap-4">
          <LabeledInput label="Automatisierbare Stunden/Monat" value={hours} onChange={setHours} min={0} step={5} />
          <LabeledInput label="Ø Stundensatz (€/h)" value={rate} onChange={setRate} min={0} step={5} />
          <LabeledRange label="Automatisierungsgrad" value={autoShare} onChange={setAutoShare} />
          <p className="text-xs text-neutral-400">* grobe Faustformel, konservativ kalkuliert; Produktivitätsgewinne sind projektspezifisch.</p>
        </div>
        <div className="grid place-content-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-6">
            <div className="text-sm text-neutral-400">Potentielle Ersparnis</div>
            <div className="mt-2 text-4xl font-bold">{formatEUR(monthly)}/Monat</div>
            <div className="mt-2 text-lg text-neutral-300">≈ {formatEUR(yearly)}/Jahr</div>
            <div className="mt-4">
              <a href="#kontakt">
                <Button className="gap-2"><ArrowRight className="h-5 w-5" /> Konkreten Use Case prüfen</Button>
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function LabeledInput({ label, value, onChange, min = 0, step = 1 }: { label: string; value: number; onChange: (n: number) => void; min?: number; step?: number }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-neutral-300">{label}</span>
      <Input type="number" value={value} min={min} step={step} onChange={(e) => onChange(Number(e.target.value))} />
    </label>
  );
}

function LabeledRange({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-neutral-300">{label}: {(value * 100).toFixed(0)}%</span>
      <input type="range" min={0} max={1} step={0.05} value={value} onChange={(e) => onChange(Number(e.target.value))} className="accent-indigo-500" />
    </label>
  );
}

function Testimonials() {
  const items = [
    { quote: "Vom Workshop bis zum Pilot in sechs Wochen – der Bot spart unserem Team täglich Zeit.", name: "Leitung Kundenservice", org: "Handelsunternehmen (150 MA)" },
    { quote: "Datenschutz & Betriebsrat waren sauber abgeholt, die Akzeptanz ist hoch.", name: "IT‑Leitung", org: "Produktion (220 MA)" },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((t, i) => (
        <Card key={i} className="bg-neutral-900/60 border-white/10">
          <CardContent className="p-6">
            <p className="text-neutral-200">“{t.quote}”</p>
            <div className="mt-4 text-sm text-neutral-400">{t.name} · {t.org}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Pricing() {
  const plans = [
    { title: "Quickstart", price: "ab 4.900 €", desc: "½–1 Tag Workshops, Reifegrad‑Check, 5–10 Use Cases, Roadmap.", features: ["Management‑Briefing", "Priorisierung nach Nutzen", "Umsetzungsfahrplan"], cta: "Quickcheck anfragen" },
    { title: "Pilot", price: "ab 12.900 €", desc: "PoC 4–6 Wochen, messbarer Nutzen, Schulung & Dokumentation.", features: ["Sichere Architekturen", "Change‑Begleitung", "Success‑Metriken"], cta: "Pilot besprechen", highlight: true },
    { title: "Rollout", price: "auf Anfrage", desc: "Skalierung auf Teams & Standorte, Richtlinien & Enablement.", features: ["Governance", "Academy", "Support"], cta: "Rollout planen" },
  ];
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <Card key={p.title} className={`border-white/10 ${p.highlight ? "bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10" : "bg-neutral-900/60"}`}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-neutral-100">
              {p.title}
              {p.highlight && <Badge className="bg-emerald-500/20 text-emerald-200">Empfehlung</Badge>}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="text-3xl font-bold">{p.price}</div>
            <p className="text-sm text-neutral-300">{p.desc}</p>
            <ul className="grid gap-2 text-sm text-neutral-200">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" /> {f}</li>
              ))}
            </ul>
            <a href="#kontakt"><Button className="w-full">{p.cta}</Button></a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function Faq() {
  const items = [
    { q: "Welche Tools setzen Sie ein?", a: "Wir sind anbieter‑ und modellneutral. Wir wählen je nach Use Case (Kosten, Datenschutz, Qualität) – z. B. Open‑Source‑Modelle on‑prem, Cloud‑Modelle mit EU‑Hosting oder hybride Ansätze." },
    { q: "Wie sieht es mit Datenschutz aus?", a: "Prozesse werden DSGVO‑konform ausgelegt: Auftragsverarbeitungsverträge, Datenminimierung, Zweckbindung, Löschkonzepte und technische Schutzmaßnahmen sind Standard." },
    { q: "Brauchen wir Data Scientists?", a: "Nicht zwingend. Viele Use Cases sind mit solider Prozesskenntnis, sauberer Datenbasis und starken Basis‑Modellen schnell realisierbar." },
    { q: "Wie starten wir?", a: "Mit dem KI‑Quickcheck: ½–1 Tag, klare Kandidatenliste, Entscheidungsvorlage – dann Pilot wählen." },
  ];
  return (
    <div className="grid gap-3">
      {items.map((it) => (
        <details key={it.q} className="group rounded-xl border border-white/10 bg-neutral-900/60 p-5 open:bg-neutral-900">
          <summary className="cursor-pointer list-none text-lg font-medium text-neutral-100">{it.q}</summary>
          <div className="mt-2 text-neutral-300">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("Hallo evo.fin Team, wir möchten ein Erstgespräch zum Thema praktische KI in unserem Unternehmen vereinbaren…");

  function handleSubmit(e: any) {
    e.preventDefault();
    const subject = encodeURIComponent("Anfrage Erstgespräch");
    const body = encodeURIComponent(`Name: ${name}\nE‑Mail: ${email}\n\nNachricht:\n${msg}`);
    window.location.href = `mailto:hello@evo.fin?subject=${subject}&body=${body}`;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
        <h3 className="text-xl font-semibold">Lassen Sie uns sprechen</h3>
        <p className="mt-2 text-neutral-300">Kostenfreies 20‑Minuten‑Erstgespräch – Use Cases prüfen, Rahmen klären, nächster Schritt.</p>
        <div className="mt-4 grid gap-2 text-neutral-300">
          <div className="flex items-center gap-2"><Mail className="h-5 w-5" /><a className="hover:underline" href="mailto:hello@evo.fin">hello@evo.fin</a></div>
          <div className="flex items-center gap-2"><Phone className="h-5 w-5" /><a className="hover:underline" href="tel:+49000000000">+49 000 000000</a></div>
          <div className="flex items-center gap-2"><Calendar className="h-5 w-5" /><a className="hover:underline" href="#">Kalenderlink einfügen</a></div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 grid gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span>Name</span>
            <Input value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label className="grid gap-1 text-sm">
            <span>E‑Mail</span>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
        </div>
        <label className="grid gap-1 text-sm">
          <span>Nachricht</span>
          <Textarea rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} />
        </label>
        <div className="flex items-center justify-between">
          <div className="text-xs text-neutral-400">Mit Klick wird Ihr E‑Mail‑Programm geöffnet (keine Daten werden gespeichert).</div>
          <Button type="submit" className="gap-2">Absenden <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-neutral-900 px-3 py-1.5 font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">evo.fin</span>
            </div>
            <div className="text-sm text-neutral-400">© {new Date().getFullYear()} – Beratung für praktische KI</div>
          </div>
          <div className="text-sm text-neutral-400">
            <a href="#" className="hover:text-white">Impressum</a>
            <span className="mx-2">·</span>
            <a href="#" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GridGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-40 right-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-20">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

function SparkleDot() {
  return (
    <span className="relative inline-flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
  );
}

function formatEUR(n: number) {
  try {
    return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  } catch {
    return `${Math.round(n).toLocaleString("de-DE")} €`;
  }
}
