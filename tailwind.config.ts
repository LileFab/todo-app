import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      timberwolf: {
        DEFAULT: "#dad7cd",
        100: "#312e24",
        200: "#615b48",
        300: "#92896c",
        400: "#b6b09c",
        500: "#dad7cd",
        600: "#e2dfd7",
        700: "#e9e7e1",
        800: "#f0efeb",
        900: "#f8f7f5",
      },
      sage: {
        DEFAULT: "#a3b18a",
        100: "#212619",
        200: "#434c33",
        300: "#64724c",
        400: "#859865",
        500: "#a3b18a",
        600: "#b6c1a2",
        700: "#c8d0b9",
        800: "#dae0d0",
        900: "#edefe8",
      },
      fern_green: {
        DEFAULT: "#588157",
        100: "#111911",
        200: "#233323",
        300: "#344c34",
        400: "#466645",
        500: "#588157",
        600: "#739f72",
        700: "#96b795",
        800: "#b9cfb9",
        900: "#dce7dc",
      },
      hunter_green: {
        DEFAULT: "#3a5a40",
        100: "#0c120d",
        200: "#172419",
        300: "#233626",
        400: "#2e4833",
        500: "#3a5a40",
        600: "#56865f",
        700: "#7aaa83",
        800: "#a7c7ac",
        900: "#d3e3d6",
      },
      brunswick_green: {
        DEFAULT: "#344e41",
        100: "#0a0f0d",
        200: "#141f1a",
        300: "#1f2e26",
        400: "#293d33",
        500: "#344e41",
        600: "#527a66",
        700: "#75a38c",
        800: "#a3c2b3",
        900: "#d1e0d9",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
