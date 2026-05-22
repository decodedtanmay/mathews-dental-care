import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Clock,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Smile,
  Stethoscope,
  Activity,
  Plus,
  Minus,
  Check,
} from "lucide-react";

import heroSmile from "@/assets/hero-smile.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import smileDetail from "@/assets/smile-detail.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PRIMARY_PHONE = "+919619361560";
const WHATSAPP_PHONE = "918898416098";

const services = [
  { icon: Sparkles, name: "Teeth Whitening", desc: "Brighten your smile by several shades with safe, in-clinic whitening." },
  { icon: Smile, name: "Clear Aligners & Braces", desc: "Discreet aligners and modern braces for a confident, even smile." },
  { icon: Stethoscope, name: "Dental Implants", desc: "Permanent, natural-feeling tooth replacement with precision implants." },
  { icon: HeartPulse, name: "Smile Makeover", desc: "A complete cosmetic plan — veneers, ceramics & shaping, tailored to you." },
  { icon: Activity, name: "Root Canal Treatment", desc: "Single-sitting, virtually painless RCTs using modern rotary systems." },
  { icon: ShieldCheck, name: "Ceramic Veneers", desc: "Ultra-thin porcelain veneers that transform smiles in a few visits." },
  { icon: Smile, name: "Children's Dentistry", desc: "Gentle, friendly care designed to put even nervous kids at ease." },
  { icon: HeartPulse, name: "Emergency Dental Care", desc: "Same-day appointments for pain, trauma and dental emergencies." },
];

const stats = [
  { value: "5,000+", label: "Happy patients" },
  { value: "20+", label: "Years of experience" },
  { value: "4.9", label: "Average rating" },
  { value: "2", label: "Clinics in Kamothe" },
];

const reasons = [
  { title: "Painless dentistry", desc: "Modern anaesthesia & gentle techniques keep visits calm and comfortable." },
  { title: "Latest technology", desc: "Digital X-rays, rotary endodontics, and precision implant planning." },
  { title: "Transparent pricing", desc: "Clear treatment plans and honest estimates — no surprises, ever." },
  { title: "Personalised care", desc: "Time is taken to understand your concerns before any plan is made." },
  { title: "Sedation options", desc: "For anxious patients and longer procedures, on request." },
  { title: "Same-day appointments", desc: "Walk-ins welcome and urgent slots reserved every day." },
];

const testimonials = [
  {
    name: "Priya S.",
    role: "Kamothe",
    quote:
      "I was terrified of dentists for years. Dr. Mathews was so patient — I got my root canal done without a moment of pain.",
  },
  {
    name: "Rohan M.",
    role: "Kharghar",
    quote:
      "Got my smile makeover here. The team really listened. The clinic feels more like a spa than a dental office.",
  },
  {
    name: "Anjali K.",
    role: "Panvel",
    quote:
      "Honest pricing, modern equipment, and genuine care. I've brought my whole family here for two years now.",
  },
  {
    name: "Faisal R.",
    role: "Navi Mumbai",
    quote:
      "Booked online, walked in, walked out smiling. The aligners process was explained so clearly.",
  },
];

const faqs = [
  {
    q: "Does treatment hurt?",
    a: "Most of our treatments — including root canals — are virtually painless. We use modern local anaesthesia and gentle techniques designed around patient comfort.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with most major insurance providers and can help you understand your coverage. We also offer transparent, itemised cash pricing for everything we do.",
  },
  {
    q: "How long does recovery take?",
    a: "Most routine procedures have no real downtime. For implants and surgical extractions, expect a few days of mild discomfort with clear aftercare guidance.",
  },
  {
    q: "Do you offer financing or EMI?",
    a: "Yes — flexible payment plans are available for higher-value treatments like implants, full-mouth rehabilitation and cosmetic work. Just ask at your consultation.",
  },
  {
    q: "Are emergency appointments available?",
    a: "We reserve same-day slots every day for urgent cases. Call or WhatsApp us and we will do our absolute best to see you quickly.",
  },
];

function PillButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "dark";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5";
  const styles = {
    primary:
      "bg-[#cccc25] text-[#17150e] hover:bg-[#bcbc1f] hover:shadow-[0_8px_24px_-12px_rgba(204,204,37,0.55)]",
    ghost: "border border-[#e2e2e2] text-[#17150e] hover:bg-[#f0f7f6]",
    dark: "bg-[#17150e] text-white hover:bg-[#2a2618]",
  } as const;
  const Cmp = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </Cmp>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#smiles", label: "Smile Gallery" },
    { href: "#doctor", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#e2e2e2]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#17150e] text-white font-serif text-sm">
            M
          </span>
          <span className="font-serif text-lg tracking-tight text-[#17150e]">
            Mathews <span className="text-[#5a574c]">Dental</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-[#17150e]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PRIMARY_PHONE}`}
            className="text-sm text-[#17150e]/80 hover:text-[#17150e]"
          >
            Call
          </a>
          <PillButton href="#contact" variant="primary">
            Book appointment
          </PillButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-[#e2e2e2] bg-white/70"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-[#17150e]" />
            <span className="block h-px w-5 bg-[#17150e]" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#e2e2e2] bg-white">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#17150e] py-1"
              >
                {l.label}
              </a>
            ))}
            <PillButton href="#contact" variant="primary" className="mt-2 w-full">
              Book appointment
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-[#e2e2e2] bg-white px-3 py-1 text-xs text-[#5a574c]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#cccc25]" />
            Now welcoming new patients in Kamothe
          </div>
          <h1 className="fade-up delay-1 mt-6 font-serif text-[44px] leading-[1.02] sm:text-6xl lg:text-[78px]">
            Where healthy smiles<br />
            meet <em className="italic text-[#5a574c]">beautiful</em> design.
          </h1>
          <p className="fade-up delay-2 mt-6 max-w-xl text-[15px] leading-relaxed text-[#5a574c]">
            Mathews Dental Care is a modern, calming dental practice in Navi Mumbai —
            led by Dr. Manoj Mathews (BDS, 20+ years). Painless treatment,
            transparent pricing, and care built around how you actually feel in the chair.
          </p>
          <div className="fade-up delay-3 mt-8 flex flex-wrap items-center gap-3">
            <PillButton href="#contact" variant="primary">
              Book consultation
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
            <PillButton href="#smiles" variant="ghost">
              View smile transformations
            </PillButton>
          </div>

          <div className="fade-up delay-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#cccc25] text-[#cccc25]" />
                ))}
              </div>
              <span className="text-[#17150e] font-medium">4.9</span>
              <span className="text-[#5a574c]">Google rated</span>
            </div>
            <div className="h-4 w-px bg-[#e2e2e2]" />
            <div className="text-[#5a574c]">
              <span className="text-[#17150e] font-medium">20+ years</span> of practice
            </div>
            <div className="h-4 w-px bg-[#e2e2e2]" />
            <div className="text-[#5a574c]">
              <span className="text-[#17150e] font-medium">5,000+</span> smiles cared for
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="fade-up relative aspect-[5/6] overflow-hidden rounded-[28px] bg-[#f0f7f6]">
            <img
              src={heroSmile}
              alt="Patient smiling confidently after dental treatment"
              className="h-full w-full object-cover"
              width={1100}
              height={1400}
            />
          </div>

          {/* floating appointment card */}
          <div className="fade-up delay-2 absolute -bottom-6 -left-4 sm:-left-10 max-w-[280px] rounded-2xl border border-[#e2e2e2] bg-white p-4 shadow-[0_24px_60px_-30px_rgba(23,21,14,0.2)]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#f0f7f6]">
                <Clock className="h-5 w-5 text-[#17150e]" />
              </div>
              <div>
                <div className="text-xs text-[#5a574c]">Next available</div>
                <div className="text-sm font-medium text-[#17150e]">Today · 6:30 PM</div>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-3 flex items-center justify-between rounded-xl bg-[#17150e] px-3 py-2 text-xs text-white"
            >
              Reserve this slot
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* floating rating card */}
          <div className="fade-up delay-3 absolute -top-4 right-2 sm:-right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-[#e2e2e2] bg-white px-4 py-3 shadow-[0_24px_60px_-30px_rgba(23,21,14,0.2)]">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#9fa6ff]/30">
              <ShieldCheck className="h-5 w-5 text-[#17150e]" />
            </div>
            <div className="text-xs leading-tight">
              <div className="text-[#5a574c]">Sterilised &amp; safe</div>
              <div className="text-[#17150e] font-medium">Hospital-grade protocols</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-[#e2e2e2] bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-serif text-3xl sm:text-4xl text-[#17150e]">{s.value}</div>
            <div className="mt-1 text-xs sm:text-sm text-[#5a574c]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f0f7f6]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-[#5a574c]">Our services</div>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-[#17150e] leading-[1.05]">
              Modern dentistry,<br />designed around comfort.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-[#5a574c]">
            From routine cleanings to complete smile makeovers — every treatment is delivered
            with the same calm, considered approach.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`group rounded-2xl bg-white p-6 border border-transparent hover:border-[#e2e2e2] transition-all duration-300 hover:-translate-y-1 ${
                i % 4 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f0f7f6] group-hover:bg-[#cccc25] transition-colors">
                <s.icon className="h-5 w-5 text-[#17150e]" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-[#17150e]">{s.name}</h3>
              <p className="mt-2 text-sm text-[#5a574c] leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm text-[#17150e] underline underline-offset-4 decoration-[#cccc25] decoration-2"
              >
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  };

  return (
    <section id="smiles" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[#5a574c]">Transformations</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-[#17150e] leading-[1.05]">
            Real smile transformations,<br />from real patients.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-10 items-center">
          <div
            ref={ref}
            className="lg:col-span-3 relative aspect-[4/3] overflow-hidden rounded-[28px] select-none cursor-ew-resize bg-[#f0f7f6]"
            onMouseMove={(e) => dragging.current && move(e.clientX)}
            onMouseDown={(e) => {
              dragging.current = true;
              move(e.clientX);
            }}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchMove={(e) => move(e.touches[0].clientX)}
          >
            <img
              src={smileDetail}
              alt="After dental treatment"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={smileDetail}
                alt="Before dental treatment"
                className="absolute inset-0 h-full w-full object-cover grayscale brightness-90 contrast-95"
                style={{ width: ref.current?.clientWidth || "100%" }}
                loading="lazy"
              />
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] uppercase tracking-wider text-[#17150e]">
                Before
              </span>
            </div>
            <span className="absolute top-4 right-4 rounded-full bg-[#17150e] px-3 py-1 text-[11px] uppercase tracking-wider text-white">
              After
            </span>
            <div
              className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center rounded-full bg-white border border-[#e2e2e2]">
                <div className="flex gap-0.5">
                  <span className="h-3 w-px bg-[#17150e]" />
                  <span className="h-3 w-px bg-[#17150e]" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <blockquote className="font-serif italic text-2xl text-[#17150e] leading-snug">
              “I never used to smile in photos. Six weeks at Mathews Dental,
              and I genuinely can't stop.”
            </blockquote>
            <div className="text-sm text-[#5a574c]">
              — Meera, ceramic veneers &amp; whitening
            </div>
            <div className="pt-4 border-t border-[#e2e2e2] grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-serif text-2xl text-[#17150e]">6 wks</div>
                <div className="text-xs text-[#5a574c] mt-1">Treatment time</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-[#17150e]">3 visits</div>
                <div className="text-xs text-[#5a574c] mt-1">In-clinic</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-[#17150e]">0</div>
                <div className="text-xs text-[#5a574c] mt-1">Pain reported</div>
              </div>
            </div>
            <PillButton href="#contact" variant="dark">
              Start your smile plan
              <ArrowUpRight className="h-4 w-4" />
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-[#17150e] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] text-white/60">Why patients choose us</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl leading-[1.05]">
            Calm care.<br />
            <span className="text-[#9fa6ff]">Considered</span> treatment.
          </h2>
          <p className="mt-6 max-w-md text-[15px] text-white/70 leading-relaxed">
            We've built Mathews Dental around the things patients actually tell us they wish
            existed: time, honesty, and a treatment plan that respects both your comfort
            and your budget.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillButton href="#contact" variant="primary">
              Book your visit
            </PillButton>
            <PillButton
              href={`https://wa.me/${WHATSAPP_PHONE}`}
              variant="ghost"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </PillButton>
          </div>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`rounded-2xl p-6 border border-white/10 transition-colors duration-300 ${
                i % 3 === 1 ? "bg-[#9fa6ff]/10" : "bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
                  <Check className="h-4 w-4 text-[#cccc25]" />
                </div>
                <span className="font-serif text-sm text-white/40">0{i + 1}</span>
              </div>
              <h3 className="mt-5 font-serif text-xl">{r.title}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doctor" className="py-24 sm:py-32 bg-[#f0f7f6]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white">
            <img
              src={doctorPortrait}
              alt="Dr. Manoj Mathews, BDS"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 backdrop-blur px-4 py-3 flex items-center justify-between">
              <div>
                <div className="font-serif text-lg text-[#17150e]">Dr. Manoj Mathews</div>
                <div className="text-xs text-[#5a574c]">BDS · 20+ years of practice</div>
              </div>
              <span className="rounded-full bg-[#cccc25] px-3 py-1 text-[11px] text-[#17150e]">
                Lead Dentist
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-[0.18em] text-[#5a574c]">Meet your dentist</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-[#17150e] leading-[1.05]">
            Two decades of practice.<br />One quiet promise.
          </h2>
          <p className="mt-6 text-[15px] text-[#5a574c] leading-relaxed max-w-2xl">
            For over twenty years, Dr. Manoj Mathews has cared for thousands of families across
            Kamothe and Navi Mumbai. His approach is unhurried — every consultation begins by
            understanding what worries you most, before any treatment is planned.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[
              { label: "Qualification", value: "BDS" },
              { label: "Experience", value: "20+ years" },
              { label: "Consultation", value: "₹100" },
            ].map((d) => (
              <div key={d.label} className="rounded-2xl bg-white p-5 border border-[#e2e2e2]">
                <div className="text-xs uppercase tracking-wider text-[#5a574c]">{d.label}</div>
                <div className="mt-2 font-serif text-2xl text-[#17150e]">{d.value}</div>
              </div>
            ))}
          </div>

          <blockquote className="mt-10 border-l-2 border-[#cccc25] pl-5 font-serif italic text-xl text-[#17150e] max-w-xl">
            “The best dentistry is the kind you barely notice — and the kind you trust enough
            to bring your family back to.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-[#5a574c]">Patient stories</div>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-[#17150e] leading-[1.05]">
              Loved by families<br />across Navi Mumbai.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#5a574c]">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#cccc25] text-[#cccc25]" />
              ))}
            </div>
            4.9 average from 500+ verified reviews
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`rounded-2xl p-6 border border-[#e2e2e2] ${
                i === 1 ? "bg-[#f0f7f6]" : "bg-white"
              }`}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-[#cccc25] text-[#cccc25]" />
                ))}
              </div>
              <p className="mt-4 text-[15px] text-[#17150e] leading-relaxed">
                “{t.quote}”
              </p>
              <div className="mt-6 pt-4 border-t border-[#e2e2e2]">
                <div className="text-sm font-medium text-[#17150e]">{t.name}</div>
                <div className="text-xs text-[#5a574c]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items = [
    { src: clinicInterior, alt: "Modern dental treatment room", h: "row-span-2" },
    { src: gallery2, alt: "Patient in our clinic", h: "" },
    { src: gallery4, alt: "Clinic reception" , h: ""},
    { src: gallery1, alt: "Treatment room with equipment", h: "" },
    { src: gallery3, alt: "Sterile dental instruments", h: "row-span-2" },
  ];
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.18em] text-[#5a574c]">Inside the clinic</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-[#17150e] leading-[1.05]">
            A space designed to soften the visit.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-3">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-[#f0f7f6] ${it.h}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#f0f7f6]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.18em] text-[#5a574c]">Book a visit</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-[#17150e] leading-[1.05]">
            Reserve your<br />consultation.
          </h2>
          <p className="mt-6 text-[15px] text-[#5a574c] leading-relaxed max-w-md">
            Tell us a little about what you need. We typically respond within 15 minutes
            during clinic hours. Walk-ins and emergencies welcome.
          </p>

          <div className="mt-10 space-y-5">
            {[
              {
                title: "Kamothe — Sector 21",
                addr: "Shop 11/12, Plot 69 & 70, Maitri Street, Sector 21 (near Maharaja Hotel)",
                phone: "+91 96193 61560",
                tel: "+919619361560",
                hours: "Mon–Sat · 10:30 AM–1:30 PM · 6:00–9:30 PM",
              },
              {
                title: "Kamothe — Sector 7",
                addr: "Shop 7, Plot 8, Juhi Garden, Sector 7 Main Road (near Police Station)",
                phone: "+91 88984 16098",
                tel: "+918898416098",
                hours: "Mon–Sat · 10:30 AM–1:30 PM · 5:30–9:30 PM",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-white p-5 border border-[#e2e2e2]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-serif text-lg text-[#17150e]">{b.title}</div>
                    <div className="mt-1 text-sm text-[#5a574c] flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                      {b.addr}
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5a574c]">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {b.hours}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <a
                    href={`tel:${b.tel}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#17150e] px-4 py-2 text-xs text-white"
                  >
                    <Phone className="h-3.5 w-3.5" /> {b.phone}
                  </a>
                  <a
                    href={`https://wa.me/${b.tel.replace("+", "")}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#e2e2e2] bg-white px-4 py-2 text-xs text-[#17150e]"
                  >
                    <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-[28px] bg-white p-6 sm:p-10 border border-[#e2e2e2]"
          >
            {submitted ? (
              <div className="text-center py-16">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#cccc25]">
                  <Check className="h-6 w-6 text-[#17150e]" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[#17150e]">Request received</h3>
                <p className="mt-2 text-sm text-[#5a574c]">
                  Thank you. A member of our team will reach out within 15 minutes during clinic hours.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-[#17150e]">Quick booking</h3>
                  <span className="text-xs text-[#5a574c]">We respond within 15 mins</span>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" name="name" placeholder="Your name" required />
                  <Field label="Phone" name="phone" type="tel" placeholder="+91" required />
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                  <Field label="Preferred date" name="date" type="date" />
                  <div className="sm:col-span-2">
                    <Label>Preferred treatment</Label>
                    <select
                      name="treatment"
                      className="mt-2 w-full rounded-full border border-[#e2e2e2] bg-white px-4 py-3 text-sm text-[#17150e] focus:border-[#17150e] focus:outline-none"
                    >
                      <option>General consultation</option>
                      <option>Teeth cleaning &amp; whitening</option>
                      <option>Root canal treatment</option>
                      <option>Dental implants</option>
                      <option>Aligners / braces</option>
                      <option>Cosmetic / smile makeover</option>
                      <option>Emergency / pain</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label>Anything we should know?</Label>
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="A short note about what's bothering you (optional)"
                      className="mt-2 w-full rounded-2xl border border-[#e2e2e2] bg-white px-4 py-3 text-sm text-[#17150e] focus:border-[#17150e] focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-[#5a574c] flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#17150e]" />
                    Your details stay private. Only used to confirm your appointment.
                  </div>
                  <PillButton variant="primary">
                    Request appointment
                    <ArrowUpRight className="h-4 w-4" />
                  </PillButton>
                </div>
              </>
            )}
          </form>

          <div className="mt-6 overflow-hidden rounded-[28px] border border-[#e2e2e2] bg-white">
            <iframe
              title="Mathews Dental Care — Kamothe"
              src="https://www.google.com/maps?q=Kamothe,+Navi+Mumbai&output=embed"
              className="h-[280px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-wider text-[#5a574c]">{children}</label>;
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="mt-2 w-full rounded-full border border-[#e2e2e2] bg-white px-4 py-3 text-sm text-[#17150e] placeholder:text-[#5a574c]/60 focus:border-[#17150e] focus:outline-none"
      />
    </div>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.18em] text-[#5a574c]">Questions</div>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-[#17150e] leading-[1.05]">
            Everything you might be wondering.
          </h2>
        </div>
        <div className="mt-14 divide-y divide-[#e2e2e2] border-y border-[#e2e2e2]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#17150e]">{f.q}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[#e2e2e2] text-[#17150e] shrink-0 ml-4">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] text-[#5a574c] leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#17150e] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#17150e] font-serif text-sm">
              M
            </span>
            <span className="font-serif text-lg">Mathews Dental Care</span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-white/65 leading-relaxed">
            A modern dental practice in Kamothe, Navi Mumbai. Led by Dr. Manoj Mathews,
            built around calm, considered care.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex max-w-sm rounded-full border border-white/15 p-1"
          >
            <input
              placeholder="Email for clinic updates"
              className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-white/40 focus:outline-none"
            />
            <button className="rounded-full bg-[#cccc25] px-4 py-2 text-xs text-[#17150e] font-medium">
              Subscribe
            </button>
          </form>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-wider text-white/40">Visit</div>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>Sector 21, Maitri Street</li>
            <li>Sector 7, Juhi Garden</li>
            <li>Kamothe, Navi Mumbai</li>
          </ul>
          <div className="mt-8 text-xs uppercase tracking-wider text-white/40">Hours</div>
          <ul className="mt-5 space-y-2 text-sm text-white/80">
            <li>Mon–Sat · 10:30 AM–1:30 PM</li>
            <li>Mon–Sat · 5:30–9:30 PM</li>
            <li>Sunday · Closed</li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-wider text-white/40">Quick links</div>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/80">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#smiles" className="hover:text-white">Smile gallery</a></li>
            <li><a href="#doctor" className="hover:text-white">About</a></li>
            <li><a href="#testimonials" className="hover:text-white">Reviews</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li>
              <a href={`https://wa.me/${WHATSAPP_PHONE}`} className="hover:text-white">WhatsApp</a>
            </li>
          </ul>

          <div className="mt-10 rounded-2xl bg-white/[0.04] border border-white/10 p-5">
            <div className="text-xs uppercase tracking-wider text-white/40">Emergency</div>
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="mt-2 flex items-center gap-2 font-serif text-xl text-white hover:text-[#cccc25]"
            >
              <Phone className="h-4 w-4" /> +91 96193 61560
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Mathews Dental Care. All rights reserved.</div>
          <div>Designed for calm, modern dentistry.</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${WHATSAPP_PHONE}`}
        aria-label="WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#cccc25] text-[#17150e] shadow-[0_12px_30px_-12px_rgba(204,204,37,0.7)] hover:-translate-y-0.5 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={`tel:${PRIMARY_PHONE}`}
        aria-label="Call"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#17150e] text-white shadow-[0_12px_30px_-12px_rgba(23,21,14,0.6)] hover:-translate-y-0.5 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="bg-white text-[#17150e]">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <Doctor />
        <Testimonials />
        <Gallery />
        <Booking />
        <Faqs />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
