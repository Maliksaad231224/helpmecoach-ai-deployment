/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				'sans': ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'heading': ['Poppins', 'Exo 2', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Updated Color Palette per Design Specifications
				navy: {
					light: '#233554', // Border/Lines color
					dark: '#0A192F', // Primary Background (Deep Navy)
					deep: '#112240', // Secondary Background (Lighter Navy)
				},
				text: {
					primary: '#CCD6F6', // Primary Text/Headings (Light Slate)
					secondary: '#8892B0', // Secondary Accent (Slate Blue/Gray)
				},
				accent: {
					blue: '#64FFDA', // Primary Accent (Aqua/Mint Green)
					gold: '#FFD700',
					green: '#64FFDA', // Use same as primary accent for consistency
				},
				// Legacy compatibility
				'museum': {
					'deep-ocean': '#0D1B2A',
					'midnight-ink': '#122133',
					'pure-white': '#F8F9FA',
					'stone-grey': '#A8B2C2',
					'electric-blue': '#00A6FB',
				},
				'openai': {
					'background': '#0D1B2A',
					'off-white': '#122133',
					'light-gray': '#1B263B',
					'medium-gray': '#A8B2C2',
					'dark-gray': '#F8F9FA',
					'near-black': '#F8F9FA',
				},
				'camp': {
					'blue': '#00A6FB',
					'green': '#50E3C2',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#00A6FB',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: '#50E3C2',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				accent: {
					DEFAULT: '#00A6FB',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
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
			backgroundImage: {
				'founder-gradient': 'linear-gradient(135deg, #64FFDA, #112240)',
				'navy-gradient': 'linear-gradient(to bottom, #112240, #0A192F)',
				'museum-gradient': 'linear-gradient(to bottom, #112240, #0A192F)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'typing': {
					'0%': { opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'typing': 'typing 1.5s infinite',
				'fade-in': 'fade-in 0.6s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
