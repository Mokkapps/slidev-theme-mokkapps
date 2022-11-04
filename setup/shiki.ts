import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: "dark-plus",
      light: "dark-plus",
    },
  };
});
