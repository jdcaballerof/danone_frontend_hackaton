
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
    { element: <img alt="logo_facebook" src="/icons_RS/facebook_white.svg" height="30" className='cursor-pointer'  onClick={()=> goto('https://www.facebook.com/Danone/')} /> },
    { element: <img alt="logo_twitter" src="/icons_RS/twitter.svg" height="30" className='cursor-pointer'  onClick={()=> goto('https://twitter.com/Danone/')} /> },
    { element: <img alt="logo_instagram" src="/icons_RS/instagram_white.svg" height="30" className='cursor-pointer' onClick={()=> goto('https://www.instagram.com/danonenorthamerica/')}/> },
  ]

  return (
    <footer>
      <Menu center={center} end={end} />
    </footer>
  )
}
