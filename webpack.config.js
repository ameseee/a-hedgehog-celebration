const path = require('path');

module.exports = {
   devtool: 'inline-source-map',
   entry: {
     main: "./lib/index.js"
   },
   output: {
     path: __dirname,
     filename: "dist/[name].bundle.js"
   },
   mode: 'development',
   module: {
     rules: [
       {
         exclude: /node_modules/
       },
       {
         test: /\.js$/,
         loader: 'babel-loader',
         query: {
           presets: ['es2015']
         }
       }
     ]
   },
   resolve: {
     extensions: ['.js', '.json', '.css']
   }
 };
