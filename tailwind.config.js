module.exports = {
  purge: [
	'./src/**/*.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
	  extend: {
		  backgroundImage: {
			  'sanFrancisco': "url('../img/fundas2.png')",
			  'sanFranciscoDesktop': "url('../img/fundas2.png')",
			  'yosemite': "url('../img/telas.png')",
			  'LA': "url('../img/Lona.png')",
			  'seattle': "url('../img/seattle.jpg')",
			  'new_york': "url('../img/new_york.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'sydney': "url('../img/sydney.jpg')",
			  'miami': "url('../img/miami.jpg')",
			  'switzerland': "url('../img/switzerland.jpg')",
			  'bali': "url('../img/bali.jpg')",
			  'norway': "url('../img/norway.jpg')",
			  'chicago': "url('../img/portada.png')",
			  'europe': "url('../img/europe.jpg')",
			  'iceland': "url('../img/iceland.jpg')",
			  
			},
			backgroundColor: theme =>({
				...theme('colors'),
				'principal': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			}),
			textColor:{
				'principal': '#CC2D4A',
				'secondary': '#8FA206',
				'tertiary': '#61AEC9',
			},
			fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
			 },
			
		},
	},
	variants: {
		width: ["responsive", "hover", "focus"],
		extend: {
	 },
  },
  plugins: [],
}
