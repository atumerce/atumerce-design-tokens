// Example: Tailwind CSS v4 integration with Atumerce tokens
// Copy into your project's tailwind.config.js

import tokens from '@atumerce/tokens/build/js/tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './app/**/*.php',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: tokens.font.family.sans.value,
        display: tokens.font.family.display.value,
        mono: tokens.font.family.mono.value,
      },
      colors: {
        atumerce: {
          void: tokens.color.brand.void.value,
          panel: tokens.color.brand.panel.value,
          line: tokens.color.brand.line.value,
          text: tokens.color.brand.text.value,
          muted: tokens.color.brand.muted.value,
          turquoise: tokens.color.brand.turquoise.value,
          gold: tokens.color.brand.gold.value,
          goldDeep: tokens.color.brand.goldDeep.value,
          teal: tokens.color.brand.teal.value,
        },
        surface: {
          DEFAULT: tokens.color.semantic.surface.default.value,
          raised: tokens.color.semantic.surface.raised.value,
          overlay: tokens.color.semantic.surface.overlay.value,
        },
        text: {
          primary: tokens.color.semantic.text.primary.value,
          secondary: tokens.color.semantic.text.secondary.value,
          inverse: tokens.color.semantic.text.inverse.value,
        },
      },
      boxShadow: {
        glow: tokens.shadow.glowTurquoise.value,
      },
    },
  },
};
