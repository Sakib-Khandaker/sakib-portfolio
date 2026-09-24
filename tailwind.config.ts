import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#0B1120", panel: "#111827", line: "#243044", brand: "#3B82F6", cyan: "#22D3EE" }, boxShadow: { glow: "0 0 60px rgba(59,130,246,.15)" } } }, plugins: [] };
export default config;
