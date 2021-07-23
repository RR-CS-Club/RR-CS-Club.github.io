/** @format */

module.exports = {
  basePath: '/',
  assetPrefix: '//',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
      
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/comingsoon",
        permanent: true,
      },
      {
        source: "/workshops",
        destination: "/comingsoon",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/comingsoon",
        permanent: true,
      },
      {
        source: "/wall",
        destination: "/comingsoon",
        permanent: true,
      },
    ];
  },
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
};
