module.exports = {
    entry: './js/app.js',
    output: {
        filename: './js/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}