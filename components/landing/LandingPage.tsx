"use client";

import {
  ArrowRight,
  Check,
  ChevronRight,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Phone,
  Star,
  Utensils,
  X,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getMapsEmbedUrl,
  getMapsUrl,
  getWhatsAppUrl,
  sushiServiceData as data,
} from "@/data/sushi-service";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-emerald-200">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-8 text-white/65 sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/55 backdrop-blur-2xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl bg-white text-neutral-950">
            <Utensils aria-hidden="true" className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-white">
              {data.business.name}
            </span>
            <span className="block text-xs text-white/55">Zona 7 · Envigado</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {data.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/65 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="secondary" className="px-4">
            <a href="#menu">{data.ctas.secondary}</a>
          </Button>
          <Button asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {data.ctas.primary}
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/10 md:hidden"
        >
          {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-neutral-950/95 px-4 pb-4 md:hidden">
          <div className="grid gap-2 pt-3">
            {data.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white/75 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                {data.ctas.primary}
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl"
      aria-label="Ilustración abstracta de sushi premium"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(110,231,183,0.35),transparent_36%),radial-gradient(circle_at_80%_85%,rgba(248,113,113,0.24),transparent_36%)]" />
      <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-neutral-950/35 shadow-inner shadow-black/40" />

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: [0, 2, -2, 0],
                y: [0, -10, 0],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="sushi-shadow absolute left-[15%] top-[18%] h-28 w-28 rounded-[2rem] bg-white p-3"
      >
        <div className="size-full rounded-[1.35rem] border-[16px] border-neutral-900 bg-rose-400" />
      </motion.div>

      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                rotate: [10, 7, 12, 10],
                y: [0, 8, 0],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="sushi-shadow absolute bottom-[20%] right-[14%] h-24 w-36 rotate-12 rounded-[2rem] bg-white p-3"
      >
        <div className="h-full rounded-[1.4rem] bg-gradient-to-r from-orange-300 via-rose-300 to-orange-200" />
      </motion.div>

      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[18%] top-[58%] h-4 w-64 -rotate-[24deg] rounded-full bg-amber-100/80"
      />
      <motion.div
        animate={shouldReduceMotion ? {} : { x: [0, -6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[18%] top-[62%] h-4 w-64 -rotate-[24deg] rounded-full bg-amber-200/70"
      />

      <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/10 bg-neutral-950/55 p-4 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-emerald-200/80">
              Google rating
            </p>
            <p className="mt-1 text-2xl font-black text-white">
              {data.business.rating.toFixed(1)}★
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 px-4 py-3 text-right">
            <p className="text-xs text-white/50">Reseñas</p>
            <p className="font-bold text-white">
              {data.business.reviews.toLocaleString("es-CO")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="top" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="noise" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 flex flex-wrap gap-2">
            {data.heroBadges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.32em] text-emerald-200">
            {data.business.category}
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Sushi en Envigado con pedidos directos por WhatsApp.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/70">
            Una landing premium para convertir la demanda local de Google Maps en
            pedidos directos, con menú digital editable, reputación visible y
            CTA persistente.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="group">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                {data.ctas.primary}
                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 size-4 transition group-hover:translate-x-1"
                />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#menu">{data.ctas.secondary}</a>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Rating", `${data.business.rating.toFixed(1)}★`],
              ["Reseñas", data.business.reviews.toLocaleString("es-CO")],
              ["Zona", "Zona 7"],
              ["Búsqueda", data.business.googleSearchLevel],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
              >
                <dt className="text-xs text-white/45">{label}</dt>
                <dd className="mt-1 text-lg font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

function SushiAssembler() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });

  const makiY = useTransform(smooth, [0, 0.5, 1], [90, 0, -30]);
  const nigiriX = useTransform(smooth, [0, 0.5, 1], [80, 0, -40]);
  const chopsticksRotate = useTransform(smooth, [0, 0.8], [-34, -19]);
  const soyScale = useTransform(smooth, [0, 0.45, 1], [0.8, 1, 1.05]);

  return (
    <div ref={containerRef} className="sticky top-24 min-h-[32rem]">
      <div className="relative mx-auto aspect-square max-w-[34rem] rounded-[3.5rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="absolute inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.13),transparent_35%),linear-gradient(140deg,rgba(16,185,129,0.12),rgba(244,63,94,0.08))]" />

        <motion.div
          style={shouldReduceMotion ? undefined : { scale: soyScale }}
          className="absolute bottom-[12%] left-[13%] h-28 w-28 rounded-full border border-white/10 bg-neutral-950 p-3 shadow-xl"
        >
          <div className="size-full rounded-full bg-gradient-to-br from-[#2a0f0f] via-[#3b1515] to-[#0c0505]" />
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { y: makiY }}
          className="sushi-shadow absolute left-[18%] top-[24%] h-32 w-32 rounded-[2.5rem] bg-white p-3"
        >
          <div className="grid size-full place-items-center rounded-[1.8rem] bg-neutral-950">
            <div className="size-16 rounded-full bg-rose-400 ring-[14px] ring-white" />
          </div>
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { x: nigiriX }}
          className="sushi-shadow absolute bottom-[22%] right-[12%] h-28 w-44 rotate-12 rounded-[2rem] bg-white p-3"
        >
          <div className="h-full rounded-[1.4rem] bg-gradient-to-r from-orange-300 via-rose-300 to-amber-100" />
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { rotate: chopsticksRotate }}
          className="absolute left-[23%] top-[57%] h-4 w-72 origin-left rounded-full bg-amber-100/85"
        />
        <motion.div
          style={shouldReduceMotion ? undefined : { rotate: chopsticksRotate }}
          className="absolute left-[24%] top-[63%] h-4 w-72 origin-left rounded-full bg-amber-200/75"
        />

        <div className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur">
          Scroll story
        </div>
      </div>
    </div>
  );
}

