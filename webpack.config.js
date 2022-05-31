const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		'pom-custom-block-one': './includes/block-editor/blocks/pom-custom-block-one',
		'pom-custom-block-two': './includes/block-editor/blocks/pom-custom-block-two',
		'pom-custom-block-three': './includes/block-editor/blocks/pom-custom-block-three',
	},
};
