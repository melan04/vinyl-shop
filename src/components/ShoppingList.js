import { vinylList } from '../datas/vinylList'
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
				{vinylList.map((vinyl) => (
					<li key={vinyl.id} className='vs-vinyl-item'>
						{vinyl.name}
						{vinyl.isSpecialOffer && <div className='vs-sales'>Soldes</div>}
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList