export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1C2D",     // Deep Navy (authority)
        accent: "#F5B301",      // Gold (premium)
        soft: "#F8FAFC",        // Light background
        muted: "#64748B",       // Text gray
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
