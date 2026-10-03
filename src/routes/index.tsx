import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, MapPin, Play, Sprout } from "lucide-react";
import { useI18n, type T } from "@/i18n";
import { SITE, UI } from "@/content/site";
import { FIELD_MEDIA, VIDEOS } from "@/content/media";
import { EQUIPMENT_CATEGORIES } from "@/content/needs";
import { CUBA_ROLES, CANADA_CATEGORIES } from "@/content/roles";
import { Section, Eyebrow, Headline, ActionLink, StatusTag } from "@/components/site/primitives";
import { BackgroundVideo, VideoPlayer } from "@/components/site/media";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton, EmailButton } from "@/components/site/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CUBAFOOD.CA — Cultivando Cuba. Juntos." },
      {
        name: "description",
        content:
          "CUBAFOOD.CA développe une initiative agricole Canada–Cuba à Matanzas pour renforcer la production locale, les agriculteurs et la souveraineté alimentaire.",
      },
      { property: "og:title", content: "CUBAFOOD.CA — Cultivando Cuba. Juntos." },
      {
        property: "og:description",
        content:
          "Une initiative agricole Canada–Cuba à Matanzas. De l'aide alimentaire à la capacité de produire davantage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const COPY = {
  proof: {
    en: "A Canada–Cuba agricultural development initiative",
    es: "Una iniciativa de desarrollo agrícola Canadá–Cuba",
    fr: "Une initiative de développement agricole Canada–Cuba",
  },
  thesis: {
    en: "From food delivery to food capacity.",
    es: "De entregar alimentos a crear capacidad alimentaria.",
    fr: "De l'aide alimentaire à la capacité de produire.",
  },
  thesisBody: {
    en: "The ambition is not a single harvest. It is durable agricultural capacity: land assessment, water, equipment, training, farmer collaboration, storage, transport and responsible distribution.",
    es: "La ambición no es una sola cosecha. Es una capacidad agrícola duradera: evaluación de tierras, agua, equipos, formación, colaboración con agricultores, almacenamiento, transporte y distribución responsable.",
    fr: "L'ambition ne se limite pas à une récolte. Elle vise une capacité agricole durable : évaluation des terres, eau, équipement, formation, collaboration avec les agriculteurs, stockage, transport et distribution responsable.",
  },
  documented: {
    en: "Field documentation",
    es: "Documentación de campo",
    fr: "Documentation de terrain",
  },
  development: {
    en: "In development",
    es: "En desarrollo",
    fr: "En développement",
  },
} satisfies Record<string, T>;

const MODEL: { number: string; title: T; body: T; to: string }[] = [
  {
    number: "01",
    title: { en: "Understand the land", es: "Comprender la tierra", fr: "Comprendre la terre" },
    body: {
      en: "Map, sample and evaluate soil, water and crop suitability before planting.",
      es: "Cartografiar, muestrear y evaluar suelo, agua y cultivos antes de sembrar.",
      fr: "Cartographier, échantillonner et évaluer les sols, l'eau et les cultures avant de semer.",
    },
    to: "/land",
  },
  {
    number: "02",
    title: { en: "Equip production", es: "Equipar la producción", fr: "Équiper la production" },
    body: {
      en: "Build the irrigation, energy, machinery, storage and transport systems agriculture requires.",
      es: "Desarrollar los sistemas de riego, energía, maquinaria, almacenamiento y transporte necesarios.",
      fr: "Développer les systèmes d'irrigation, d'énergie, de machinerie, de stockage et de transport nécessaires.",
    },
    to: "/needs",
  },
  {
    number: "03",
    title: { en: "Grow with farmers", es: "Cultivar con agricultores", fr: "Cultiver avec les agriculteurs" },
    body: {
      en: "Work with Cuban farmers and cooperatives as partners, never as competitors.",
      es: "Trabajar con agricultores y cooperativas cubanas como socios, nunca como competidores.",
      fr: "Travailler avec les agriculteurs et coopératives cubains comme partenaires, jamais comme concurrents.",
    },
    to: "/farmers",
  },
  {
    number: "04",
    title: { en: "Reach families", es: "Llegar a las familias", fr: "Rejoindre les familles" },
    body: {
      en: "Connect production to communities through responsible storage, logistics and distribution.",
      es: "Conectar la producción con las comunidades mediante almacenamiento, logística y distribución responsables.",
      fr: "Relier la production aux communautés par un stockage, une logistique et une distribution responsables.",
    },
    to: "/food-for-families",
  },
];

