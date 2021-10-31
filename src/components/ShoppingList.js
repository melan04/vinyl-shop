import { vinylList } from '../datas/vinylList'
import VinylItem from './VinylItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = vinylList.reduce(
		(acc, vinyl) =>
			acc.includes(vinyl.category) ? acc : acc.concat(vinyl.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='vs-vinyl-list'>
				{vinylList.map(({ id, cover, name, favoris, isSpecialOffer })=> (
				<VinylItem
                id={id}
                cover={cover}
                name={name}
                favoris={favoris}
                isSpecialOffer = {isSpecialOffer}
            />
				))}
			</ul>
		</div>
	)
}

export default ShoppingList