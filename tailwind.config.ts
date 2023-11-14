import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //backgrounds
        'ground-main': 'var(--color-bg-main)',
        'ground-toggle': 'var(--color-bg-toggle)',
        'ground-screen': 'var(--color-bg-screen)',
        //keys
        'primary-key-bg': 'var(--color-primary-key-bg)',
        'primary-key-shadow': 'var(--color-primary-key-shadow)',
        'secondary-key-toggle': 'var(--color-secondary-key-toggle)',
        'secondary-key-shadow': 'var(--color-secondary-key-shadow)',
        'accent-key-bg': 'var(--color-accent-key-bg)',
        'accent-key-shadow': 'var(--color-accent-key-shadow)',
        //text
        'primary-text': 'var(--color-primary-text)',
        'secondary-text': 'var(--color-secondary-text)',
        'key-text': 'var(--color-key-text)',
        'key-secondary-text': 'var(--color-key-secodary-text)',
        'key-accent-text': 'var(--color-key-accent-text)',
      },
      translate: {
        toggle: 'var(--translate-toggle)',
      },
      boxShadow: {
        key: '0 4px 0 var(--color-accent-key-shadow)',
      },
    },
  },
  plugins: [],
}
export default config
