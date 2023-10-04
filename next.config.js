/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    MONGO: process.env.MONGO,
  },
};

module.exports = nextConfig;

// import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
// module.exports = (pahase) => {
//   if (pahase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       reactStrictMode: true,
//       compiler: {
//         styledComponents: true,
//       },

//       env: {
//         MONGO: process.env.MONGO_DEV,
//       },
//     };
//   }
//   return {
//     reactStrictMode: true,
//     compiler: {
//       styledComponents: true,
//     },

//     env: {
//       MONGO: process.env.MONGO,
//     },
//   };
// };
