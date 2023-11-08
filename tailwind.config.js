/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#808080",
          "200": "#787878",
          "300": "#232323",
          "400": "#081633",
          "500": "rgba(0, 0, 0, 0.8)",
        },
        steelblue: "#337ab7",
        darkgray: "#a0a0a0",
        dimgray: "#585858",
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#ededed",
        },
        darkslateblue: "#1f386b",
        silver: "#b7b7b7",
        lightgray: "#cdcdcd",
        crimson: "#ff3b58",
        darkslategray: "#3e3e3e",
        gainsboro: {
          "100": "#e1e1e1",
          "200": "#d9d9d9",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "title-2": "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      smi: "13px",
      lgi: "19px",
      "9xl": "28px",
      "41xl": "60px",
      "21xl": "40px",
      sm: "14px",
      xs: "12px",
      "4xl": "23px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
