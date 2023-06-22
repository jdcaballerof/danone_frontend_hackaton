import React from 'react'
import { Body } from '../Body/Body'
import { NavBar } from '../Navbar/NavBar'
import { Footer } from '../Footer/Footer'


interface Props {
  children: any
  className?: string
}

export const Container = ({children, className}:Props) => {
  return (
    <Body>
      <NavBar  />

      <div className={className}>
        {children}
      </div>

      <Footer/>

    </Body>
  )
}
