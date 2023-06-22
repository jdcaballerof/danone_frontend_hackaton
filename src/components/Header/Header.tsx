import React from 'react'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/Button';
import './Header.css'

export const Header = () => {

    const end = <Button label="Submit" icon="pi pi-user" />


  return (
    <nav>
        <Menubar end={end}  />
    </nav>

  )
}
