/** @type {import('next').NextConfig} */
const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@components'] = resolve(__dirname, 'components');
    config.resolve.alias['@helpers'] = resolve(__dirname, 'helpers');
    config.resolve.alias['@lib'] = resolve(__dirname, 'lib');
    return config;
  },
};
