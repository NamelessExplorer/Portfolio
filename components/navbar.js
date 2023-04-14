import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/dist/client/image'

const Navbar = () => {
	return (

		<div className='navbar flex justify-between'>
			
			<div className='logo'>
				<Image width={80} height={80} src='/logo.png' alt='' />
			</div>
			
				<ul className='flexbox'>
					<Link href='/'>Home</Link>
					<Link href='/about'>About</Link>
					<Link href='/blog'>Blog</Link>
					<Link href='/contact'>Contact</Link>
				</ul>

			<div className='cart'>
				<button>CART</button> 
			</div>
		</div>

	)
}

export default Navbar;