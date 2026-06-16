/**
 * Atumerce Design Tokens — JavaScript Module
 * Generated from W3C Design Tokens Format
 */

export const color = {
  brand: {
    void: { value: '#06100B', type: 'color', description: 'Primary dark surface' },
    panel: { value: 'rgba(0,0,0,0.7)', type: 'color', description: 'Glass panel overlay' },
    line: { value: 'rgba(255,255,255,0.15)', type: 'color', description: 'Subtle divider line' },
    text: { value: '#E6E6E6', type: 'color', description: 'Primary readable text' },
    muted: { value: '#999999', type: 'color', description: 'Secondary text' },
    turquoise: { value: '#00CCBB', type: 'color', description: 'Brand accent' },
    turquoiseGlow: { value: 'rgba(0,204,187,0.2)', type: 'color', description: 'Turquoise glow' },
    gold: { value: '#FFC34D', type: 'color', description: 'Brand gold' },
    goldDeep: { value: '#CC9200', type: 'color', description: 'Deep gold' },
    teal: { value: '#003330', type: 'color', description: 'Dark teal surface' },
  },
  semantic: {
    surface: {
      default: { value: '#06100B', type: 'color' },
      raised: { value: '#0A1A14', type: 'color' },
      overlay: { value: 'rgba(0,0,0,0.7)', type: 'color' },
    },
    text: {
      primary: { value: '#E6E6E6', type: 'color' },
      secondary: { value: '#999999', type: 'color' },
      inverse: { value: '#06100B', type: 'color' },
    },
    border: {
      subtle: { value: 'rgba(255,255,255,0.15)', type: 'color' },
      accent: { value: '#00CCBB', type: 'color' },
    },
    state: {
      hover: { value: 'rgba(0,204,187,0.1)', type: 'color' },
      active: { value: 'rgba(0,204,187,0.2)', type: 'color' },
      disabled: { value: 'rgba(153,153,153,0.4)', type: 'color' },
    },
  },
};

export const font = {
  family: {
    sans: { value: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'], type: 'fontFamily' },
    display: { value: ['Mona Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'], type: 'fontFamily' },
    mono: { value: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'], type: 'fontFamily' },
  },
  size: {
    xs: { value: '0.75rem', type: 'fontSize' },
    sm: { value: '0.875rem', type: 'fontSize' },
    base: { value: '1rem', type: 'fontSize' },
    lg: { value: '1.125rem', type: 'fontSize' },
    xl: { value: '1.25rem', type: 'fontSize' },
    '2xl': { value: '1.5rem', type: 'fontSize' },
    '3xl': { value: '1.875rem', type: 'fontSize' },
    '4xl': { value: '2.25rem', type: 'fontSize' },
    '5xl': { value: '3rem', type: 'fontSize' },
    '6xl': { value: '3.75rem', type: 'fontSize' },
    '7xl': { value: '4.5rem', type: 'fontSize' },
  },
};

export const spacing = {
  0: { value: '0px', type: 'dimension' },
  1: { value: '0.25rem', type: 'dimension' },
  2: { value: '0.5rem', type: 'dimension' },
  3: { value: '0.75rem', type: 'dimension' },
  4: { value: '1rem', type: 'dimension' },
  5: { value: '1.25rem', type: 'dimension' },
  6: { value: '1.5rem', type: 'dimension' },
  8: { value: '2rem', type: 'dimension' },
  10: { value: '2.5rem', type: 'dimension' },
  12: { value: '3rem', type: 'dimension' },
  16: { value: '4rem', type: 'dimension' },
  20: { value: '5rem', type: 'dimension' },
  24: { value: '6rem', type: 'dimension' },
  32: { value: '8rem', type: 'dimension' },
  px: { value: '1px', type: 'dimension' },
};

export const shadow = {
  sm: { value: '0px 1px 2px 0px rgba(0,0,0,0.1)', type: 'shadow' },
  md: { value: '0px 4px 6px -1px rgba(0,0,0,0.1)', type: 'shadow' },
  lg: { value: '0px 10px 15px -3px rgba(0,0,0,0.15)', type: 'shadow' },
  glowTurquoise: { value: '0px 0px 20px 0px rgba(0,204,187,0.2)', type: 'shadow' },
};

export const radius = {
  none: { value: '0px', type: 'dimension' },
  sm: { value: '0.25rem', type: 'dimension' },
  md: { value: '0.5rem', type: 'dimension' },
  lg: { value: '0.75rem', type: 'dimension' },
  xl: { value: '1rem', type: 'dimension' },
  '2xl': { value: '1.5rem', type: 'dimension' },
  full: { value: '9999px', type: 'dimension' },
};

export default { color, font, spacing, shadow, radius };
