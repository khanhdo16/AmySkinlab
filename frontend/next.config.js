/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "facemedstore.com",
            },
            {
                protocol: "https",
                hostname: "cdn11.bigcommerce.com",
            },
            {
                protocol: "https",
                hostname: "img.freepik.com",
            },
            {
                protocol: "https",
                hostname: "renewesthetics.com",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**",
            },
            {
                protocol: "http",
                hostname: "127.0.0.1",
                port: "1337",
                pathname: "/uploads/**",
            },
        ],
    },
};

module.exports = nextConfig;
