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

			<div className='flexbox'>

				<Link className="NavLink link" href='#home'>Home</Link>
				<Link className="NavLink link" href='#about'>About</Link>
				<Link className="NavLink link" href='#projects'>Projects</Link>
				<Link className="NavLink link" href='#contact'>Contact</Link>

			</div>
			<div className='hamburger-menu' onClick={toggleMobileMenu}>
				<div className='line'></div>
				<div className='line'></div>
				<div className='line'></div>
			</div>

		</div>

	)
}

export default Navbar;