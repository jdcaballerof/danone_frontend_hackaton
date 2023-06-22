
import React from 'react'
import { Menu } from '../Menu/Menu'
import { goto } from '../../helpers/goto'

export const Footer = () => {

  const center = [
    {label: "NEWS"},
    {label: "PRODUCTS"},
    {label: "CONTACT"},
    {label: "EMAILS"}
  ]

  const end = [
    { element: <img alt="logo_facebook" src="src\icons\RS\facebook_white.svg" height="30" className='cursor-pointer'  onClick={()=> goto('https://www.facebook.com/Danone/')} /> },
    { element: <img alt="logo_twitter" src="src\icons\RS\twitter.svg" height="30" className='cursor-pointer'  onClick={()=> goto('https://twitter.com/Danone/')} /> },
    { element: <img alt="logo_instagram" src="src\icons\RS\instagram_white.svg" height="30" className='cursor-pointer' onClick={()=> goto('https://www.instagram.com/danonenorthamerica/')}/> },
  ]

  return (
    <footer>
      <Menu center={center} end={end} />
    </footer>
  )
}
