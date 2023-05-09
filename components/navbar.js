import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'

const Navbar = () => {


	return (

		<div className='navbar'>

			<div className='logo'>

				<Link className='homelink' href='/'>AR</Link>

			</div>

			<div className='flexbox'>

				<Link className="NavLink link" href='/'>Home</Link>
				<Link className="NavLink link" href='/about'>About</Link>
				<Link className="NavLink link" href='/blog'>Blog</Link>
				<Link className="NavLink link" href='/contact'>Contact</Link>

			</div>


		</div>

	)
}

export default Navbar;