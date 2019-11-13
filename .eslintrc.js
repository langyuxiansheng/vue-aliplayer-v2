module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
        'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },

    globals: {
        'Aliplayer': false
    },
}
