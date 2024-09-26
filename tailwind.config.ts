import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-carousel-crane": "url(/svg/main_carousel_crane.svg)",
      },
      spacing: {
        "1": "0.5rem",
        "2": "1rem",
        "3": "1.5rem",
        "4": "2rem",
        "6": "3rem",
        "8": "4rem",
        "10": "5rem",
        "48": "24rem",
        "96": "48rem",
      },
      zIndex: {
        "1": "1",
        "2": "2"
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '7xl': '5rem',
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    zIndex: {
      "1": "1"
    },
    colors: {
      purple: "#6D31ED",
      white: "#ffffff",
      "overlay": "#171a1f6b",
      "gray-dark": "#565D6D",
      "black": "#000000",
      "black-light": "#171A1F",
      "gray-light": "#9095A1",
      "yellow": "#F3C63F",
      "gray-border": "#bdc1ca69",
      "testmonial-background": "#D3C1FA",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
export default config;
