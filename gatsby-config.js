const path = require('path');

module.exports = {
	siteMetadata: {
		siteUrl: 'https://temporage.run.goorm.io',
		title: 'Temporage',
	},
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				sassOptions: {
					includePaths: [__dirname + '/src']
				},
				cssLoaderOptions: {
					camelCase: false,
				}
			}
		},
		{
			resolve: 'gatsby-plugin-alias-imports',
			options: {
				alias: {
					_components: path.resolve(__dirname + '/src/components'),
				},
				extensions: [],
			},
		},
	],
};
``;