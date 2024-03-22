import { Label } from "@/components/ui/label";
import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Image prompt is required.",
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
  styleOptions: z.string().min(1),
});

export const amountOptions = [
  { value: "1", label: "1 photo" },
  { value: "2", label: "2 photos" },
  { value: "3", label: "3 photos" },
  { value: "4", label: "4 photos" },
  { value: "5", label: "5 photos" },
];

export const resOptions = [
  {
    value: "256x256",
    Label: "256x256",
  },
  {
    value: "512x512",
    Label: "512x512",
  },
  {
    value: "1024x1024",
    Label: "1024x1024",
  },
];

const metallicPrompt = `a high quality icon of metallic iridescent material, 3D render isometric perspective on a dark background`;
const watercolorPrompt = `a watercolor-style icon on a dark background, with a soft accent and a dreamy feel`;
const popPrompt = `a pop art-style icon on a dark background, with bold colors and graphic design elements that pop`;
const metallicIridescentPrompt = `A high-definition, 3D-rendered icon made of metallic iridescent material, showcasing shimmering colors from different angles, presented in isometric perspective against a sleek, dark background.`;

const watercolorDreamyPrompt = `An icon designed in a watercolor style featuring ethereal and gentle hues, providing a soft, dreamy aesthetic with subtle color gradients, all laid out on a muted, dark background to enhance contrast.`;

const popArtVibrantPrompt = `An icon crafted in the style of pop art, characterized by vibrant, saturated colors and stark, bold graphic elements, designed to stand out against a dark, minimalist background.`;

const neonGlowPrompt = `A neon-inspired icon featuring bright, glowing lines and shapes that contrast sharply with a dark, night-time background, embodying an electric, urban vibe in its design.`;

const vintageRetroPrompt = `A retro-styled icon, evoking a vintage feel with muted colors and classic design elements, presented on a dark, textured background to highlight its nostalgic essence.`;

const futuristicTechPrompt = `An icon with a futuristic, technological design, featuring sleek, metallic surfaces and neon accents, set against a dark, cybernetic background to emphasize its advanced aesthetic.`;

const minimalistModernPrompt = `A minimalist icon characterized by its clean lines, simple shapes, and a monochromatic color scheme, set against a dark background to accentuate its modern simplicity.`;

const abstractGeometricPrompt = `An abstract, geometrically designed icon, combining sharp angles and fluid curves in a harmonious layout, enhanced by a stark contrast against a dark background.`;

const handDrawnCharmingPrompt = `A charming, hand-drawn style icon that exudes warmth and personality, featuring whimsical elements and textures, all beautifully contrasted on a dark background.`;

const elegantLuxuryPrompt = `An elegant and luxurious icon, incorporating refined design elements and a palette of rich, sophisticated colors, showcased against a dark, sumptuous background for an aura of exclusivity.`;

export const styleOptions = [
  {
    value: metallicPrompt,
    label: "Metallic Original",
  },
  {
    value: watercolorPrompt,
    label: "Watercolor Classic",
  },
  {
    value: popPrompt,
    label: "Pop Art",
  },
  {
    value: metallicIridescentPrompt,
    label: "Metallic Iridescent",
  },
  {
    value: watercolorDreamyPrompt,
    label: "Watercolor Dreamy",
  },
  {
    value: popArtVibrantPrompt,
    label: "Pop Art Vibrant",
  },
  {
    value: neonGlowPrompt,
    label: "Neon Glow",
  },
  {
    value: vintageRetroPrompt,
    label: "Vintage Retro",
  },
  {
    value: futuristicTechPrompt,
    label: "Futuristic Tech",
  },
  {
    value: minimalistModernPrompt,
    label: "Minimalist Modern",
  },
  {
    value: abstractGeometricPrompt,
    label: "Abstract Geometric",
  },
  {
    value: handDrawnCharmingPrompt,
    label: "Hand Drawn Charming",
  },
  {
    value: elegantLuxuryPrompt,
    label: "Elegant Luxury",
  },
];
export const colorOptions = [
  "red",
  "blue",
  "green",
  "indigo",
  "purple",
  "orange",
  "pink",
  "white",
  "black",
  "lime",
];
