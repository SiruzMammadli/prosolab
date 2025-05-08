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
    }
};

export default nextConfig;
