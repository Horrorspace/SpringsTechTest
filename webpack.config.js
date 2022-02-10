const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        }
    };

    if(isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin({
                terserOptions: {
                    format: {
                      comments: false,
                    }
                }
            })
        ]
    }

    return config
};

module.exports = {
    mode: isDev ? 'development' : 'production',
    watch: isDev,
    context: path.resolve(__dirname),
    entry: {
        app: './src/client/index.tsx',
    },
    output: {
        filename: 'public/js/[name].js',
        path: path.resolve(__dirname, './build/client'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chat App',
            template: './src/client/assets/html/template.html',
            scriptLoading: 'defer',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'public/css/[name].css'
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.html'],
        alias: {
            '@api': path.resolve(__dirname, './src/client/api'),
            '@modules': path.resolve(__dirname, './src/client/modules'),
            '@store': path.resolve(__dirname, './src/client/store'),
            '@ui': path.resolve(__dirname, './src/client/ui'),
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                }
            },
        ],
    },
    optimization: optimization()
}
