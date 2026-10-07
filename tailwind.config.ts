import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink: '#10130f', paper: '#f3f3ed', lime: '#c9f269', muted: '#777c72' }, fontFamily: { sans: ['Arial', 'Helvetica Neue', 'sans-serif'], mono: ['ui-monospace', 'SFMono-Regular', 'monospace'] } } },
  plugins: [],
};
export default config;
