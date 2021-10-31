import acdc from '../assets/acdc.jpg'
import beatles from '../assets/beatles.jpg'
import gunsnroses from '../assets/gunsnroses.jpeg'
import kiss from '../assets/kiss.jpeg'
import scorpions from '../assets/scorpions.jpeg'
import indochine from '../assets/indochine.jpeg'
import alicecooper from '../assets/alicecooper.jpeg'
import thecure from '../assets/thecure.jpeg'
import rollingstones from '../assets/rollingstones.jpeg'

export const vinylList = [
	{
		name: 'The Beatles',
		category: 'Pop-rock',
		id: '1ed', 
		cover: beatles,
		favoris: 2,
		price: 15,

	},
	{
		name: `Guns N' Roses`,
		category: 'Rock',
		id: '2ab',
		isSpecialOffer: true,
		cover: gunsnroses,
		favoris: 2,
		price: 10,
	},
	{
		name: 'Kiss',
		category: 'Hard-Rock',
		id: '3sd', 
		cover: kiss,
		favoris: 1,
		price: 5,
	},
	{
		name: 'Scorpions',
		category: 'Hard-Rock',
		id: '4kk',
		cover: scorpions,
		favoris: 2,
		price: 20,
	},
	{
		name: 'AC/DC',
		category: 'Hard-Rock',
		id: '5pl',
		isSpecialOffer: true,
		cover: acdc,
		favoris: 3,
		price: 10,
	},
	{
		name: 'Alice Cooper',
		category: 'Rock',
		id: '6uo',
		cover: alicecooper,
		favoris: 2,
		price: 12,
	},
	{
		name: 'The Cure',
		category: 'Rock',
		id: '7ie',
		isSpecialOffer: true,
		cover: thecure,
		favoris: 1,
		price: 17,
	},
	{
		name: 'Rolling Stones',
		category: 'Rock',
		id: '8fp',
		cover: rollingstones,
		favoris: 2,
		price: 25,
	},
	{
		name: 'Indochine',
		category: 'Rock français',
		id: '9vn',
		cover: indochine,
		favoris: 3,
		price: 10,
	}
]