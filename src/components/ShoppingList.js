import { vinylList } from '../datas/vinylList'
import { useState } from 'react'
import Categories from './Categories'
import VinylItem from './VinylItem'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = vinylList.reduce(
		(acc, vinyl) =>
			acc.includes(vinyl.category) ? acc : acc.concat(vinyl.category),
		[]
	)
	function addToCart(name, price) {
		const currentVinylAdded = cart.find((vinyl) => vinyl.name === name)
		if (currentVinylAdded) {
			const cartFilteredCurrentVinyl = cart.filter(
				(vinyl) => vinyl.name !== name
			)
			updateCart([
				...cartFilteredCurrentVinyl,
				{ name, price, amount: currentVinylAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
	return (
		<div className='vs-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='vs-vinyl-list'>
				{vinylList.map(({ id, cover, name, favoris, price, category, isSpecialOffer }) => 
				!activeCategory || activeCategory === category ? (
					<div key={id}>
						<VinylItem
							cover={cover}
							name={name}
							favoris={favoris}
							isSpecialOffer={isSpecialOffer}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				) : null
					)}
			</ul>
		</div>
	)
}

export default ShoppingList