const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: false,
        'shared-node-browser': true
    },
    rules: {
        'no-console': isProduction ? 2 : 1,
        'no-process-env': 0
    },
    globals: {
        process: true
    }
};
