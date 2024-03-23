module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(scss|sass|css)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    });

    return config;
  },
};