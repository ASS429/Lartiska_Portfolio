export type CategorySlug = "peinture-fresques" | "plafonnage" | "carrelage" | "decoration";

export interface Category {
  slug: CategorySlug;
  name: string;
}

export interface Project {
  slug: string;
  title: string;
  category: CategorySlug;
  city: string;
  /** Nom du dossier dans /public/villes (ex: "Dakar", "Thies") */
  folder: string;
  description: string;
  materials: string;
  duration: string;
  completed_at: string;
  featured: boolean;
  /** Nombre de photos dans /public/villes/<folder>/, nommées 01.jpg, 02.jpg, … */
  imageCount: number;
}

export const categories: Category[] = [
  { slug: "peinture-fresques", name: "Peinture & Fresques" },
  { slug: "plafonnage", name: "Plafonnage" },
  { slug: "carrelage", name: "Carrelage & Mosaïque" },
  { slug: "decoration", name: "Décoration complète" },
];

const rawProjects: Project[] = [
  {
    slug: "residence-auteur-almadies",
    title: "Résidence d'auteur — Almadies",
    category: "peinture-fresques",
    city: "Dakar",
    folder: "Dakar",
    description:
      "Fresque murale sur trois étages d'une villa contemporaine. Composition mêlant émeraude profond, or à la feuille et touches de rose poudré, exécutée à main levée sur 60 m². Quatre semaines d'atelier sur place.",
    materials: "Acrylique haute couvrance, feuilles d'or 22 carats",
    duration: "4 semaines",
    completed_at: "Novembre 2025",
    featured: true,
    imageCount: 6,
  },
  {
    slug: "plafond-cathedrale-villa",
    title: "Plafond cathédrale — Villa privée",
    category: "plafonnage",
    city: "Thiès",
    folder: "Thies",
    description:
      "Plafond plâtre orné de motifs géométriques floraux. Reliefs en gypse, finition mate cassée et dorures à la feuille en bordure. Tomé sur 90 m².",
    materials: "Plâtre fin, dorures à la feuille",
    duration: "3 semaines",
    completed_at: "Septembre 2025",
    featured: true,
    imageCount: 6,
  },
  {
    slug: "mosaique-hotel-faidherbe",
    title: "Mosaïque sur-mesure — Hôtel Faidherbe",
    category: "carrelage",
    city: "Saint-Louis",
    folder: "Saint-Louis",
    description:
      "Sol en mosaïque artistique inspirée des motifs textiles wolofs. Tesselles en terre cuite émaillée et inserts laiton, posée sur 45 m². Pièce signature pour la réception de l'hôtel.",
    materials: "Tesselles émaillées, joints sable doré",
    duration: "5 semaines",
    completed_at: "Juillet 2025",
    featured: true,
    imageCount: 6,
  },
  {
    slug: "trompe-loeil-maison-familiale",
    title: "Trompe-l'œil — Maison familiale",
    category: "peinture-fresques",
    city: "Tivaoune",
    folder: "Tivaoune",
    description:
      "Trompe-l'œil grand format évoquant un patio andalou imaginé : arches, fontaine, jeux de lumière. Réalisé à l'acrylique sur enduit lissé.",
    materials: "Acrylique mate, glacis",
    duration: "2 semaines",
    completed_at: "Juin 2025",
    featured: false,
    imageCount: 5,
  },
  {
    slug: "salon-majlis-concept-complet",
    title: "Salon majlis — Concept complet",
    category: "decoration",
    city: "Touba",
    folder: "Touba",
    description:
      "Conception et exécution d'un salon majlis : moulures plâtre, fresque murale, rideaux sur-mesure, sélection mobilier. 80 m² livré clés en main.",
    materials: "Plâtre, peintures décoratives, textiles importés",
    duration: "6 semaines",
    completed_at: "Avril 2025",
    featured: true,
    imageCount: 5,
  },
  {
    slug: "hammam-prive-villa-du-cap",
    title: "Hammam privé — Villa du Cap",
    category: "carrelage",
    city: "Ziguinchor",
    folder: "Ziguinchor",
    description:
      "Hammam orné de mosaïques zellige bleu profond et or, jeux de lumière dans la vapeur. Pose patiente sur surface courbe.",
    materials: "Zellige cuit, mortier hydrofuge",
    duration: "4 semaines",
    completed_at: "Février 2025",
    featured: false,
    imageCount: 6,
  },
  {
    slug: "facade-artistique-banjul",
    title: "Façade artistique — Banjul",
    category: "peinture-fresques",
    city: "Gambie",
    folder: "Gambie",
    description:
      "Façade extérieure transformée en fresque urbaine : symbolique côtière, palette océan-coucher de soleil. Œuvre visible depuis la corniche.",
    materials: "Peinture façade extérieure, pigments minéraux",
    duration: "3 semaines",
    completed_at: "Décembre 2024",
    featured: true,
    imageCount: 6,
  },
  {
    slug: "plafonds-nomades-nouakchott",
    title: "Plafonds nomades — Nouakchott",
    category: "plafonnage",
    city: "Mauritanie",
    folder: "Mauritanie",
    description:
      "Trois plafonds décoratifs inspirés des motifs touaregs : reliefs croisés, finition sable. Ensemble livré pour une résidence de prestige.",
    materials: "Plâtre coloré, pigments terre",
    duration: "4 semaines",
    completed_at: "Octobre 2024",
    featured: false,
    imageCount: 6,
  },
];

/** Génère ["/villes/Dakar/01.jpg", "/villes/Dakar/02.jpg", …] à partir du folder + imageCount. */
const imagesFor = (folder: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) => `/villes/${folder}/${String(i + 1).padStart(2, "0")}.jpg`);

export type ProjectWithImages = Project & { images: string[] };

export const projects: ProjectWithImages[] = rawProjects.map((p) => ({
  ...p,
  images: imagesFor(p.folder, p.imageCount),
}));

export const getProjectBySlug = (slug: string): ProjectWithImages | undefined =>
  projects.find((p) => p.slug === slug);

export const getCategoryName = (slug: CategorySlug): string =>
  categories.find((c) => c.slug === slug)?.name ?? "";
