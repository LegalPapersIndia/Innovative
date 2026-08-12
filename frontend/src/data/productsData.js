import gherkinsImg from "../assets/products/hero-farm.jpg";
import chillisImg from "../assets/products/chillis.jpg";
import babyCornImg from "../assets/products/BabyCorn.webp";
import peppersImg from "../assets/products/Peppers.webp";
import jalapenoImg from "../assets/products/Jalapeno.jpg";
import cauliflowerImg from "../assets/products/Cauliflower.webp";
import carrotsImg from "../assets/products/Carrots.webp";
import mixedVegImg from "../assets/products/Mixed.jpg";

export const products = [
  {
    slug: "gherkins",
    name: "Gherkins",
    category: "Pickled & Processed",
    tag: "Best Seller",
    image: gherkinsImg,
    shortDescription:
      "Premium handpicked gherkins, graded and processed for global export standards.",
    description:
      "Our gherkins are handpicked at peak freshness from contracted farms across Tiptur, then graded by size and processed under strict hygiene standards. Available in various brine and vinegar-based preparations, tailored to client-specific export requirements across Europe, the USA, and Russia.",
    specs: [
      { label: "Sizes Available", value: "3-5mm, 5-7mm, 7-9mm, 9-12mm" },
      { label: "Packaging", value: "Bulk drums, glass jars, custom bulk packs" },
      { label: "Shelf Life", value: "18-24 months" },
      { label: "Certifications", value: "FSSC 22000, FSSAI" },
    ],
    exportRegions: ["Europe", "USA", "Russia"],
  },
  {
    slug: "chillis",
    name: "Chillis",
    category: "Fresh & Processed",
    image: chillisImg,
    shortDescription:
      "Vibrant, export-grade chillis processed for consistent heat, color, and quality.",
    description:
      "Sourced from trusted regional farms, our chillis are sorted for color consistency and heat level before processing. Suitable for both fresh export and value-added processed forms, meeting the quality expectations of international food manufacturers and distributors.",
    specs: [
      { label: "Varieties", value: "Green, Red, Mixed" },
      { label: "Packaging", value: "Bulk cartons, vacuum-sealed packs" },
      { label: "Shelf Life", value: "12-18 months (processed)" },
      { label: "Certifications", value: "FSSC 22000, FSSAI" },
    ],
    exportRegions: ["Europe", "USA", "Russia"],
  },
  {
    slug: "baby-corn",
    name: "Baby Corn",
    category: "Fresh & Processed",
    image: babyCornImg,
    shortDescription:
      "Tender, uniformly sized baby corn processed for international food service and retail.",
    description:
      "Our baby corn is harvested young and tender, then graded for uniform size and shape. Processed in brine or vacuum-packed formats to meet the standards of international retail chains and food service operators.",
    specs: [
      { label: "Grade", value: "AA, A, B" },
      { label: "Packaging", value: "Cans, jars, bulk vacuum packs" },
      { label: "Shelf Life", value: "18-24 months" },
      { label: "Certifications", value: "FSSC 22000, FSSAI" },
    ],
    exportRegions: ["Europe", "USA"],
  },
  {
    slug: "peppers",
    name: "Peppers",
    category: "Fresh & Processed",
    image: peppersImg,
    shortDescription:
      "Colorful bell peppers, selected and processed for freshness and visual appeal.",
    description:
      "Our peppers are selected for size, color, and firmness, ensuring they meet the visual and quality expectations of international buyers. Available fresh or processed, with flexible packaging based on client and market requirements.",
    specs: [
      { label: "Colors", value: "Red, Yellow, Green" },
      { label: "Packaging", value: "Cartons, vacuum packs" },
      { label: "Shelf Life", value: "3-4 weeks (fresh), 18 months (processed)" },
      { label: "Certifications", value: "FSSC 22000, FSSAI" },
    ],
    exportRegions: ["Europe", "Russia"],
  },
  {
    slug: "jalapeno",
    name: "Jalapeno",
    category: "Pickled & Processed",
    image: jalapenoImg,
    shortDescription:
      "Sliced or whole jalapenos, processed in brine for consistent flavor and crunch.",
    description:
      "Our jalapenos are processed whole or sliced, brined to preserve their signature crunch and heat. Popular with international food service chains, our packaging is customized to bulk or retail-ready formats as needed.",
    specs: [
      { label: "Formats", value: "Whole, Sliced, Rings" },
      { label: "Packaging", value: "Bulk drums, glass jars" },
      { label: "Shelf Life", value: "18-24 months" },
      { label: "Certifications", value: "FSSC 22000, FSSAI" },
    ],
    exportRegions: ["USA", "Europe"],
  },
  {
    slug: "cauliflower",
    name: "Cauliflower",
    category: "Fresh & Processed",
    image: cauliflowerImg,
    shortDescription:
      "Fresh, uniformly graded cauliflower florets processed for export freshness.",
    description:
      "Our cauliflower is harvested and processed into uniform florets, maintaining freshness through careful handling and cold-chain practices. Ideal for both fresh export and frozen/processed vegetable lines.",
    specs: [
      { label: "Form", value: "Whole heads, Florets" },
      { label: "Packaging", value: "Cartons, vacuum packs" },
      { label: "Shelf Life", value: "2-3 weeks (fresh)" },
      { label: "Certifications", value: "FSSC 22000, FSSAI" },
    ],
    exportRegions: ["Europe"],
  },
  {
    slug: "carrots",
    name: "Carrots",
    category: "Fresh & Processed",
    image: carrotsImg,
    shortDescription:
      "Sweet, firm carrots graded by size for both fresh and processed export lines.",
    description:
      "Our carrots are graded by size and sweetness, sourced from farms with consistent soil quality. Available fresh, peeled, or diced, catering to both retail and food-processing industry clients internationally.",
    specs: [
      { label: "Sizes", value: "Baby, Medium, Large" },
      { label: "Packaging", value: "Cartons, mesh bags, vacuum packs" },
      { label: "Shelf Life", value: "4-6 weeks (fresh)" },
      { label: "Certifications", value: "FSSC 22000, FSSAI" },
    ],
    exportRegions: ["Europe", "Russia"],
  },
  {
    slug: "mixed-vegetables",
    name: "Mixed Vegetables",
    category: "Fresh & Processed",
    image: mixedVegImg,
    shortDescription:
      "Custom vegetable blends processed to client specification for global markets.",
    description:
      "We offer custom mixed vegetable blends — combining gherkins, carrots, cauliflower, peppers, and more — tailored to specific client recipes and market preferences. Perfect for retail-ready pickled mixes and bulk food service supply.",
    specs: [
      { label: "Custom Blends", value: "Client-specified ratios" },
      { label: "Packaging", value: "Jars, bulk drums, custom retail packs" },
      { label: "Shelf Life", value: "18-24 months" },
      { label: "Certifications", value: "FSSC 22000, FSSAI" },
    ],
    exportRegions: ["Europe", "USA", "Russia"],
  },
];

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);