import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    webpack(config) {
        config.module?.rules?.push({
            test: /\.svg$/,
            use: [{
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    titleProp: true,
                }
            }],
        })
        return config;
    },
    async rewrites() {
        return [
            {
                source: '/api/v1/:path*',
                destination: `${process.env.API_URL}/api/v1/:path*`,
            }
        ]
    }
};

export default nextConfig;
