// ─── Données "Nos Récoltes" : catégories + images réelles par marque ───
import otl1 from "../assets/Ressources Site Web 2/Nos Récoltes/Oceanic Trade & Logistics/OTL_1.jpg";
import otl2 from "../assets/Ressources Site Web 2/Nos Récoltes/Oceanic Trade & Logistics/OTL_2.jpg";
import otl3 from "../assets/Ressources Site Web 2/Nos Récoltes/Oceanic Trade & Logistics/OTL_3.jpg";
import otl4 from "../assets/Ressources Site Web 2/Nos Récoltes/Oceanic Trade & Logistics/OTL_4.jpg";
import otl5 from "../assets/Ressources Site Web 2/Nos Récoltes/Oceanic Trade & Logistics/OTL_5.jpg";
import otl6 from "../assets/Ressources Site Web 2/Nos Récoltes/Oceanic Trade & Logistics/OTL_6.jpg";

import ilma1 from "../assets/Ressources Site Web 2/Nos Récoltes/Ilma Consulting/Ilma_Consulting_1.jpg";
import ilma2 from "../assets/Ressources Site Web 2/Nos Récoltes/Ilma Consulting/Ilma_Consulting_2.jpg";
import ilma3 from "../assets/Ressources Site Web 2/Nos Récoltes/Ilma Consulting/Ilma_Consulting_3.jpg";
import ilma4 from "../assets/Ressources Site Web 2/Nos Récoltes/Ilma Consulting/Ilma_Consulting_4.jpg";
import ilma5 from "../assets/Ressources Site Web 2/Nos Récoltes/Ilma Consulting/Ilma_Consulting_5.jpg";
import ilma6 from "../assets/Ressources Site Web 2/Nos Récoltes/Ilma Consulting/Ilma_Consulting_6.jpg";

import inv1 from "../assets/Ressources Site Web 2/Nos Récoltes/Invest Link/Invest_Link_1.jpg";
import inv2 from "../assets/Ressources Site Web 2/Nos Récoltes/Invest Link/Invest_Link_2.jpg";
import inv3 from "../assets/Ressources Site Web 2/Nos Récoltes/Invest Link/Invest_Link_3.jpg";
import inv4 from "../assets/Ressources Site Web 2/Nos Récoltes/Invest Link/Invest_Link_4.jpg";
import inv5 from "../assets/Ressources Site Web 2/Nos Récoltes/Invest Link/Invest_Link_5.jpg";
import inv6 from "../assets/Ressources Site Web 2/Nos Récoltes/Invest Link/Invest_Link_6.jpg";

import kc1 from "../assets/Ressources Site Web 2/Nos Récoltes/K-Care Cosmetics/K_Care_Cosmetics_1.jpg";
import kc2 from "../assets/Ressources Site Web 2/Nos Récoltes/K-Care Cosmetics/K_Care_Cosmetics_2.png";
import kc3 from "../assets/Ressources Site Web 2/Nos Récoltes/K-Care Cosmetics/K_Care_Cosmetics_3.jpg";
import kc4 from "../assets/Ressources Site Web 2/Nos Récoltes/K-Care Cosmetics/K_Care_Cosmetics_4.jpg";
import kc5 from "../assets/Ressources Site Web 2/Nos Récoltes/K-Care Cosmetics/K_Care_Cosmetics_5.jpg";
import kc6 from "../assets/Ressources Site Web 2/Nos Récoltes/K-Care Cosmetics/K_Care_Cosmetics_6.jpg";

export type Recolte = {
  slug: string;
  label: string;
  images: string[];
};

// `images` vide = catégorie sans projet pour l'instant.
export const recoltes: Recolte[] = [
  { slug: "business-finance", label: "Business & Finance", images: [ilma1, ilma2, ilma3, ilma4, ilma5, ilma6, inv1, inv2, inv3, inv4, inv5, inv6] },
  { slug: "logistique-transport", label: "Logistique & Transport", images: [otl1, otl2, otl3, otl4, otl5, otl6] },
  { slug: "prestations-services", label: "Prestations de services", images: [] },
  { slug: "cosmetique-bien-etre", label: "Cosmétique & Bien-être", images: [kc1, kc2, kc3, kc4, kc5, kc6] },
  { slug: "industrie-manufacture", label: "Industrie & Manufacture", images: [] },
  { slug: "divers", label: "Divers", images: [] },
  { slug: "supports-comm", label: "Supports de comm.", images: [] },
];

export function getRecolte(slug: string | undefined): Recolte | undefined {
  return recoltes.find((r) => r.slug === slug);
}
