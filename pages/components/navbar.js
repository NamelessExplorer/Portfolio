import Link from 'next/link'
import Image from 'next/dist/client/image'
import React,{useState} from 'react'
import Overheading from './overheading'

const Navbar = () => {

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const toggleMobileMenu = () => {
		setShowMobileMenu((prev) => !prev);
	};

	return (

		<div className='navbar'>

			<div className='logo'>

				<Link className='homelink' href='#home'><Overheading/></Link>

			</div>

			<div className={`flexbox ${showMobileMenu ? 'active' : ''}`} >

				<Link className="NavLink" href='#home'>Home</Link>
				<Link className="NavLink" href='#about'>About</Link>
				<Link className="NavLink" href='#projects'>Projects</Link>
				<Link className="NavLink" href='#contact'>Contact</Link>

			</div>
			<div className={`hamburger-menu ${showMobileMenu ? 'open' : ''}`} onClick={toggleMobileMenu}>
				<div className='line'></div>
				<div className='line'></div>
				<div className='line'></div>
			</div>

		</div>

	)
}

export default Navbar;