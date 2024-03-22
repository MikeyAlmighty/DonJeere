const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    });

    return config;
  },
};