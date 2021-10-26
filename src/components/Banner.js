import '../styles/Banner.css'
import logo from '../assets/logo.jpg'

function Banner() {
    const title = 'Vinyl Shop'
    return (
        <div className='vs-banner'>
            <img src={logo} alt='vinyl shop' className='vs-logo' />
            <h1 className='vs-title'>{title}</h1>
        </div>
    )
}

export default Banner