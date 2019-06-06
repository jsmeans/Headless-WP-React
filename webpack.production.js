
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {	
	devtool: 'source-map',
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  },
	devServer: {
		historyApiFallback: true, // This will make the server understand "/some-link" routs instead of "/#/some-link"
	},
	entry: [
		'./src/scripts' // This is where Webpack will be looking for the entry index.js file
	],
	output: {
		path: path.join(__dirname, 'build'), // This is used to specify folder for producion bundle
		filename: 'bundle.js', // Filename for production bundle
		publicPath: '/'
	},
	resolve: {
		modules: [
			'node_modules', 
			'src',
			path.resolve(__dirname, 'src/scripts'),
			path.resolve(__dirname, 'node_modules')
		], // Folders where Webpack is going to look for files to bundle together
		extensions: ['.jsx', '.js'] // Extensions that Webpack is going to expect
	},
  
	module: {
		// Loaders allow you to preprocess files as you require() or “load” them. 
		// Loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle frontend build steps.
		rules: [
      {
        test: /\.jsx?$/, // Here we're going to use JS for react components but including JSX in case this extension is preferable
        include: [
          path.resolve(__dirname, "src"),
        ],
        use: ['react-hot-loader/webpack']
      },
      { use:[{
        loader: "babel-loader",
        query: {
          plugins: ['@babel/transform-runtime','@babel/plugin-proposal-class-properties'],
          presets: ['@babel/preset-env', '@babel/react'],
        }
      }],
        

        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, "src"),
        ],

        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,

        // Options to configure babel with
        
      },
      {
            test: /\.scss$/,

              use: [{

                loader: "style-loader"

              }, {

                loader: "css-loader"

              }, {

                loader: "sass-loader"

              }]
        }
    ]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(), // Webpack will let you know if there are any errors

		// Declare global variables
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom',
			_: 'lodash'
		}),

	    new HtmlWebpackPlugin({
	        filename: 'index.html',
	        template: './src/index.html',
	        hash: true
	    }),
	]
}
