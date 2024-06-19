/** @format */

import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			dropShadow: {
				icon: '0px 2px 12px rgba(242,116,5,0.5)',
			},
			boxShadow: {
				cardShadow:
					'-6px -6px 18px 0px #FFF, 6px 6px 18px 0px rgba(0, 0, 0, 0.25);',
			},
			backgroundImage: {
				bgHome: "url('/images/seguranca-do-computador.webp')",
				bgAbout: "url('/images/about-bg.webp')",
				bgSolutions: "url('/images/solutions-bg.webp')",
				bgProjects: "url('/images/projects-bg.webp')",
				bgContact: "url('/images/contact-bg.webp')",
				bgButtomOrange:
					'linear-gradient(93deg, #F27405 -5%, #914603 46.15%, #337A74 60.19%, #023531 105.16%)',
				bgCTA: 'linear-gradient(104deg, #035951 42.57%, #F27405 92.18%)',
			},
			colors: {
				brand: {
					orange: {
						100: '#FEF1E6',
						300: '#FAC79B',
						500: '#F27405',
						700: '#C25D04',
						900: '#612E02',
					},
					blue: {
						100: '#DDEEED',
						300: '#94BDB9',
						500: '#035951',
						700: '#023531',
						900: '#011210',
					},
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
