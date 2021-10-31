import Banner from './Banner'
import logo from '../assets/logo.jpg'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'
import { useState } from 'react'

function App() {
	const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='vinyl shop' className='vs-logo' />
				<h1 className='vs-title'>Vinyl Shop</h1>
			</Banner>
			<div className='vs-layout-inner'>
				<ShoppingList cart={cart} updateCart={updateCart} />
				<Cart cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App