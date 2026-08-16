import type { ProjectReport, TransparencyMetric } from "./types";

export const TRANSPARENCY_MODULES: TransparencyMetric[] = [
  { id: "equipment", label: { en: "Equipment", es: "Equipos", fr: "Équipement" }, note: { en: "Received, sponsored, in transit and in service.", es: "Recibidos, patrocinados, en tránsito y en servicio.", fr: "Reçus, parrainés, en transit et en service." } },
  { id: "food", label: { en: "Food contributions", es: "Contribuciones de alimentos", fr: "Dons alimentaires" }, note: { en: "Collected, purchased and distributed.", es: "Recolectados, comprados y distribuidos.", fr: "Collectés, achetés et distribués." } },
  { id: "supplies", label: { en: "Agricultural supplies", es: "Insumos agrícolas", fr: "Fournitures agricoles" }, note: { en: "Seeds, inputs and tools.", es: "Semillas, insumos y herramientas.", fr: "Semences, intrants et outils." } },
  { id: "funding", label: { en: "Funding", es: "Financiamiento", fr: "Financement" }, note: { en: "Sources and allocation.", es: "Fuentes y asignación.", fr: "Sources et affectation." } },
  { id: "expenses", label: { en: "Expenses", es: "Gastos", fr: "Dépenses" }, note: { en: "What was spent and on what.", es: "Qué se gastó y en qué.", fr: "Ce qui a été dépensé et pourquoi." } },
  { id: "transport", label: { en: "Transportation", es: "Transporte", fr: "Transport" }, note: { en: "Shipments between Canada and Cuba.", es: "Envíos entre Canadá y Cuba.", fr: "Expéditions entre le Canada et Cuba." } },
  { id: "land", label: { en: "Land development", es: "Desarrollo de tierras", fr: "Développement des terres" }, note: { en: "Area prepared and area in production.", es: "Área preparada y área en producción.", fr: "Surface préparée et en production." } },
  { id: "crops", label: { en: "Crops", es: "Cultivos", fr: "Cultures" }, note: { en: "Crop, planting date, area and stage.", es: "Cultivo, fecha de siembra, área y etapa.", fr: "Culture, date de semis, surface et stade." } },
  { id: "harvest", label: { en: "Harvest", es: "Cosecha", fr: "Récolte" }, note: { en: "Yield, harvest date and destination.", es: "Rendimiento, fecha de cosecha y destino.", fr: "Rendement, date et destination." } },
  { id: "farmer-support", label: { en: "Farmer support", es: "Apoyo a agricultores", fr: "Soutien aux agriculteurs" }, note: { en: "What farmers received and requested.", es: "Lo que los agricultores recibieron y solicitaron.", fr: "Ce que les agriculteurs ont reçu et demandé." } },
  { id: "distribution", label: { en: "Community distribution", es: "Distribución comunitaria", fr: "Distribution communautaire" }, note: { en: "Destination community, date and quantity.", es: "Comunidad destino, fecha y cantidad.", fr: "Communauté, date et quantité." } },
  { id: "employment", label: { en: "Employment", es: "Empleo", fr: "Emploi" }, note: { en: "Positions created and filled locally.", es: "Puestos creados y cubiertos localmente.", fr: "Postes créés et pourvus localement." } },
  { id: "training", label: { en: "Training", es: "Formación", fr: "Formation" }, note: { en: "Courses, workshops and participants.", es: "Cursos, talleres y participantes.", fr: "Cours, ateliers et participants." } },
  { id: "renewable", label: { en: "Renewable energy", es: "Energía renovable", fr: "Énergie renouvelable" }, note: { en: "Systems installed and energy served.", es: "Sistemas instalados y energía servida.", fr: "Systèmes installés et énergie fournie." } },
  { id: "infrastructure", label: { en: "Infrastructure", es: "Infraestructura", fr: "Infrastructure" }, note: { en: "Water, storage and buildings built.", es: "Agua, almacenamiento y edificaciones construidas.", fr: "Eau, stockage et bâtiments construits." } },
];

export const REPORTS: ProjectReport[] = [
  { id: "foundation-2024", title: { en: "Project Foundation Report", es: "Informe de Fundación del Proyecto", fr: "Rapport de fondation du projet" }, period: "2024", available: false },
  { id: "development-2025", title: { en: "Development Report", es: "Informe de Desarrollo", fr: "Rapport de développement" }, period: "2025", available: false },
  { id: "progress-2026", title: { en: "Project Progress Report", es: "Informe de Progreso del Proyecto", fr: "Rapport d'avancement" }, period: "2026", available: false },
  { id: "production", title: { en: "Agricultural Production Report", es: "Informe de Producción Agrícola", fr: "Rapport de production agricole" }, period: "—", available: false },
  { id: "impact", title: { en: "Community Impact Report", es: "Informe de Impacto Comunitario", fr: "Rapport d'impact communautaire" }, period: "—", available: false },
  { id: "transparency", title: { en: "Transparency Report", es: "Informe de Transparencia", fr: "Rapport de transparence" }, period: "—", available: false },
];
