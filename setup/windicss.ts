import { resolve } from "path";
import { defineWindiSetup } from "@slidev/types";

export default defineWindiSetup(() => ({
  extract: {
    include: [resolve(__dirname, "../**/*.{vue,ts}")],
  },
  theme: {
    colors: {
      accent: "var(--accent)",
      "light-text": "var(--lightText)",
      "dark-text": "var(--darkText)",
      "light-background": "var(--lightBackground)",
      "dark-background": "var(--darkBackground)",
      "light-link": "var(--lightLink)",
      "dark-link": "var(--darkLink)",
    },
    textColor: {
      accent: "var(--accent)",
      "light-text": "var(--lightText)",
      "dark-text": "var(--darkText)",
      "light-background": "var(--lightBackground)",
      "dark-background": "var(--darkBackground)",
      "light-link": "var(--lightLink)",
      "dark-link": "var(--darkLink)",
    },
  },
  shortcuts: {},
}));
