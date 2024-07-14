import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [typography],
};
export default config;










// import { Config } from 'tailwindcss';

// const config: Config = {
//   content: [
//     './src/**/*.{js,ts,jsx,tsx}', // Adjust the paths according to your project structure
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

// export default config;
