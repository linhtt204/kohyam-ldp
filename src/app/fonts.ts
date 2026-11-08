import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const alternates = localFont({
  src: [
    { path: "../fonts/MontserratAlternates-Light.ttf", weight: "300" },
    { path: "../fonts/MontserratAlternates-Medium.ttf", weight: "500" },
    { path: "../fonts/MontserratAlternates-SemiBold.ttf", weight: "600" },
    { path: "../fonts/MontserratAlternates-Bold.ttf", weight: "700" },
  ],
  variable: "--font-alternates",
  display: "swap",
});

export const allison = localFont({
  src: "../fonts/Allison-Regular.ttf",
  weight: "400",
  variable: "--font-allison",
  display: "swap",
});
