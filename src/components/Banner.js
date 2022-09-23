import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'La boîte aux lettres'
    return (
        <div className='site-banner'>
            <h1 className='site-title'>{title}</h1>
            <img src={logo} alt='La boîte aux lettres' className='site-logo' />
        </div>
    )
}

export default Banner