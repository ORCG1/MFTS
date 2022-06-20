import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/icon-stroke.svg'
import Login from '../images/login.svg'

const Header = () => {
  return (
    <header className="pt-3 md:pt-5">
      <nav className="flex justify-between items-center px-3.5 md:mb-3 md:mx-3.5 md:py-0.5 md:bg-light md:rounded md:border">
        <Link
          to="/"
          className="p-4 md:p-0 leading-none hover:text-blue hover:fill-blue"
        >
          <Logo className="object-contain h-10 w-10" />
          <p className="hidden md:inline-block font-ff text-xl leading-none">
            MFTS
          </p>
        </Link>

        <Link to="/login">
          <button className="flex items-center rounded-full p-4 hover:bg-extra-light-gray">
            <Login className="object-contain h-8 w-8 fill-black" />
            <span className="hidden md:inline-block text-xl pl-2">Login</span>
          </button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
