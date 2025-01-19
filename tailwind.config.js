const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.mdx",
    "./registry/**/*.{ts,tsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1600px'
  		}
  	},
  	extend: {
		fontFamily: {
			sans: ["var(--font-geist-sans)", ...fontFamily.sans],
			mono: ["var(--font-geist-mono)", ...fontFamily.mono],
		},
		colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
				foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
			},
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},
		},
		borderRadius: {
			xl: "calc(var(--radius) + 4px)",
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		animation: {
			'spin-slow': 'spin 3s linear infinite',
			marquee: "marquee var(--duration) linear infinite",
        	"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
			spotlight: "spotlight 2s ease .75s 1 forwards",
			'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
		},
		keyframes: {
			spin: {
			  from: { transform: 'rotate(0deg)' },
			  to: { transform: 'rotate(360deg)' },
			},
			marquee: {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(calc(-100% - var(--gap)))" },
			},
			"marquee-vertical": {
				from: { transform: "translateY(0)" },
				to: { transform: "translateY(calc(-100% - var(--gap)))" },
			},
			spotlight: {
				"0%": {
				  opacity: 0,
				  transform: "translate(-72%, -62%) scale(0.5)",
				},
				"100%": {
				  opacity: 1,
				  transform: "translate(-50%,-40%) scale(1)",
				},
			},
			'shake' : {
				'10%, 90%': {
					transform: 'translate3d(-1px, 0, 0)'
				},
				'20%, 80%' : {
					transform: 'translate3d(2px, 0, 0)'
				},
				'30%, 50%, 70%': {
					transform: 'translate3d(-4px, 0, 0)'
				},
				'40%, 60%': {
					transform: 'translate3d(4px, 0, 0)'
				}
            }
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
