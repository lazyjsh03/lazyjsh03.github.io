/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내의 모든 js, jsx 파일 등을 감시
  ],
  theme: {
    extend: {
      colors: {
        "nomad-bg": "#F8F5F2",
        "nomad-text": "#423A36",
        "nomad-primary": "#D97706",
        "nomad-secondary": "#848C7B",
        "nomad-accent": "#F5E8D8",
      },
    },
  },
  plugins: [],
};
