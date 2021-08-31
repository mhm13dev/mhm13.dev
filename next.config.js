const withPlugins = require('next-compose-plugins');
const sizeOfImage = require('image-size');

module.exports = withPlugins([], {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        '@svgr/webpack',
        {
          loader: 'url-loader',
          options: {
            generator: (content, mimetype, encoding, resourcePath) => {
              const dimensions = sizeOfImage(content);
              return {
                src: `data:${mimetype}${
                  encoding ? `;${encoding}` : ''
                },${content.toString(encoding)}`,
                height: dimensions.height,
                width: dimensions.width,
              };
            },
          },
        },
      ],
    });
    return config;
  },
});
