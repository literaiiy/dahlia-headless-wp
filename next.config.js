module.exports = {
  basePath: '/a',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/a/',
        permanent: true,
        basePath: false,
      },
    ]
  },
}