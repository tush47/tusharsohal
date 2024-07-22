/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      PRISMIC_API_REF: process.env.PRISMIC_API_REF,
      PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
    },
    // Other configuration options can go here
  };
  
  export default nextConfig;
  