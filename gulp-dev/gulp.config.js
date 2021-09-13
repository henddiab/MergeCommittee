var vars = require('./constants');
var baseName = 'committeGPM';

module.exports = {
	app: { 
		name: baseName 
	},

	css: {
		sourcePaths: [
			`${vars.source}sass/shared/**/*.scss`,
			`${vars.source}sass/${baseName}/**/*.scss`,
		],
		exportPath: `${vars.dest}${baseName}/css/`,
		watch: [`${vars.source}sass/shared/**/*.scss`,
		`${vars.source}sass/${baseName}/**/*.scss`],
		thirdParty: {
			// https://github.com/sass/node-sass#options
			sassOptions: {
				errLogToConsole: false,
				outputStyle: 'compact', //nested, expanded, compact, compressed
				imagePath: '../images',
				precision: '3'
			},
			// https://github.com/fmarcia/UglifyCSS
			uglifyCssOptions: {
				'maxLineLen': 312,
				'uglyComments': true
			}
		}
	}, 
	
	//html
	html: {
		templates: vars.source +'templates/',
		pages: [vars.source  + 'pages/**/*.html',vars.source  + 'GPMpgaes/**/*.html'],
		watch   : [vars.source + 'templates/**/*.html', vars.source + 'pages/**/*.html',vars.source  + 'GPMpgaes/**/*.html'],
		exportPath: vars.dest + baseName
	},

	// js
	js: { 
		sourcePaths: [
			`${vars.source}scripts/script.js`,
			`${vars.source}scripts/${baseName}/**/*.js`,
		],
		exportPath: `${vars.dest}${baseName}/js/`,
		watch: [
		`${vars.source}scripts/shared/**/*.js`,
		`${vars.source}scripts/${baseName}/**/*.js`,
		`${vars.source}scripts/script.js`
		],
		vendors: {
			sourcePaths: [
				`${vars.source}scripts/shared/**/*.js`,
				`${vars.source}scripts/${baseName}/**/*.js`,
			],
			exportPath: `${vars.dest}${baseName}/js/`,
		}
	},

	// images
	images: {
		sourcePaths: [
			`${vars.source}images/shared/**/*{.png,.jpg,.svg}`,
			`${vars.source}images/${baseName}/**/*{.png,.jpg,.svg}`
		],
		watch: [
			`${vars.source}images/shared/**/*{.png,.jpg,.svg}`,
			`${vars.source}images/${baseName}/**/*{.png,.jpg,.svg}`
		],
		exportPath: `${vars.dest}/${baseName}/images/`
	},

	// fonts
	fonts: {
		sourcePaths: [
			`${vars.source}fonts/**/*`
		],
		watch: [
			`${vars.source}fonts`
		],
		exportPath: `${vars.dest}/${baseName}/fonts/`
	}
};
