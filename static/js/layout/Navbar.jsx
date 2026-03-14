import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './mobileMenu'

// import { MdOutlineSegment } from 'react-icons/md'

const NAV_LINKS = [
  {
    name: 'About Us',
    linkPath: '#About',
  },
  {
    name: 'Tokenomics',
    linkPath: '#Tokenomics',
  }

]

export default function Navbar() {
  const [menuShow, setMenuShow] = useState(false)

  const HandleClick = () => {
    setMenuShow(true)
  }

  return (
    <div className='relative'>
      <nav className='md:px-10 px-0 md:py-3.5 flex items-center justify-between '>
        <div className='py-3 md:py-0 pl-3 md:pl-0'>
          <Link to='/'>
            <img
              src='/images/logo.png'
              alt='logo'
              className='md:w-[10vw] w-[50vw]'
            />
          </Link>
        </div>
        <div className='md:block hidden'>
          <ul className='flex items-center gap-20 pl-10'>
            { NAV_LINKS.map((item, index) => (
              <li
                key={ index }
                className='font-light '
              >
                <Link to={ item.linkPath }>{ item.name }</Link>
              </li>
            )) }
          </ul>
        </div>
        <div className='md:flex items-center gap-3 hidden'>
          <h2>
            <a href="https://t.me/ShiShionEth" className='text-3xl'>Telegram</a>
          </h2>
          <a href='' className=''>
            <img src="/images/buy-btn.png" alt="" className='w-[10vw]' />
          </a>
        </div>
        <div className='md:hidden block relative'>
          <button onClick={ HandleClick }>
            <img src="/images/toggle.png" alt="" className='w-[25vw] mr-1 -mt-2' />
          </button>
        </div>
      </nav>
      <div className='animation'>
        { menuShow && <MobileMenu setMenuShow={ setMenuShow } /> }
      </div>
    </div>
  )
}
