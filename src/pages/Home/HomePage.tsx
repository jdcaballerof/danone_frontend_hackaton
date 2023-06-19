import React, { useState } from 'react'
import '../../styles/index.css'

import { Calendar } from 'primereact/calendar';
import { NavBar } from '../../components';
        

export const HomePage = () => {

  const [date, setDate] = useState<string | Date | Date[]>('')
  return (
    <>
      <h1>HomePage</h1>

      <NavBar  />

      <div className='video-homePage' >
        <video autoPlay loop muted
          width={'100%'} height={'auto'}
          src="https://smartmedia.digital4danone.com//is/content/danone/danone-jo-sten"
        />
      </div>

      {/* <Calendar value={date} onChange={(e) => setDate(e.value!)} /> */}
    </>
  )
}
