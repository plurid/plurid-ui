const path = require('path');
const SRC_PATH = path.join(__dirname, '../source');
const STORIES_PATH = path.join(__dirname, '../source/__stories__');


module.exports = ({config}) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH, STORIES_PATH],
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
                options: {
                    configFileName: './storybook/tsconfig.json'
                }
            },
            { loader: require.resolve('react-docgen-typescript-loader') }
        ]
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve('../'),
    ];

    return config;
};
