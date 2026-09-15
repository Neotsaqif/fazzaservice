/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js,html}', './index.html'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        muted: 'var(--color-muted)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
        foreground: 'var(--color-foreground)',
        'muted-foreground': 'var(--color-muted-foreground)',
        accent: 'var(--color-accent)',
        'cta-wa': 'var(--color-cta-wa)',
        'cta-wa-hover': 'var(--color-cta-wa-hover)',
        destructive: 'var(--color-destructive)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
};
