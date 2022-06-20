import React from 'react'
import SEO from '../components/SEO'
import { Link } from 'gatsby'
import Icon from '../images/icon.svg'
                                                                                                                                                                                                                                        
const NotFoundPage = () => {                                                                    
  return (
    <div>
      <SEO title="Not found" />
      <div className="flex flex-col items-center mx-3.5 py-2 h-screen">
        <h1 className="my-10 text-3xl text-center font-bold underline">
          Page not found
        </h1>
        <div className="my-10 flex flex-col-reverse items-center md:flex-row">
          <h2 className="text-9xl font-bold">404</h2>
          <Icon className="h-80 w-96" />
        </div>                                                                                                                                                                                                                                                                          
        <div className="mt-20">
          <Link to="/">
            <button className="text-2xl bg-extra-light-gray rounded-full p-4 hover:bg-light-gray">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
