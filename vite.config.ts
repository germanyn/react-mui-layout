import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env);

  return {
    plugins: [react(), svgr()],
    server: {
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 5173,
    },
  };
});
