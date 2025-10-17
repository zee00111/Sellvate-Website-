import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'cal-sans': ['"Cal Sans"', ...defaultTheme.fontFamily.sans],
        'dm-sans': ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        'trade-winds': ['"Trade Winds"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        success: "#18c964",
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
          950: '#6B2710',
        },
        slate: {
          850: '#1a2332',
          950: '#0a0f1a',
        },
        gray: {
          850: '#1a1f2e',
          950: '#0f1419',
        },
        brand: {
          primary: '#F97316',
          secondary: '#FB923C',
          accent: '#FDBA74',
          dark: '#0f1419',
          light: '#FFF7ED',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'orange-glow': '0 0 20px rgba(249, 115, 22, 0.3)',
        'orange-glow-lg': '0 0 40px rgba(249, 115, 22, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(249, 115, 22, 0.1)',
      },
    },
    daisyui: {
      themes: [
        {
          light: {
            primary: '#F97316', // orange-500
            'primary-focus': '#EA580C', // orange-600
            'primary-content': '#fff',
            accent: '#FB923C', // orange-400
            'accent-focus': '#F97316',
            'accent-content': '#fff',
            secondary: '#FDE68A',
            'secondary-content': '#fff',
            neutral: '#22223B',
            'neutral-content': '#fff',
            'base-100': '#fff',
            info: '#3ABFF8',
            success: '#18c964',
            warning: '#FBBF24',
            error: '#F87272',
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
export default config;
