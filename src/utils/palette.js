// src/utils/palette.js
// Utility to generate color palettes using chroma-js
// Exports helpers for creating a blue theme for Vuetify using your provided palette

import chroma from 'chroma-js'

// Your palette (light -> dark)
export const classicBlues = ['#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1']

/**
 * Generate an interpolated color scale from a given palette.
 * If `steps` equals palette.length, returns palette as-is.
 * @param {string[]} palette - array of hex colors (ordered light -> dark)
 * @param {number} steps - number of colors to return
 * @param {string} mode - chroma color interpolation mode
 * @returns {string[]} array of hex color strings
 */
export function generateScaleFromPalette(palette = classicBlues, steps = palette.length, mode = 'lab') {
  if (!Array.isArray(palette) || palette.length === 0) return []
  if (steps === palette.length) return palette.slice(0, steps)
  return chroma.scale(palette).mode(mode).colors(steps)
}

/**
 * Create a Vuetify-compatible theme object with the provided blue shades + white/black.
 * Uses the palette you provided and maps common theme color keys.
 * @param {string[]} palette - array of blues (light -> dark). Defaults to `classicBlues`.
 * @returns {Object} colors mapping usable in Vuetify's theme.colors
 */
export function createBlueTheme(palette = classicBlues, primaryIndex = 4) {
  const p = palette
  // pick primary from palette using primaryIndex (default = darkest)
  const primary = p[primaryIndex] || p[2] || '#1976D2'
  const lighter = p[Math.max(primaryIndex - 2, 0)] || p[1] || '#1E88E5'
  const lightest = p[Math.max(primaryIndex - 3, 0)] || p[0] || '#2196F3'
  const darker = p[Math.max(primaryIndex - 1, 0)] || p[3] || '#1565C0'
  const darkest = p[Math.min(primaryIndex + 1, p.length - 1)] || p[4] || '#0D47A1'

  return {
    // Primary variations
    primary,
    'primary-darken-1': darker,
    'primary-darken-2': darkest,
    'primary-lighten-1': lighter,
    'primary-lighten-2': lightest,

    // Useful semantic colors
    secondary: lighter,
    info: lighter,
    success: '#2e7d32',
    error: '#e53935',
    warning: '#ffb300',

    // Base tones
    white: '#ffffff',
    black: '#000000',
    background: '#ffffff',
    surface: '#f8fafc'
  }
}

export default { generateScaleFromPalette, createBlueTheme, classicBlues }
