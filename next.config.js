const withTM = require('next-transpile-modules');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(withCSS(
	withSass(
		withTM({
  		transpileModules: [
  			'react-flexbox-grid',
  			'react-syntax-highlighter',
  		],
  		webpack: function(config) {
		    config.module.rules.push({
		      test: /\.md$/,
		      use: 'raw-loader',
		    })
		    return config
		  },
		})
	)
));
