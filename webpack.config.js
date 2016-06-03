/**
 * Created by iag on 5/31/16.
 */
module.exports = {
    entry: './app/App.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        },{
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    }
};