/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  // 国际化支持
  i18n: i18n,
  reactStrictMode: true,
  basePath: "/study"
}

module.exports = nextConfig
