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
  description: string;
  materials: string;
  duration: string;
  completed_at: string;
  featured: boolean;
  images: string[];
}

export const categories: Category[] = [
  { slug: "peinture-fresques", name: "Peinture & Fresques" },
  { slug: "plafonnage", name: "Plafonnage" },
  { slug: "carrelage", name: "Carrelage & Mosaïque" },
  { slug: "decoration", name: "Décoration complète" },
];

export const projects: Project[] = [
  {
    slug: "residence-auteur-almadies",
    title: "Résidence d'auteur — Almadies",
    category: "peinture-fresques",
    city: "Dakar",
    description:
      "Fresque murale sur trois étages d'une villa contemporaine. Composition mêlant émeraude profond, or à la feuille et touches de rose poudré, exécutée à main levée sur 60 m². Quatre semaines d'atelier sur place.",
    materials: "Acrylique haute couvrance, feuilles d'or 22 carats",
    duration: "4 semaines",
    completed_at: "Novembre 2025",
    featured: true,
    images: [
      "/villes/Dakar/0b1d90372918e1c394b60a07f65ae217.jpg",
      "/villes/Dakar/1bcdba7e823fac3bde9758943d6e6646.jpg",
      "/villes/Dakar/1cc0dc7acd690e3bd5cdf64b40499c11.jpg",
      "/villes/Dakar/1f89acbdcdeff581f9d77ac5414fbf49.jpg",
      "/villes/Dakar/2b6910744d5a9559eaefd518b0bce69a.jpg",
      "/villes/Dakar/6be4bd4dcd5ec71ee6b16b0df52474bf.jpg",
    ],
  },
  {
    slug: "plafond-cathedrale-villa",
    title: "Plafond cathédrale — Villa privée",
    category: "plafonnage",
    city: "Thiès",
    description:
      "Plafond plâtre orné de motifs géométriques floraux. Reliefs en gypse, finition mate cassée et dorures à la feuille en bordure. Tomé sur 90 m².",
    materials: "Plâtre fin, dorures à la feuille",
    duration: "3 semaines",
    completed_at: "Septembre 2025",
    featured: true,
    images: [
      "/villes/Thies/03075c80a2cd8256cfb2678ac9fee785.jpg",
      "/villes/Thies/42998067cf67bbe4a761ae518fb66619.jpg",
      "/villes/Thies/79333db6d5fe188952dee4829ea88470.jpg",
      "/villes/Thies/888fb6d6c10872db2bc4a05bfe15b83b.jpg",
      "/villes/Thies/ad44bb5ebed444cc1d60264ecd547141.jpg",
    ],
  },
  {
    slug: "mosaique-hotel-faidherbe",
    title: "Mosaïque sur-mesure — Hôtel Faidherbe",
    category: "carrelage",
    city: "Saint-Louis",
    description:
      "Sol en mosaïque artistique inspirée des motifs textiles wolofs. Tesselles en terre cuite émaillée et inserts laiton, posée sur 45 m². Pièce signature pour la réception de l'hôtel.",
    materials: "Tesselles émaillées, joints sable doré",
    duration: "5 semaines",
    completed_at: "Juillet 2025",
    featured: true,
    images: [
      "/villes/Saint-Louis/17150165eea93154aa781eea60205255.jpg",
      "/villes/Saint-Louis/454c2f60745bd7928bc0857399934d3f.jpg",
      "/villes/Saint-Louis/5d99a76360d5d21b34ee66de5ee394d1.jpg",
      "/villes/Saint-Louis/61d8d70b3e674487fecaade67c3e5a8a.jpg",
      "/villes/Saint-Louis/a75beb2437883072351d4b589b4de83d.jpg",
      "/villes/Saint-Louis/e798cc9a412f94f14cca7a3a1eae84e5.jpg",
    ],
  },
  {
    slug: "trompe-loeil-maison-familiale",
    title: "Trompe-l'œil — Maison familiale",
    category: "peinture-fresques",
    city: "Tivaoune",
    description:
      "Trompe-l'œil grand format évoquant un patio andalou imaginé : arches, fontaine, jeux de lumière. Réalisé à l'acrylique sur enduit lissé.",
    materials: "Acrylique mate, glacis",
    duration: "2 semaines",
    completed_at: "Juin 2025",
    featured: false,
    images: [
      "/villes/Tivaoune/ed41da74998a03b3c4d2aea0c4876a61.jpg",
      "/villes/Tivaoune/f183f5e319fbb25044523a6957f76b03.jpg",
      "/villes/Tivaoune/f2739c024ed826a0c95ab1665051ea7f.jpg",
      "/villes/Tivaoune/f7f3dfbd05165876d2ec7d944fc99a4e.jpg",
      "/villes/Tivaoune/f8a943fc4f20df1e7989e67cd7b09206.jpg",
      "/villes/Tivaoune/f96044330184e4a57b701f99a6227fc4.jpg",
    ],
  },
  {
    slug: "salon-majlis-concept-complet",
    title: "Salon majlis — Concept complet",
    category: "decoration",
    city: "Touba",
    description:
      "Conception et exécution d'un salon majlis : moulures plâtre, fresque murale, rideaux sur-mesure, sélection mobilier. 80 m² livré clés en main.",
    materials: "Plâtre, peintures décoratives, textiles importés",
    duration: "6 semaines",
    completed_at: "Avril 2025",
    featured: true,
    images: [
      "/villes/Touba/aec5fb9de2428994724e905f21447a40.jpg",
      "/villes/Touba/b5c64f1de54405e261a5656c715e9b80.jpg",
      "/villes/Touba/b621112fce0e236b61e1eeb7fce20d1a.jpg",
      "/villes/Touba/bb4bf8880dc40d040add0175cacf745e.jpg",
      "/villes/Touba/bbeb6c727c4e3aec4866d50b4138e9f1.jpg",
      "/villes/Touba/c1bebc3ff33c0a2539989a4af6203072.jpg",
    ],
  },
  {
    slug: "hammam-prive-villa-du-cap",
    title: "Hammam privé — Villa du Cap",
    category: "carrelage",
    city: "Ziguinchor",
    description:
      "Hammam orné de mosaïques zellige bleu profond et or, jeux de lumière dans la vapeur. Pose patiente sur surface courbe.",
    materials: "Zellige cuit, mortier hydrofuge",
    duration: "4 semaines",
    completed_at: "Février 2025",
    featured: false,
    images: [
      "/villes/Ziguinchor/ccee9c52d6d387119ff0818f1b8dbabb.jpg",
      "/villes/Ziguinchor/cd0eced0d27cb7c97c3cc2066b12c96f.jpg",
      "/villes/Ziguinchor/d13cee17126c708874e01cc075141247.jpg",
      "/villes/Ziguinchor/dda681d0790b755916c4849ec9880e62.jpg",
      "/villes/Ziguinchor/e05e7eba210e9ac441451fbbeba48fae.jpg",
    ],
  },
  {
    slug: "facade-artistique-banjul",
    title: "Façade artistique — Banjul",
    category: "peinture-fresques",
    city: "Gambie",
    description:
      "Façade extérieure transformée en fresque urbaine : symbolique côtière, palette océan-coucher de soleil. Œuvre visible depuis la corniche.",
    materials: "Peinture façade extérieure, pigments minéraux",
    duration: "3 semaines",
    completed_at: "Décembre 2024",
    featured: true,
    images: [
      "/villes/Gambie/014e2847c1469573323faef37a29a480.jpg",
      "/villes/Gambie/048f71de66c73bc15e4fbb3542366a44.jpg",
      "/villes/Gambie/09e572271ec8a7cf0be57804d4efdb00.jpg",
      "/villes/Gambie/33bee10a8bad913aa14e96ed86a3aff4.jpg",
      "/villes/Gambie/35b2a0aca787ff5d16ccc040a9938524.jpg",
      "/villes/Gambie/8fc735e6a6ab994055d94f5645f46807.jpg",
    ],
  },
  {
    slug: "plafonds-nomades-nouakchott",
    title: "Plafonds nomades — Nouakchott",
    category: "plafonnage",
    city: "Mauritanie",
    description:
      "Trois plafonds décoratifs inspirés des motifs touaregs : reliefs croisés, finition sable. Ensemble livré pour une résidence de prestige.",
    materials: "Plâtre coloré, pigments terre",
    duration: "4 semaines",
    completed_at: "Octobre 2024",
    featured: false,
    images: [
      "/villes/Mauritanie/285de7dface790a4940b848a4b36086b.jpg",
      "/villes/Mauritanie/398a8b5881ba2e385ba10ba622bbaf24.jpg",
      "/villes/Mauritanie/52d9c6eff09a8c75530c2c89209fa299.jpg",
      "/villes/Mauritanie/71b28b4592e92eeb38753c23b7ec3096.jpg",
      "/villes/Mauritanie/84e0caf9e078c2581b31d62ef156a93f.jpg",
      "/villes/Mauritanie/87e7cc1711ebf7784938cce2648fd591.jpg",
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getCategoryName = (slug: CategorySlug): string =>
  categories.find((c) => c.slug === slug)?.name ?? "";
