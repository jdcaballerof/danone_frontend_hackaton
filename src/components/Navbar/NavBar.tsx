import React, { useEffect, useRef } from 'react'

import { MegaMenu } from 'primereact/megamenu';
import { Menubar } from 'primereact/menubar';
  
import { InputText } from 'primereact/inputtext';
import './NavBar.css'
import { useNavigate } from 'react-router-dom';



export const NavBar = () => {

  const navigate = useNavigate()

  const items = [
    {
        label: 'Home', icon: 'pi pi-fw pi-home', command: () => {navigate('/home')}
    },
    {
        label: 'Products', icon: 'pi pi-fw pi-verified',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                },
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Diary', icon: 'pi pi-fw pi-calendar', command: () => {navigate('/calories')},
    },
    {
        label: 'Contact', icon: 'pi pi-fw pi-comments',
    }
];


const start = <img alt="logo" src="/danone_imagotipo.svg" height="30" className="mr-2" style={{margin: '10px 0px 0px 10px'}} ></img>;
const end = <InputText placeholder="Search" type="text" />;

return (
    <div >
        {/* <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="832px" /> */}
        <Menubar model={items} start={start} end={end}  />
    </div>
)
}