export default {
    presets: [
        '@babel/preset-env',  // Preset ini untuk memastikan Babel mendukung ECMAScript terbaru
    ],
    plugins: [
        '@babel/plugin-transform-runtime',  // Optional, untuk mengurangi ukuran bundle dan menghindari polyfills ganda
    ]
};
