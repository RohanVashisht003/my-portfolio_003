export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          DEFAULT: "rgba(255,255,255,0.08)",
          bg: "#0b1220",
          panel: "#121a2c",
          "panel-2": "#182238",
          text: "#edeff4",
          dim: "#8c93a6",
          amber: "#e8a33d",
          "amber-hover": "#f4b458",
          cyan: "#5fa8d3",
        },
      },
    },
  },
  plugins: [],
};
