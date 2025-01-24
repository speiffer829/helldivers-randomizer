import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
			fontFamily: {
				oxanium: ['Oxanium', 'sans-serif'],
			}
		}
  },

  plugins: []
} as Config;
