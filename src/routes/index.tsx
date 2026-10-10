import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { SITE, UI, CORE_CTA } from "@/content/site";
import { FIELD_MEDIA, VIDEOS } from "@/content/media";
import { JOURNAL_POSTS } from "@/content/journal";
import { INSTITUTIONS } from "@/content/collaboration";
import { EQUIPMENT_CATEGORIES } from "@/content/needs";
import { CUBA_ROLES, CANADA_CATEGORIES } from "@/content/roles";
import { TRANSPARENCY_MODULES } from "@/content/transparency";
import { Section, Eyebrow, Headline, Lede, ActionLink, StatusTag, EmptyState } from "@/components/site/primitives";
import { BackgroundVideo, VideoPlayer } from "@/components/site/media";
import { LocationMap } from "@/components/site/map";
import { AgriculturalNetwork } from "@/components/site/network";
import { ProjectTimeline } from "@/components/site/timeline";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton, EmailButton } from "@/components/site/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CUBAFOOD.CA — Helping Cuba grow more food" },
      {
        name: "description",
        content:
          "A Canada–Cuba agricultural initiative in Matanzas. Explore a development corridor described as over 24 km in length, prospective farming collaborations and the project's verified status.",
      },
      { property: "og:title", content: "CUBAFOOD.CA — Cultivando Cuba. Juntos." },
      {
        property: "og:description",
        content:
          "Working to help Cuba grow more food. Matanzas, Cuba — a development corridor stated as over 24 km in length; plans remain subject to coordination and approvals.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();
  const featured = VIDEOS[0]!;
  const latest = JOURNAL_POSTS[0];

  return (
    <>
      {/* CHAPTER 01 — HERO */}
      <section className="relative min-h-[92svh] overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <BackgroundVideo
            src={FIELD_MEDIA.clip2.src}
            poster={FIELD_MEDIA.clip2.poster}
            label={t({ en: "Field documentation from the Matanzas development region", es: "Imágenes de campo de la región de Matanzas", fr: "Images de terrain de la région de Matanzas" })}
            className="opacity-55"
          />
          <div className="absolute inset-0 field-fade" />
        </div>
        <div className="shell relative flex min-h-[92svh] flex-col justify-end pb-14 pt-32 md:pb-20">
          <Eyebrow className="text-secondary opacity-100">Canada + Cuba · {SITE.established} —</Eyebrow>
          <h1 className="poster mt-6 max-w-[16ch]">{t(SITE.tagline)}</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85 md:text-xl">
            {t({
              en: "We are not only trying to send food to Cuba. We are trying to help Cuba grow more food.",
              es: "No solo intentamos enviar alimentos a Cuba. Intentamos ayudar a Cuba a producir más alimentos.",
              fr: "Nous ne cherchons pas seulement à envoyer de la nourriture à Cuba. Nous voulons aider Cuba à en produire davantage.",
            })}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink to="/project" variant="cream">
              {t(UI.seeProject)}
            </ActionLink>
            <ActionLink to="/participate" variant="outline">
              {t(UI.join)}
            </ActionLink>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.22em] opacity-55">
            {t(SITE.location)}
          </p>
        </div>
      </section>

      {/* CHAPTER 02 — SCALE */}
      <Section tone="soil">
        <Reveal>
          <Eyebrow>{t({ en: "Chapter 02 — Scale", es: "Capítulo 02 — Escala", fr: "Chapitre 02 — Échelle" })}</Eyebrow>
          <p className="poster mt-6">
            {t({ en: "A corridor over 24 km long.", es: "Un corredor de más de 24 km.", fr: "Un corridor de plus de 24 km." })}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-lg">
            <img
              src={FIELD_MEDIA.clip3.poster}
              alt="Frame from project field documentation in the Matanzas development area"
              loading="lazy"
              className="aspect-16/10 w-full object-cover"
            />
            <p className="mt-3 text-xs opacity-55">
              {t({
                en: "Project documentation — Matanzas development area.",
                es: "Documentación del proyecto — área de desarrollo de Matanzas.",
                fr: "Documentation du projet — zone de développement de Matanzas.",
              })}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed md:text-2xl">
              {t({
                en: "A project of this size cannot be built by one person, one company or one country.",
                es: "Un proyecto de este tamaño no puede construirlo una persona, una empresa ni un solo país.",
                fr: "Un projet de cette taille ne peut être bâti par une seule personne, entreprise ou nation.",
              })}
            </p>
            <p className="display mt-8 text-4xl text-secondary md:text-6xl">
              {t({ en: "It needs people.", es: "Necesita gente.", fr: "Il faut des gens." })}
            </p>
            <p className="mt-8 max-w-prose text-sm opacity-70">{t(SITE.landScale)}</p>
            <div className="mt-8">
              <ActionLink to="/land" variant="outline">
                {t({ en: "24 km of opportunity", es: "24 km de oportunidad", fr: "24 km d'opportunité" })}
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CHAPTER 03 — LOCATION */}
      <Section tone="dark">
        <Eyebrow>{t({ en: "Chapter 03 — Location", es: "Capítulo 03 — Ubicación", fr: "Chapitre 03 — Emplacement" })}</Eyebrow>
        <Headline>
          Matanzas
          <span className="block text-secondary">{t({ en: "Varadero airport area", es: "Zona del aeropuerto de Varadero", fr: "Secteur de l’aéroport de Varadero" })}</span>
        </Headline>
        <div className="mt-12">
          <LocationMap />
        </div>
      </Section>

      {/* CHAPTER 04 — MISSION */}
      <Section>
        <Eyebrow>{t({ en: "Chapter 04 — The mission", es: "Capítulo 04 — La misión", fr: "Chapitre 04 — La mission" })}</Eyebrow>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { en: "Grow food.", es: "Producir alimentos.", fr: "Produire des aliments." },
            { en: "Create work.", es: "Crear trabajo.", fr: "Créer du travail." },
            { en: "Support farmers.", es: "Apoyar a los agricultores.", fr: "Soutenir les agriculteurs." },
            { en: "Strengthen communities.", es: "Fortalecer comunidades.", fr: "Renforcer les communautés." },
          ].map((line, i) => (
            <Reveal key={i} delay={i * 80} className="rounded-lg bg-primary/8 p-8">
              <span className="display text-sm text-primary/60">0{i + 1}</span>
              <p className="display mt-4 text-2xl md:text-3xl">{t(line)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 border-l-2 border-primary pl-6 md:pl-10">
          <p className="max-w-4xl text-lg leading-relaxed md:text-xl">«{t(SITE.mission)}»</p>
        </Reveal>
        <div className="mt-8">
          <ActionLink to="/mission" variant="ghost">
            {t({ en: "Read the full mission", es: "Leer la misión completa", fr: "Lire la mission complète" })}
          </ActionLink>
        </div>
      </Section>

      {/* CHAPTER 05 — STATUS */}
      <Section tone="card">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{t({ en: "Chapter 05 — Current status", es: "Capítulo 05 — Estado actual", fr: "Chapitre 05 — Statut actuel" })}</Eyebrow>
            <Headline>
              {t({ en: "Advanced development", es: "Desarrollo avanzado", fr: "Développement avancé" })}
              <span className="block text-clay">
                {t({ en: "Institutional coordination", es: "Coordinación institucional", fr: "Coordination institutionnelle" })}
              </span>
            </Headline>
          </div>
          <StatusTag>{t({ en: "Approval process — active", es: "Proceso de aprobación — activo", fr: "Processus d'approbation — actif" })}</StatusTag>
        </div>
        <Lede>{t(SITE.statusLine)}</Lede>
        <div className="mt-14">
          <ProjectTimeline compact />
        </div>
        <div className="mt-10">
          <ActionLink to="/timeline" variant="ghost">
            {t({ en: "Full project timeline", es: "Cronología completa", fr: "Chronologie complète" })}
          </ActionLink>
        </div>
      </Section>

      {/* CHAPTER 06 — PEOPLE NEEDED */}
      <section className="bg-charcoal text-cream">
        <div className="shell py-16 md:py-28">
          <Eyebrow>{t({ en: "Chapter 06 — People needed", es: "Capítulo 06 — Se necesitan personas", fr: "Chapitre 06 — Besoin de gens" })}</Eyebrow>
          <p className="poster mt-6">{t({ en: "We need hands.", es: "Necesitamos manos.", fr: "Il nous faut des bras." })}</p>
        </div>
        <div className="grid md:grid-cols-2">
          <Link
            to="/cuba"
            className="group relative overflow-hidden border-t border-cream/15 p-8 transition-colors hover:bg-cream/5 md:p-14"
          >
            <p className="eyebrow text-secondary">Cuba</p>
            <p className="display mt-5 text-3xl md:text-5xl">{t({ en: "Cuba needs people to grow its future.", es: "Cuba necesita manos para cultivar su futuro.", fr: "Cuba a besoin de ses talents pour cultiver son avenir." })}</p>
            <p className="mt-5 max-w-md text-sm opacity-70">
              {CUBA_ROLES.slice(0, 8).map((r) => t(r.label)).join(" · ")} …
            </p>
            <span className="eyebrow mt-8 inline-block text-secondary group-hover:underline">{t({ en: "I want to participate", es: "Quiero participar", fr: "Je veux participer" })} →</span>
          </Link>
          <Link
            to="/canada"
            className="group relative overflow-hidden border-t border-cream/15 p-8 transition-colors hover:bg-cream/5 md:border-l md:p-14"
          >
            <p className="eyebrow text-secondary">Canada</p>
            <p className="display mt-5 text-3xl md:text-5xl">{t({ en: "Canada can help Cuba grow.", es: "Canadá puede ayudar a Cuba a cultivar.", fr: "Le Canada peut aider Cuba à produire davantage." })}</p>
            <p className="mt-5 max-w-md text-sm opacity-70">
              {CANADA_CATEGORIES.slice(0, 6).map((r) => t(r.label)).join(" · ")} …
            </p>
            <span className="eyebrow mt-8 inline-block text-secondary group-hover:underline">
              {t({ en: "Help build the project", es: "Ayuda a construir el proyecto", fr: "Aidez à bâtir le projet" })} →
            </span>
          </Link>
        </div>
      </section>

      {/* CHAPTER 07 — FARMERS */}
      <Section tone="green">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>{t({ en: "Chapter 07 — Farmers", es: "Capítulo 07 — Agricultores", fr: "Chapitre 07 — Agriculteurs" })}</Eyebrow>
            <p className="poster mt-6">
              {t({
                en: "Farmers are partners, not competitors.",
                es: "Los agricultores son socios, no competidores.",
                fr: "Les agriculteurs sont des partenaires, pas des concurrents.",
              })}
            </p>
            <Lede>
              {t({
                en: "The objective is not to replace Cuban farmers. It is to strengthen them — with seeds, tools, machinery access, irrigation, storage, transport, training and market connections.",
                es: "El objetivo no es sustituir a los agricultores cubanos. Es fortalecerlos — con semillas, herramientas, acceso a maquinaria, riego, almacenamiento, transporte, capacitación y conexiones de mercado.",
                fr: "L'objectif n'est pas de remplacer les agriculteurs cubains, mais de les renforcer — semences, outils, machinerie, irrigation, stockage, transport, formation et débouchés.",
              })}
            </Lede>
            <div className="mt-9 flex flex-wrap gap-3">
              <ActionLink to="/farmers" variant="cream">
                {t({ en: "Register as a farmer", es: "Regístrate como agricultor", fr: "S'inscrire comme agriculteur" })}
              </ActionLink>
            </div>
          </div>
          <img
            src={FIELD_MEDIA.clip5.poster}
            alt="Frame from project field documentation showing the land near the development area"
            loading="lazy"
            className="aspect-4/3 w-full rounded-lg object-cover"
          />
        </div>
      </Section>

      {/* CHAPTER 08 — NETWORK */}
      <Section>
        <Eyebrow>{t({ en: "Chapter 08 — Agricultural network", es: "Capítulo 08 — Red agrícola", fr: "Chapitre 08 — Réseau agricole" })}</Eyebrow>
        <Headline>{t({ en: "Building an agricultural network", es: "Construyendo una red agrícola", fr: "Bâtir un réseau agricole" })}</Headline>
        <Lede>
          {t({
            en: "The goal is an ecosystem, not an isolated farm: farmers, cooperatives, institutions, universities, communities, Canadian partners, market and families.",
            es: "El objetivo es un ecosistema, no una finca aislada: agricultores, cooperativas, instituciones, universidades, comunidades, socios canadienses, mercado y familias.",
            fr: "L'objectif est un écosystème, pas une ferme isolée : agriculteurs, coopératives, institutions, universités, communautés, partenaires canadiens, marché et familles.",
          })}
        </Lede>
        <div className="mt-10 text-primary">
          <AgriculturalNetwork />
        </div>
      </Section>

      {/* CHAPTER 09 — EDUCATION */}
      <Section tone="card">
        <Eyebrow>{t({ en: "Chapter 09 — Education", es: "Capítulo 09 — Educación", fr: "Chapitre 09 — Éducation" })}</Eyebrow>
        <Headline>{t({ en: "Better agriculture is built together.", es: "La mejor agricultura se construye en conjunto.", fr: "Une meilleure agriculture se bâtit ensemble." })}</Headline>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-5">
          {INSTITUTIONS.slice(0, 5).map((org) => (
            <Link
              key={org.id}
              to="/collaboration"
              className="bg-card p-6 transition-colors hover:bg-muted"
            >
              <p className="display text-lg">{org.name}</p>
              <p className="mt-2 text-xs opacity-60">{t(org.kind)}</p>
              <p className="eyebrow mt-6 text-clay">
                {t({ en: "Planned / proposed", es: "Planificada / propuesta", fr: "Planifiée / proposée" })}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-xs opacity-55">
          {t({
            en: "Organizations identified for project coordination. No formal endorsement is claimed.",
            es: "Organizaciones identificadas para la coordinación del proyecto. No se declara ningún respaldo formal.",
            fr: "Organisations identifiées pour la coordination. Aucun appui formel n'est revendiqué.",
          })}
        </p>
      </Section>

      {/* CHAPTER 10 — TECHNOLOGY */}
      <Section tone="soil">
        <Eyebrow>{t({ en: "Chapter 10 — Technology", es: "Capítulo 10 — Tecnología", fr: "Chapitre 10 — Technologie" })}</Eyebrow>
        <Headline>
          {t({
            en: "A development corridor over 24 km long demands more than good intentions.",
            es: "Un corredor de desarrollo de más de 24 km exige más que buenas intenciones.",
            fr: "Un corridor de développement de plus de 24 km exige plus que de bonnes intentions.",
          })}
        </Headline>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPMENT_CATEGORIES.slice(0, 4).map((c, i) => (
            <Reveal key={c.id} delay={i * 70} className="rounded-lg border border-cream/15 p-6">
              <p className="display text-xl">{t(c.title)}</p>
              <p className="mt-3 text-sm opacity-70">{t(c.description)}</p>
              <p className="eyebrow mt-6 text-clay">{t({ en: "Needed", es: "Necesario", fr: "Requis" })}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ActionLink to="/needs" variant="cream">
            {t({ en: "I have equipment to offer", es: "Tengo equipos para ofrecer", fr: "J'ai de l'équipement à offrir" })}
          </ActionLink>
          <ActionLink to="/energy" variant="outline">
            {t({ en: "Propose a technology", es: "Proponer una tecnología", fr: "Proposer une technologie" })}
          </ActionLink>
        </div>
      </Section>

      {/* CHAPTER 11 — FIELD JOURNAL */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{t({ en: "Chapter 11 — Field journal", es: "Capítulo 11 — Diario del campo", fr: "Chapitre 11 — Journal de terrain" })}</Eyebrow>
            <Headline>{t({ en: "From the field", es: "Desde el campo", fr: "Depuis le terrain" })}</Headline>
          </div>
          <ActionLink to="/journal" variant="ghost">
            {t({ en: "All field updates", es: "Todas las actualizaciones", fr: "Toutes les mises à jour" })}
          </ActionLink>
        </div>
        <div className="mt-10">
          {latest ? (
            <Link
              to="/journal/$slug"
              params={{ slug: latest.slug }}
              className="group grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              <img
                src={latest.poster}
                alt={t(latest.title)}
                loading="lazy"
                className="aspect-16/10 w-full rounded-lg object-cover"
              />
              <div>
                <p className="eyebrow opacity-55">
                  {latest.date} · {t(latest.location)}
                </p>
                <h3 className="display mt-4 text-3xl group-hover:text-primary md:text-4xl">{t(latest.title)}</h3>
                <p className="mt-4 max-w-prose opacity-75">{t(latest.subtitle)}</p>
              </div>
            </Link>
          ) : (
            <EmptyState title={{ en: "No entries yet", es: "Aún no hay entradas", fr: "Aucune entrée" }} />
          )}
        </div>
      </Section>

      {/* CHAPTER 12 — VIDEO */}
      <Section tone="dark">
        <Eyebrow>{t({ en: "Chapter 12 — Video", es: "Capítulo 12 — Video", fr: "Chapitre 12 — Vidéo" })}</Eyebrow>
        <Headline>
          {t({ en: "Watch the project grow.", es: "Mira crecer el proyecto.", fr: "Regardez le projet grandir." })}
        </Headline>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
          <VideoPlayer src={featured.src!} poster={featured.poster!} title={t(featured.title)} />
          <div>
            <p className="eyebrow text-secondary">{t({ en: "Featured documentation", es: "Documentación destacada", fr: "Documentation en vedette" })}</p>
            <p className="display mt-4 text-2xl">{t(featured.title)}</p>
            <p className="mt-4 text-sm opacity-75">{t(featured.description)}</p>
            <div className="mt-8">
              <ActionLink to="/videos" variant="outline">
                {t({ en: "Video centre", es: "Centro de video", fr: "Centre vidéo" })}
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>

      {/* CHAPTER 13 — FOOD FOR FAMILIES */}
      <Section tone="card">
        <Eyebrow>{t({ en: "Chapter 13 — Food for families", es: "Capítulo 13 — Del campo a la familia", fr: "Chapitre 13 — Du champ à la famille" })}</Eyebrow>
        <Headline>
          {t({ en: "From the field to the family.", es: "Del campo a la familia.", fr: "Du champ à la famille." })}
        </Headline>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-border p-8">
            <p className="eyebrow text-primary">01</p>
            <p className="display mt-4 text-2xl">{t({ en: "Produce food", es: "Producir alimentos", fr: "Produire des aliments" })}</p>
            <p className="mt-3 text-sm opacity-75">
              {t({
                en: "Build agricultural capacity so more food can be produced locally.",
                es: "Construir capacidad agrícola para producir más alimentos localmente.",
                fr: "Bâtir la capacité agricole pour produire plus localement.",
              })}
            </p>
          </div>
          <div className="rounded-lg border border-border p-8">
            <p className="eyebrow text-primary">02</p>
            <p className="display mt-4 text-2xl">
              {t({ en: "Help when help is needed", es: "Ayudar cuando hace falta", fr: "Aider quand il le faut" })}
            </p>
            <p className="mt-3 text-sm opacity-75">
              {t({
                en: "Develop responsible food and agricultural assistance programs for participating communities, farmers and families.",
                es: "Desarrollar programas responsables de asistencia alimentaria y agrícola para comunidades, agricultores y familias participantes.",
                fr: "Développer des programmes responsables d'aide alimentaire et agricole pour les communautés participantes.",
              })}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <ActionLink to="/food-for-families" variant="ghost">
            {t({ en: "Food for families", es: "Del campo a la familia", fr: "Du champ à la famille" })}
          </ActionLink>
        </div>
      </Section>

      {/* CHAPTER 14 — TRANSPARENCY */}
      <Section>
        <Eyebrow>{t({ en: "Chapter 14 — Transparency", es: "Capítulo 14 — Transparencia", fr: "Chapitre 14 — Transparence" })}</Eyebrow>
        <Headline>
          {t({
            en: "If people help us, they deserve to see the results.",
            es: "Si la gente nos ayuda, merece ver los resultados.",
            fr: "Si les gens nous aident, ils méritent d'en voir les résultats.",
          })}
        </Headline>
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg bg-border sm:grid-cols-2 lg:grid-cols-4">
          {TRANSPARENCY_MODULES.slice(0, 8).map((m) => (
            <div key={m.id} className="bg-background p-6">
              <p className="eyebrow opacity-55">{t(m.label)}</p>
              <p className="mt-4 text-sm opacity-70">{t(UI.noData)}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ActionLink to="/transparency" variant="ghost">
            {t({ en: "Transparency centre", es: "Centro de transparencia", fr: "Centre de transparence" })}
          </ActionLink>
        </div>
      </Section>

      {/* CHAPTER 15 — JOIN */}
      <Section tone="green">
        <Eyebrow>{t({ en: "Chapter 15 — Join", es: "Capítulo 15 — Únete", fr: "Chapitre 15 — Rejoindre" })}</Eyebrow>
        <p className="poster mt-6 max-w-5xl">
          {t({
            en: "Cuba has the land. Cuba has the people. Canada can help provide resources, knowledge and connections.",
            es: "Cuba tiene la tierra. Cuba tiene la gente. Canadá puede aportar recursos, conocimiento y conexiones.",
            fr: "Cuba a la terre. Cuba a les gens. Le Canada peut fournir ressources, savoir et réseaux.",
          })}
        </p>
        <p className="display mt-10 text-5xl md:text-8xl">
          {t({ en: "Let's grow.", es: "Vamos a cultivar.", fr: "Cultivons." })}
        </p>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ActionLink to="/cuba" variant="cream">{t(UI.inCuba)}</ActionLink>
          <ActionLink to="/canada" variant="cream">{t(UI.inCanada)}</ActionLink>
          <ActionLink to="/farmers" variant="cream">{t(UI.aFarmer)}</ActionLink>
          <ActionLink to="/partners" variant="cream">{t(UI.aCompany)}</ActionLink>
        </div>
        <p className="mt-14 max-w-3xl text-2xl md:text-3xl">{t(CORE_CTA.headline)}</p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm opacity-80">
          {CORE_CTA.verbs.map((v, i) => (
            <li key={i} className="eyebrow">
              {t(v)}
            </li>
          ))}
        </ul>
      </Section>

      {/* FINAL SCREEN */}
      <section className="relative min-h-[86svh] overflow-hidden bg-charcoal text-cream">
        <div className="absolute inset-0">
          <BackgroundVideo
            src={FIELD_MEDIA.clip1.src}
            poster={FIELD_MEDIA.clip1.poster}
            label="Project field documentation"
            className="opacity-35"
          />
          <div className="absolute inset-0 field-fade" />
        </div>
        <div className="shell relative flex min-h-[86svh] flex-col justify-end pb-16 pt-28">
          <p className="eyebrow text-secondary">CUBAFOOD.CA</p>
          <p className="poster mt-6 max-w-[14ch]">
            {t({
              en: "The land is there. The people are there. The need is real.",
              es: "La tierra está ahí. La gente está ahí. La necesidad es real.",
              fr: "La terre est là. Les gens sont là. Le besoin est réel.",
            })}
          </p>
          <p className="display mt-8 text-5xl text-secondary md:text-7xl">
            {t({ en: "Now we build.", es: "Ahora construimos.", fr: "Maintenant, on bâtit." })}
          </p>
          <p className="mt-8 max-w-2xl text-sm opacity-75">
            {t({
              en: "Canada and Cuba working toward stronger agricultural production, greater food sustainability and communities capable of growing more of what they need.",
              es: "Canadá y Cuba trabajando por una producción agrícola más fuerte, mayor sostenibilidad alimentaria y comunidades capaces de cultivar más de lo que necesitan.",
              fr: "Le Canada et Cuba œuvrent pour une production agricole plus forte, une meilleure durabilité alimentaire et des communautés capables de cultiver davantage.",
            })}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink to="/cuba" variant="cream">
              {t({ en: "Join from Cuba", es: "Únete desde Cuba", fr: "Rejoindre depuis Cuba" })}
            </ActionLink>
            <ActionLink to="/canada" variant="outline">
              {t({ en: "Help from Canada", es: "Ayuda desde Canadá", fr: "Aider depuis le Canada" })}
            </ActionLink>
            <ActionLink to="/partners" variant="outline">
              {t({ en: "Become a partner", es: "Sé un socio", fr: "Devenir partenaire" })}
            </ActionLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <EmailButton />
          </div>
        </div>
      </section>
    </>
  );
}
