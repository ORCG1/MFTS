import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen md:bg-soccer-texture bg-cover">
      <Header />
      <div className="h-full md:bg-light md:border md:rounded md:mx-3.5">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
