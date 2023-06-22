import React, { useState } from 'react'

import { Container, VideoPlayer } from '../../components';
import { Button } from 'primereact/Button';
        
        

export const HomePage = () => {

  const btn = [ <Button label='Login' icon='pi pi-user' /> ]
  return (
    <Container>

      <section>
        <VideoPlayer src="https://smartmedia.digital4danone.com//is/content/danone/danone-jo-sten" />

        <div className='text-center mt-8' >
          <h2>Keep track of your daily calorie limit</h2>
          <br />
          <p>Tell us your maximum daily calorie intake and we will recommend the products that best suit your goals!</p>
        </div>

        <div className='flex-center w-full my-6'>
          <Button label="Start now" outlined />
        </div>
      </section>

    </Container>
  )
}
