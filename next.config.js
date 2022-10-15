/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        legacyBrowsers: false,
        browsersListForSwc: true
    }
}

module.exports = nextConfig