import React, { useContext, useEffect, useRef, useState } from 'react'
import './NavBar.css'

import { Menubar } from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';
        
import { useNavigate } from 'react-router-dom';
import { useGeneralContext } from '../../context/GeneralContext';
import { FormMaker } from '../FormMaker';



const loginInputs = [
    {id: 'username', cols: 12, label: 'Username'},
    {id: 'passwd', cols: 12, label: 'Password', properties: { type:"password"}},
]


export const NavBar = () => {

    const {user, login, logout} = useGeneralContext()

    const [visible, setVisible] = useState(false)

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

    const handleLogin = () => {
        if(!!user.username) navigate('/user')
        else {
            setVisible(true)
        }
    }

    const handleSubmit = ({data, reset}) => {
        console.log(data)
        const {username, passwd} = data
        const res = login(username, passwd)
        console.log(res)
        setVisible(false)
    }


const start = <img alt="logo" src="/danone_imagotipo.svg" height="30" className="mr-2" style={{margin: '10px 0px 0px 10px'}} ></img>;
const end = 
<>
    <i className='pi pi-search cursor-pointer p-1'
        onClick={() => {console.log('search')}}
    />
    <span 
        onClick={handleLogin}
        className='cursor-pointer p-1 px-2 ml-4 text-blue-600 '
    >
        <i className='pi pi-user mr-2'/>
        {!!user.username ? user.username : 'Login'}
    </span>
    {
        !!user.username &&
        <i className='pi pi-sign-out cursor-pointer p-1 mx-2'
            onClick={logout}
        />
    }
</>

return (
    <>
        <Menubar model={items} start={start} end={end}  />

        <Dialog 
            // header="asasas" 
            visible={visible} 
            onHide={() => setVisible(false)}
            // style={{ width: '50%' }} 
            className='w-12 md:w-6'
        >
            <h2 className='text-2xl text-blue-600 text-center' >Login</h2>
            <FormMaker inputs={loginInputs} forButton={{label:''}} callBackForSubmit={handleSubmit} />
        </Dialog>
    </>
)
}