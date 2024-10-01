/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayMatter: "#c4c4c4",
      },
      fontFamily: {
        inter: "Inter , sans-serif",
        mon: "Montserrat, sans-serif",
        Roboto: "Roboto, sans-serif",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".scrollbar-thin": {
            "scrollbar-width": "thick",
          },
          ".scrollbar-thumb": {
            "scrollbar-color": "#e0e0e0",
          },
          ".scrollbar-thin::-webkit-scrollbar": {
            width: "12px",
          },
          ".scrollbar-thin2::-webkit-scrollbar": {
            width: "30px",
          },
          
          ".scrollbar-thin3::-webkit-scrollbar": {
            width: "0px",
          },
          
          ".scrollbar-thin::-webkit-scrollbar-track": {
            background: "#fff",
            border: "3px solid black",
          },
          ".scrollbar-thin::-webkit-scrollbar-thumb": {
            background: "#888",
            "border-radius": "8px",
            border: "2px solid black",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
