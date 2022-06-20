import React from 'react'
import Icon from '../images/icon.svg'

interface DefaultPageProps {
  path: string
}

const Home = (props: DefaultPageProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex-col">
        <Icon className="mx-auto select-none object-contain h-24 w-40 md:h-48 w-80" />
        <h1 className="text-3xl text-center font-bold mt-2">
          My Favorite Teams Soccer
        </h1>
      </div>
    </div>
  )
}

export default Home
