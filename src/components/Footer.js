import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Veuillez indiquer une adresse valide")
		}
	}

	return (
		<footer className='vs-footer'>
			<div className='vs-footer-elem'>
            Reçois ta dose de musique toutes les semaines dans ta boite mail !
			</div>
			<div className='vs-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur} 
			/>
		</footer>
	)
}

export default Footer