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

export const styleOptions = [
  {
    value: metallicPrompt,
    label: "metallic",
  },
  {
    value: popPrompt,
    label: "pop",
  },
  {
    value: watercolorPrompt,
    label: "watercolor",
  },
];
