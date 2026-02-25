import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",

      // localtunnel
      "https://*.loca.lt",

      // ngrok
      "https://*.ngrok.app",
      "https://*.ngrok-free.app",

      // Cloudflare Tunnel
      "https://*.trycloudflare.com",
    ],
};

export default nextConfig;
