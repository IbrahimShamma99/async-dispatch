import babel from '@rollup/plugin-babel';

const config = {
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        })
    ]
};

export default config;