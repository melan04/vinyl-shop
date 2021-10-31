import Banner from './Banner'
import logo from '../assets/logo.jpg'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='vinyl shop' className='vs-logo' />
				<h1 className='vs-title'>Vinyl Shop</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />
			<Footer />
		</div>
	)
}

export default App