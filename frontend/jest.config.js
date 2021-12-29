module.exports = {
    globalSetup: '<rootDir>/jest.setup.js',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js',
    },
    moduleFileExtensions: ['js', 'vue', 'json'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.svg$': '<rootDir>/jest.svg-loader.js',
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': 'vue-jest',
    },
    collectCoverage: false,
    collectCoverageFrom: ['<rootDir>/**/*.(vue|js)'],
    forceExit: !!process.env.CI,
};
