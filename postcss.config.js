module.exports = {
	plugins: [
	require('tailwindcss'),
	require('autoprefixer'),
	process.env..NODE_ENV === require('@fullhuman/postcss-purgecss')({
		content : [

			'./src/**/*.vue',
			'./public/index.html',
		],
		defaultExtractor: content => content.match(/[A-Za-z0-9_:/]+/g) || []
	})
	]
}