function StoryCopy() {
  return (
    <div className="space-y-32 py-16 lg:py-24">
      {data.story.map((item, index) => (
        <motion.article
          key={item.eyebrow}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-[40vh]"
        >
          <span className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-emerald-300 text-lg font-black text-neutral-950">
            {index + 1}
          </span>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-emerald-200">
            {item.eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {item.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">{item.copy}</p>
        </motion.article>
      ))}
    </div>
  );
}

function StickyStory() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="story-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <StoryCopy />
          </div>
          <div className="order-1 lg:order-2">
            <SushiAssembler />
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuDigital() {
  return (
    <section id="menu" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Menú digital editable"
          title="Una carta preparada para publicar platos reales sin rehacer la web."
          copy="La estructura está lista para rolls, nigiris, entradas, bebidas y extras. Los nombres, descripciones y precios son placeholders editables."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {data.menuCategories.map((category) => (
            <Card key={category.title} className="flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{category.note}</p>
              </div>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-3xl border border-white/10 bg-neutral-950/35 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="font-semibold text-white">{item.name}</h4>
                      <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs text-emerald-200">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Combos() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="promos" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Combos y promos"
          title="Promociones visibles para usuarios con intención de compra."
          copy="Tarjetas listas para activar ofertas reales. No incluyen precios ni platos inventados."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {data.combos.map((combo, index) => (
            <Card key={combo.title} className="group relative overflow-hidden">
              <div className="absolute -right-12 -top-12 size-36 rounded-full bg-emerald-300/10 blur-2xl transition group-hover:bg-emerald-300/20" />
              <Badge>{combo.tag}</Badge>
              <h3 className="mt-5 text-2xl font-bold text-white">{combo.title}</h3>
              <p className="mt-3 min-h-24 text-sm leading-7 text-white/60">
                {combo.description}
              </p>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-white/45">
                  Promo {String(index + 1).padStart(2, "0")}
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-neutral-950 transition hover:bg-emerald-200"
                >
                  Consultar <ChevronRight aria-hidden="true" className="ml-1 size-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galería"
          title="Look premium sin usar fotos falsas."
          copy="Los bloques visuales funcionan como placeholders. Reemplázalos por fotografías reales de Sushi Service antes de publicar."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.gallery.map((image, index) => (
            <figure
              key={image.title}
              className={cn(
                "group min-h-72 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl",
                index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              )}
            >
              <div
                role="img"
                aria-label={image.alt}
                className="placeholder-grain grid h-full min-h-60 place-items-center rounded-[1.5rem]"
              >
                <div className="rounded-full border border-white/20 bg-neutral-950/55 px-4 py-2 text-sm font-semibold text-white/75 backdrop-blur">
                  {image.title}
                </div>
              </div>
              <figcaption className="sr-only">{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToOrder() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="como-pedir" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel>Cómo pedir por WhatsApp</SectionLabel>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Del antojo al chat en tres pasos.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            El CTA abre una conversación directa con un mensaje precargado para
            pedir el menú disponible.
          </p>
          <Button asChild className="mt-8">
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" className="mr-2 size-5" />
              {data.ctas.primary}
            </a>
          </Button>
        </div>

        <div className="grid gap-4">
          {data.howToOrder.map((step, index) => (
            <Card key={step.title} className="flex gap-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-emerald-300 text-lg font-black text-neutral-950">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 leading-7 text-white/60">{step.copy}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DirectBenefits() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionLabel>Beneficios de pedir directo</SectionLabel>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-white">
              Una web propia reduce la dependencia de perfiles externos.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {data.directBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 rounded-3xl border border-white/10 bg-neutral-950/30 p-5"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-emerald-300 text-neutral-950">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <p className="leading-7 text-white/70">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="ubicacion" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <SectionLabel>Ubicación</SectionLabel>
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Zona 7, Envigado.
          </h2>
          <div className="mt-6 space-y-5 text-white/70">
            <p className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-emerald-200" aria-hidden="true" />
              <span>{data.business.address}</span>
            </p>
            <p className="flex gap-3">
              <Phone className="mt-1 size-5 shrink-0 text-emerald-200" aria-hidden="true" />
              <span>{data.business.phoneDisplay}</span>
            </p>
            <p className="text-sm leading-7 text-white/50">
              Email: no encontrado en el CRM. Web previa detectada:{" "}
              {data.business.websiteDetected}.
            </p>
          </div>
          <Button asChild variant="secondary" className="mt-8">
            <a href={getMapsUrl()} target="_blank" rel="noreferrer">
              Abrir en Google Maps
            </a>
          </Button>
        </Card>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30">
          <iframe
            title="Mapa de Sushi Service en Envigado"
            src={getMapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[28rem] w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Reputation() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reputación"
          title="La confianza ya existe. Falta convertirla en pedidos directos."
          copy="El diseño pone el rating, reseñas y ubicación al frente para aprovechar señales de intención local."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              label: "Rating Google",
              value: `${data.business.rating.toFixed(1)}★`,
              icon: Star,
            },
            {
              label: "Reseñas",
              value: data.business.reviews.toLocaleString("es-CO"),
              icon: MessageCircle,
            },
            {
              label: "Oportunidad",
              value: "Sin sitio propio",
              icon: ArrowRight,
            },
          ].map((item) => (
            <Card key={item.label} className="text-center">
              <item.icon
                aria-hidden="true"
                className="mx-auto mb-5 size-8 text-emerald-200"
              />
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">
                {item.label}
              </p>
              <p className="mt-3 text-4xl font-black tracking-tight text-white">
                {item.value}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes para publicar sin riesgos."
          copy="Respuestas pensadas para mantener la página clara, verificable y editable."
        />

        <div className="mt-12 space-y-4">
          {data.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-white">
                {item.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white/10 text-white/70 transition group-open:rotate-90">
                  <ChevronRight aria-hidden="true" className="size-4" />
                </span>
              </summary>
              <p className="mt-4 leading-7 text-white/60">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="px-4 pb-28 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(110,231,183,0.28),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-8 text-center shadow-2xl shadow-black/40 sm:p-14">
        <Badge className="mx-auto">Pedido directo · Menú editable · SEO local</Badge>
        <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black tracking-tight text-white sm:text-6xl">
          Convierte búsquedas de “sushi en Envigado” en conversaciones reales.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/68">
          Una landing rápida, premium y mobile-first para que Sushi Service no dependa
          de no tener una web propia cuando alguien llega desde Google.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              {data.ctas.primary}
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href="#menu">{data.ctas.secondary}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FloatingCTA() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 left-4 right-4 z-40 flex min-h-14 items-center justify-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-neutral-950 shadow-[0_18px_50px_rgba(110,231,183,0.35)] transition hover:bg-emerald-200 sm:left-auto sm:right-6 sm:w-auto"
      aria-label="Pedir por WhatsApp a Sushi Service"
    >
      <MessageCircle aria-hidden="true" className="size-5" />
      {data.ctas.primary}
    </a>
  );
}

export default function LandingPage() {
  const sections = useMemo(
    () => [
      <Hero key="hero" />,
      <StickyStory key="story" />,
      <MenuDigital key="menu" />,
      <Combos key="combos" />,
      <Gallery key="gallery" />,
      <HowToOrder key="order" />,
      <DirectBenefits key="benefits" />,
      <Location key="location" />,
      <Reputation key="reputation" />,
      <FAQ key="faq" />,
      <FinalCTA key="cta" />,
    ],
    []
  );

  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Navigation />
      <main id="main">{sections}</main>
      <FloatingCTA />
    </>
  );
}
