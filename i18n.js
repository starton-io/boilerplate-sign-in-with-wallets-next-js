/*
| Developed by Starton
| Filename : i18n.js
*/

const formatters = {
	en: new Intl.NumberFormat('en-EN'),
	fr: new Intl.NumberFormat('fr-FR'),
}

module.exports = {
	locales: ['en', 'fr'],
	defaultLocale: 'en',
	pages: {
		'*': ['common'],
		'/': ['index'],
	},
	interpolation: {
		format: (value, format, lang) => {
			if (format === 'number') return formatters[lang]?.format(value) ?? value
			return value
		},
	},
}
