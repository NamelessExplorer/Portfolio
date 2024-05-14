import Image from 'next/image'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import Overheading from './overheading'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const poppins = Poppins({ weight: ['500'], style: ['normal', 'italic'], subsets: ['latin'], display: 'swap' })

export default function Footer() {

  return (
    <>
      <div className='footer1'>
        <p className='social'>Connect with me: </p>
        <a href="https://github.com/anr2601" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/ansh12/" target="_blank" rel="noopener noreferrer" className='ln'>
          <FaLinkedin size={32} />
        </a>

      </div>
      <div className='footer2'>
        <p>@2024 Copyright: Anshumann Ravichandar</p>
      </div>
    </>
  )
}