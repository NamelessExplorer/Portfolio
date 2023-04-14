import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/dist/client/image'

const Navbar = () => {
	return (

		<div className='navbar'>

			<div className='logo'>

				<Image width={80} height={80} src='/logo.png' alt='' />
			
			</div>

			<div className='flexbox'>

				<Link className= "NavLink" href='/'>Home</Link>
				<Link className= "NavLink" href='/about'>About</Link>
				<Link className= "NavLink" href='/blog'>Blog</Link>
				<Link className= "NavLink" href='/contact'>Contact</Link>
				
				<button className='NavLink navbut'>CART</button>
				
			</div>


		</div>

	)
}

export default Navbar;