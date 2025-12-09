/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // and the following to enable top-level await support for Webpack
  // webpack: (config) => {
  //     config.experiments = {
  //         topLevelAwait: true
  //     };
  //     return config;
  // },
  // sassOptions: {
  //     includePaths: [path.join(__dirname, 'styles')]
  // }
};

module.exports = nextConfig;
