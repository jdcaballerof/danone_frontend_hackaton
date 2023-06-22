import React, { useEffect, useState } from 'react'

import { CaloriesCard, Container, UserCard } from '../../components'
import { useGeneralContext } from '../../context/GeneralContext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/Button';
import { useNavigate } from 'react-router-dom';

export const UserPage = () => {

  const {user, deleteUsers, logout} = useGeneralContext()
  
  const navigate = useNavigate()

  useEffect(() => {
      if(!user.username) navigate('/home')
  }, [user])
  
  const [visible, setVisible] = useState(false)

  const deleteSavedUsers = () => {
    deleteUsers()
    setVisible(false)
    logout()
  }

  // useEffect(() => {
  //   console.log(user)
  
  //   return () => {
      
  //   }
  // }, [])
  
  

  return (
    <Container>
      <div className='w-full'>
        <div className='flex justify-content-end p-2'>
          <i className='pi pi-cog cursor-pointer p-1'
            onClick={() => setVisible(true) }
          />
        </div>
        
        <div className='flex-center align-items-start px-4 pb-6 gap-4'>
          <div className='w-full' >
            <UserCard name={user.username} />

          </div>

          <div className='w-full' >
            <CaloriesCard calories={user.cal} />
          </div>

        </div>
      </div>



        <Dialog 
          visible={visible} 
          onHide={() => setVisible(false)}
          className='w-12 md:w-6'
        >
          <div className='flex-center gap-4'>
            <h2 className='text-xl' >Delete users in Local Storage</h2>
            <Button icon='pi pi-trash' severity='danger' 
              onClick={deleteSavedUsers} 
              disabled={!user.username}
            />
          </div>
        </Dialog>
    </Container>
  )
}
