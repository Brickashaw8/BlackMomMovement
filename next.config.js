module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
      ],
    },
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  }