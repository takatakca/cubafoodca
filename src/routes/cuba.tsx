import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { EditorialHero, SectionIntro, StatusBadge } from "@/components/site/editorial";
import { ActionLink } from "@/components/site/primitives";
import { Field, TextInput, TextArea, Select, ChipGroup, MultiStepForm, type StepDef } from "@/components/site/forms";
import { FIELD_MEDIA } from "@/content/media";
import { CUBA_ROLES, CUBAN_PROVINCES, EMPLOYMENT_ROLES } from "@/content/roles";

export const Route = createFileRoute("/cuba")({
  head: () => ({
    meta: [
      { title: "Cuba — Participa en el proyecto agrícola | CUBAFOOD.CA" },
      {
        name: "description",
        content:
          "Cuba necesita manos para cultivar su futuro. Registro de interés para agricultores, operadores, mecánicos, agrónomos, estudiantes y voluntarios en Matanzas y toda Cuba.",
      },
      { property: "og:title", content: "Cuba necesita manos para cultivar su futuro" },
      { property: "og:description", content: "Registro de interés de participación en el proyecto agrícola CUBAFOOD.CA." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useI18n();

  const steps: StepDef[] = [
    {
      id: "identity",
      title: { en: "Who you are", es: "Quién eres", fr: "Qui vous êtes" },
      render: (v, set) => (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t({ en: "First name", es: "Nombre", fr: "Prénom" })} required>
              <TextInput value={v.first_name ?? ""} onChange={(e) => set({ first_name: e.target.value })} required />
            </Field>
            <Field label={t({ en: "Last name", es: "Apellidos", fr: "Nom" })}>
              <TextInput value={v.last_name ?? ""} onChange={(e) => set({ last_name: e.target.value })} />
            </Field>
            <Field label={t({ en: "Province", es: "Provincia", fr: "Province" })}>
              <Select options={CUBAN_PROVINCES} value={v.province ?? ""} onChange={(e) => set({ province: e.target.value })} />
            </Field>
            <Field label={t({ en: "Municipality", es: "Municipio", fr: "Municipalité" })}>
              <TextInput value={v.municipality ?? ""} onChange={(e) => set({ municipality: e.target.value })} />
            </Field>
            <Field label={t({ en: "Phone", es: "Teléfono", fr: "Téléphone" })}>
              <TextInput value={v.phone ?? ""} onChange={(e) => set({ phone: e.target.value })} inputMode="tel" />
            </Field>
            <Field label="WhatsApp">
              <TextInput value={v.whatsapp ?? ""} onChange={(e) => set({ whatsapp: e.target.value })} inputMode="tel" />
            </Field>
            <Field label={t({ en: "Email", es: "Correo electrónico", fr: "Courriel" })}>
              <TextInput type="email" value={v.email ?? ""} onChange={(e) => set({ email: e.target.value })} />
            </Field>
          </div>
        </>
      ),
    },
    {
      id: "skills",
      title: { en: "How you want to take part", es: "Cómo quieres participar", fr: "Comment participer" },
      render: (v, set, toggle) => (
        <>
          <ChipGroup
            options={CUBA_ROLES.map((r) => ({ id: r.id, label: t(r.label) }))}
            selected={v.selections}
            onToggle={toggle}
          />
          <Field label={t({ en: "Profession", es: "Profesión", fr: "Profession" })}>
            <TextInput value={v.profession ?? ""} onChange={(e) => set({ profession: e.target.value })} />
          </Field>
          <Field label={t({ en: "Experience", es: "Experiencia", fr: "Expérience" })}>
            <TextArea value={v.experience ?? ""} onChange={(e) => set({ experience: e.target.value })} />
          </Field>
          <Field label={t({ en: "Skills", es: "Habilidades", fr: "Compétences" })}>
            <TextArea value={v.skills ?? ""} onChange={(e) => set({ skills: e.target.value })} />
          </Field>
        </>
      ),
    },
    {
      id: "availability",
      title: { en: "Availability and message", es: "Disponibilidad y mensaje", fr: "Disponibilité et message" },
      render: (v, set) => (
        <>
          <Field label={t({ en: "Availability", es: "Disponibilidad", fr: "Disponibilité" })}>
            <TextInput value={v.availability ?? ""} onChange={(e) => set({ availability: e.target.value })} />
          </Field>
          <Field label={t({ en: "Message", es: "Mensaje", fr: "Message" })}>
            <TextArea value={v.message ?? ""} onChange={(e) => set({ message: e.target.value })} />
          </Field>
          <p className="text-xs leading-relaxed opacity-60">
            {t({
              en: "This is a registration of interest. It is not an employment offer and does not guarantee participation.",
              es: "Este es un registro de interés. No es una oferta de empleo ni garantiza la participación.",
              fr: "Ceci est une inscription d'intérêt, pas une offre d'emploi.",
            })}
          </p>
        </>
      ),
    },
  ];

  return (
    <main>
      <EditorialHero
        eyebrow="CCC — Cooperación Canadá–Cuba"
        title={{
          en: "Cuba necesita manos para cultivar su futuro.",
          es: "Cuba necesita manos para cultivar su futuro.",
          fr: "Cuba necesita manos para cultivar su futuro.",
        }}
        subtitle={{
          en: "El proyecto se construye con los cubanos.",
          es: "El proyecto se construye con los cubanos.",
          fr: "El proyecto se construye con los cubanos.",
        }}
        body={{
          es: "Agricultores, operadores, mecánicos, electricistas, agrónomos, choferes, almaceneros, estudiantes y voluntarios. Si sabes trabajar la tierra o mantener funcionando lo que la hace producir, este proyecto te necesita.",
          en: "Farmers, operators, mechanics, electricians, agronomists, drivers, warehouse workers, students and volunteers. Registration of interest — open across Cuba.",
          fr: "Agriculteurs, opérateurs, mécaniciens, agronomes, chauffeurs, étudiants et bénévoles. Inscription d'intérêt ouverte partout à Cuba.",
        }}
        statuses={["CURRENT", "NOT_YET_ACTIVE"]}
        media={{ video: FIELD_MEDIA.clip5.src, poster: FIELD_MEDIA.clip5.poster }}
      >
        <ActionLink to="/farmers" variant="cream">
          {t({ es: "Soy agricultor", en: "I am a farmer", fr: "Je suis agriculteur" })}
        </ActionLink>
      </EditorialHero>

      <section className="bg-background py-16 md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ es: "01 · Participación", en: "01 · Participation", fr: "01 · Participation" }}
            title={{
              es: "Formas de participar en el proyecto.",
              en: "Ways to take part in the project.",
              fr: "Façons de participer au projet.",
            }}
            lede={{
              es: "Cada área de trabajo aquí corresponde a una necesidad real del desarrollo agrícola. Registrar tu interés no garantiza empleo: crea el registro de capacidades con el que se planifica el trabajo.",
              en: "Each area corresponds to a real need in agricultural development. Registering interest does not guarantee employment.",
              fr: "Chaque domaine correspond à un besoin réel. L'inscription ne garantit pas un emploi.",
            }}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-current/15 sm:grid-cols-2 lg:grid-cols-3">
            {CUBA_ROLES.map((r) => (
              <div key={r.id} className="bg-background p-6">
                <h3 className="display text-lg">{t(r.label)}</h3>
                <p className="mt-2 text-sm opacity-75">{t(r.note)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-cream md:py-24">
        <div className="shell">
          <SectionIntro
            eyebrow={{ es: "02 · Trabajo", en: "02 · Work", fr: "02 · Travail" }}
            title={{
              es: "La agricultura crea mucho más que trabajo agrícola.",
              en: "Agriculture creates far more than farm work.",
              fr: "L'agriculture crée bien plus que du travail agricole.",
            }}
            status="PLANNED"
          />
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {EMPLOYMENT_ROLES.map((r, i) => (
              <li key={i} className="eyebrow rounded-full border border-cream/25 px-4 py-2.5 text-[11px]">
                {t(r)}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm opacity-70">
            {t({
              es: "Estas son las categorías de trabajo que un desarrollo agrícola de esta escala requiere. No hay puestos abiertos todavía.",
              en: "These are the categories of work such a development requires. No positions are open yet.",
              fr: "Ce sont les catégories de travail requises. Aucun poste n'est ouvert.",
            })}
          </p>
          <div className="mt-6"><StatusBadge status="NOT_YET_ACTIVE" /></div>
        </div>
      </section>

      <section className="bg-card py-16 text-card-foreground md:py-24">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionIntro
            eyebrow={{ es: "03 · Registro", en: "03 · Registration", fr: "03 · Inscription" }}
            title={{ es: "Quiero participar.", en: "I want to take part.", fr: "Je veux participer." }}
            lede={{
              es: "Completa el registro de interés. Tus datos no se publican ni se comparten públicamente.",
              en: "Complete the registration of interest. Your details are never published.",
              fr: "Remplissez l'inscription d'intérêt. Vos données ne sont jamais publiées.",
            }}
          />
          <MultiStepForm
            steps={steps}
            sourcePage="/cuba"
            country="Cuba"
            participantTypeFallback="cuba-participant"
            whatsappContext="cuba"
            submitLabel={{ es: "QUIERO PARTICIPAR", en: "I WANT TO PARTICIPATE", fr: "JE VEUX PARTICIPER" }}
            success={{
              title: { es: "Registro recibido.", en: "Registration received.", fr: "Inscription reçue." },
              body: {
                es: "Gracias. Tus datos quedan registrados como interés de participación. El equipo podrá contactarte a medida que el proyecto avance en su proceso de aprobación.",
                en: "Thank you. Your details are recorded as an interest in participating. The team can contact you as the project advances through its approval process.",
                fr: "Merci. Vos données sont enregistrées comme intérêt de participation.",
              },
            }}
          />
        </div>
      </section>
    </main>
  );
}
