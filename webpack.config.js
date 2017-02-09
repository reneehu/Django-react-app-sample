var path = require("path")
var webpack = require("webpack")
var BunldeTracker = require("webpack-bundle-tracker")

module.exports = {
   context:__dirname,

   entry: './assets/js/index', 

   output: {
   		path: path.resolve('./assets/bundles'),
   		filename: "[name]-[hash].js,"
   },

   plungins: [
   		new BunldeTracker({filename: './webpack-stats.json'}),
   ],

   module: {
   	loaders: [
		{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
    ],
   }




}