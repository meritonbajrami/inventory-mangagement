/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "custom-yellow": "#ECDE7C",
        mantis: "#7AC14D",
        "coral-red": "#FE4C4A",
        torch: "#eb4345",
        "custom-green": "#71CF48",
        "custom-gray": "#EAEAEA",
        progress: "#b3d99b",
        alabaster: "#F8F8FA",
        matisse: "#1264a3",
        mercury: "#E0E0E1",
        apple: "#67AA3C",
        darkGreen: "#68c142",
        energy: "#EFD652",
        studio: "#9640BE",
        venice: "#0F5C97",
      },
      boxShadow: {
        header: "0px 1px 4px 0px #00000040",
        table: "0px 1px 4px 0px #00000040",
        sidebar: "0px 1px 4px 0px #00000029",
      },
    },
  },
  safelist: [
    "bg-mantis",
    "bg-apple",
    "bg-energy",
    "bg-studio",
    "group-hover:border-matisse",
    "group-hover:border-custom-green",
    "group-hover:border-coral-red",
    "bg-custom-green",
    "border-darkGreen",
    "border-torch",
    "bg-matisse",
    "border-venice",
    "hover:border-matisse",
    "hover:bg-darkGreen",
    "hover:border-custom-green",
    "hover:bg-torch",
    "hover:border-coral-red",
    "hover:bg-venice",
  ],
  plugins: [],
};