function Home() {
  const { t } = useI18n();
  const featured = VIDEOS[0];

  return (
    <>
      <section className="relative min-h-[94svh] overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <BackgroundVideo
            src={FIELD_MEDIA.clip2.src}
            poster={FIELD_MEDIA.clip2.poster}
            label="CUBAFOOD field documentation in Matanzas"
            className="opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/35 to-transparent" />
          <div className="absolute inset-0 field-fade" />
        </div>

        <div className="shell relative flex min-h-[94svh] flex-col justify-end pb-8 pt-32 md:pb-12">
          <div className="mb-auto flex items-center gap-3 pt-5">
            <span className="h-px w-10 bg-secondary" />
            <Eyebrow className="text-cream opacity-80">{t(COPY.proof)}</Eyebrow>
          </div>

          <div className="max-w-6xl">
            <p className="display text-2xl text-secondary md:text-4xl">CUBAFOOD.CA</p>
            <h1 className="poster mt-4 max-w-[12ch]">{t(SITE.tagline)}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-2xl">
              {t({
                en: "Helping Cuba grow more food—and build the systems to keep growing.",
                es: "Ayudando a Cuba a producir más alimentos y a construir los sistemas para seguir creciendo.",
                fr: "Aider Cuba à produire davantage — et à bâtir les systèmes pour continuer.",
              })}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink to="/project" variant="cream">{t(UI.seeProject)}</ActionLink>
            <ActionLink to="/participate" variant="outline">{t(UI.join)}</ActionLink>
          </div>

          <div className="mt-12 grid border-y border-cream/20 sm:grid-cols-3">
            <div className="py-4 sm:border-r sm:border-cream/20 sm:px-5 sm:first:pl-0">
              <p className="eyebrow text-secondary">{t({ en: "Place", es: "Lugar", fr: "Lieu" })}</p>
              <p className="mt-2 text-sm">Matanzas, Cuba</p>
            </div>
            <div className="border-t border-cream/20 py-4 sm:border-r sm:border-t-0 sm:px-5">
              <p className="eyebrow text-secondary">{t({ en: "Scale", es: "Escala", fr: "Échelle" })}</p>
              <p className="mt-2 text-sm">24+ km · {t({ en: "development area", es: "zona de desarrollo", fr: "zone de développement" })}</p>
            </div>
            <div className="border-t border-cream/20 py-4 sm:border-t-0 sm:pl-5">
              <p className="eyebrow text-secondary">{t({ en: "Status", es: "Estado", fr: "Statut" })}</p>
              <p className="mt-2 text-sm">{t(COPY.development)} · 2024—</p>
            </div>
          </div>

          <a href="#mission" className="mt-6 inline-flex w-fit items-center gap-2 text-xs uppercase text-cream/65">
            <ArrowDown className="h-4 w-4" aria-hidden />
            {t({ en: "Discover the initiative", es: "Descubrir la iniciativa", fr: "Découvrir l'initiative" })}
          </a>
        </div>
      </section>

      <section id="mission" className="bg-background py-20 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-[0.75fr_1.5fr] lg:gap-24">
          <Reveal>
            <Eyebrow className="text-primary">01 · {t({ en: "The purpose", es: "El propósito", fr: "La raison d'être" })}</Eyebrow>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">{t(SITE.mission)}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="headline max-w-[15ch]">{t(COPY.thesis)}</h2>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl">{t(COPY.thesisBody)}</p>
            <div className="mt-9"><ActionLink to="/project" variant="ghost">{t({ en: "Explore the complete project", es: "Explorar el proyecto completo", fr: "Explorer le projet complet" })}</ActionLink></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-soil text-soil-foreground">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[58svh] overflow-hidden lg:min-h-[760px]">
            <img src={FIELD_MEDIA.clip3.poster} alt="Matanzas agricultural development area" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-soil/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
              <p className="eyebrow text-secondary">{t(COPY.documented)} · Matanzas</p>
              <p className="mt-3 max-w-lg text-sm text-soil-foreground/70">{t({ en: "Images shown are project field documentation from the development area.", es: "Las imágenes son documentación de campo del área de desarrollo.", fr: "Les images présentées sont de la documentation de terrain de la zone de développement." })}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 py-16 md:p-14 lg:p-20">
            <Eyebrow className="text-secondary">02 · {t({ en: "The territory", es: "El territorio", fr: "Le territoire" })}</Eyebrow>
            <p className="poster mt-7">24+ KM</p>
            <h2 className="display mt-6 text-3xl md:text-5xl">{t({ en: "A serious scale demands a serious method.", es: "Una escala seria exige un método serio.", fr: "Une telle échelle exige une méthode rigoureuse." })}</h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-soil-foreground/75">{t(SITE.locationLine)}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ActionLink to="/locations/matanzas" variant="cream"><MapPin className="h-4 w-4" aria-hidden /> Matanzas</ActionLink>
              <ActionLink to="/land" variant="outline">{t({ en: "Study the land", es: "Estudiar la tierra", fr: "Étudier la terre" })}</ActionLink>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow className="text-primary">03 · {t({ en: "The operating model", es: "El modelo operativo", fr: "Le modèle d'action" })}</Eyebrow>
            <Headline>{t({ en: "Land to family.", es: "De la tierra a la familia.", fr: "De la terre à la famille." })}</Headline>
          </div>
          <StatusTag>{t(COPY.development)}</StatusTag>
        </div>
        <div className="mt-14 border-t border-border">
          {MODEL.map((step) => (
            <Link key={step.number} to={step.to} className="group grid gap-4 border-b border-border py-8 transition-colors hover:bg-muted/50 md:grid-cols-[80px_1fr_1.2fr_40px] md:items-center md:px-4">
              <span className="display text-2xl text-primary/50">{step.number}</span>
              <h3 className="display text-2xl md:text-3xl">{t(step.title)}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{t(step.body)}</p>
              <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-charcoal py-20 text-cream md:py-32">
        <div className="shell">
          <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow className="text-secondary">04 · {t({ en: "People and cooperation", es: "Personas y cooperación", fr: "Personnes et coopération" })}</Eyebrow>
              <h2 className="poster mt-7 max-w-[13ch]">{t({ en: "Built in Cuba. Connected to Canada.", es: "Construido en Cuba. Conectado con Canadá.", fr: "Bâti à Cuba. Relié au Canada." })}</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-cream/70">{t({ en: "A project of this scale needs farmers, technicians, institutions, companies, educators, students, logisticians and communities working toward one practical goal.", es: "Un proyecto de esta escala necesita agricultores, técnicos, instituciones, empresas, educadores, estudiantes, especialistas en logística y comunidades unidos por un objetivo práctico.", fr: "Un projet de cette ampleur exige agriculteurs, techniciens, institutions, entreprises, éducateurs, étudiants, logisticiens et communautés autour d'un objectif concret." })}</p>
          </Reveal>
          <div className="mt-16 grid border border-cream/15 lg:grid-cols-2">
            <Link to="/cuba" className="group p-7 transition-colors hover:bg-cream/5 md:p-12 lg:border-r lg:border-cream/15">
              <p className="eyebrow text-secondary">Cuba</p>
              <h3 className="display mt-5 text-4xl md:text-6xl">Cuba necesita manos.</h3>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/65">{CUBA_ROLES.slice(0, 7).map((role) => t(role.label)).join(" · ")}</p>
              <span className="eyebrow mt-9 inline-flex items-center gap-2 text-secondary">Quiero participar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
            <Link to="/canada" className="group border-t border-cream/15 p-7 transition-colors hover:bg-cream/5 md:p-12 lg:border-t-0">
              <p className="eyebrow text-secondary">Canada</p>
              <h3 className="display mt-5 text-4xl md:text-6xl">Canada can help Cuba grow.</h3>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/65">{CANADA_CATEGORIES.slice(0, 6).map((category) => t(category.label)).join(" · ")}</p>
              <span className="eyebrow mt-9 inline-flex items-center gap-2 text-secondary">{t({ en: "See contribution paths", es: "Ver formas de contribuir", fr: "Voir les façons de contribuer" })} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>
      </section>

      <Section tone="soil">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow className="text-clay">05 · {t({ en: "What the land requires", es: "Lo que requiere la tierra", fr: "Ce qu'exige la terre" })}</Eyebrow>
            <h2 className="headline mt-7">{t({ en: "Infrastructure before promises.", es: "Infraestructura antes que promesas.", fr: "Des infrastructures avant les promesses." })}</h2>
            <p className="mt-7 max-w-lg text-soil-foreground/70">{t({ en: "The needs below are identified requirements—not purchased assets, confirmed donations or completed installations.", es: "Las necesidades son requisitos identificados, no activos comprados, donaciones confirmadas ni instalaciones terminadas.", fr: "Ces besoins sont des exigences identifiées, et non des actifs achetés, des dons confirmés ou des installations achevées." })}</p>
            <div className="mt-9"><ActionLink to="/needs" variant="cream">{t({ en: "View all equipment needs", es: "Ver todas las necesidades", fr: "Voir tous les besoins" })}</ActionLink></div>
          </div>
          <div className="grid gap-px overflow-hidden border border-cream/15 bg-cream/15 sm:grid-cols-2">
            {EQUIPMENT_CATEGORIES.slice(0, 6).map((category) => (
              <Link key={category.id} to="/needs" className="group bg-soil p-6 transition-colors hover:bg-charcoal/25 md:p-8">
                <div className="flex items-center justify-between gap-4"><Sprout className="h-5 w-5 text-clay" aria-hidden /><span className="eyebrow text-clay">{t({ en: "Needed", es: "Necesario", fr: "Requis" })}</span></div>
                <h3 className="display mt-8 text-2xl">{t(category.title)}</h3>
                <p className="mt-4 text-sm leading-relaxed text-soil-foreground/65">{t(category.description)}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {featured ? (
        <Section tone="dark">
          <div className="grid gap-10 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
            <div>
              <div className="mb-7 flex items-center gap-3"><Play className="h-4 w-4 text-secondary" aria-hidden /><Eyebrow>{t(COPY.documented)}</Eyebrow></div>
              <VideoPlayer src={featured.src} poster={featured.poster} title={t(featured.title)} />
            </div>
            <div>
              <p className="eyebrow text-secondary">06 · {t({ en: "From the field", es: "Desde el campo", fr: "Depuis le terrain" })}</p>
              <h2 className="display mt-6 text-4xl md:text-6xl">{t({ en: "See the place. Follow the work.", es: "Conoce el lugar. Sigue el trabajo.", fr: "Voir le lieu. Suivre le travail." })}</h2>
              <p className="mt-6 text-sm leading-relaxed text-cream/65">{t(featured.description)}</p>
              <div className="mt-9"><ActionLink to="/videos" variant="outline">{t({ en: "Open the field archive", es: "Abrir el archivo de campo", fr: "Ouvrir les archives terrain" })}</ActionLink></div>
            </div>
          </div>
        </Section>
      ) : null}

      <section className="relative min-h-[82svh] overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <BackgroundVideo src={FIELD_MEDIA.clip1.src} poster={FIELD_MEDIA.clip1.poster} label="CUBAFOOD field documentation" className="opacity-40" />
          <div className="absolute inset-0 field-fade" />
        </div>
        <div className="shell relative flex min-h-[82svh] flex-col justify-end py-16 md:py-24">
          <Eyebrow className="text-secondary">07 · {t({ en: "Take part", es: "Participa", fr: "Prendre part" })}</Eyebrow>
          <h2 className="poster mt-7 max-w-[12ch]">{t({ en: "The next chapter needs people.", es: "El próximo capítulo necesita personas.", fr: "Le prochain chapitre a besoin de vous." })}</h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/75">{t({ en: "Work with us. Farm with us. Equip, teach, transport, research or build with us.", es: "Trabaja, cultiva, equipa, enseña, transporta, investiga o construye con nosotros.", fr: "Travaillez, cultivez, équipez, enseignez, transportez, recherchez ou bâtissez avec nous." })}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink to="/participate" variant="cream">{t(UI.join)}</ActionLink>
            <ActionLink to="/project" variant="outline">{t(UI.seeProject)}</ActionLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-3"><WhatsAppButton /><EmailButton /></div>
        </div>
      </section>
    </>
  );
}
