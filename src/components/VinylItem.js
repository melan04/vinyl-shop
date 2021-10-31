import CareScale from './CareScale'
import '../styles/VinylItem.css'


function VinylItem({ cover, name, favoris, price, isSpecialOffer }) {
	return (
		<li className='vs-vinyl-item'>
			<span className='vs-vinyl-item-price'>{price}€</span>
			<img className='vs-vinyl-item-cover' src={cover} alt={`${name} cover`} />
			{isSpecialOffer && <div className='vs-sales'>Soldes</div>}
			{name}
			<div>
				<CareScale careType='favoris' scaleValue={favoris} />
			</div>
		</li>
	)
}

export default VinylItem

