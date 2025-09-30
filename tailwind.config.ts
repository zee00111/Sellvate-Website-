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
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
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
        },
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
