import React, { useState } from 'react'

import { Knob } from 'primereact/knob';


export const CaloriesCard = ({calories}) => {

    

    const cal_breakFast = Math.round( calories*0.5) | 0
    const cal_lunch     = Math.round( calories*0.3) | 0
    const cal_dinner    = Math.round( calories-(cal_breakFast+cal_lunch) ) | 0

    const [knobs, setKnobs] = useState({
        1: 0,
        2: 0,
        3: 0,
    })

    const setKnob = (value, i: number) => {
        setKnobs( k => ({...k, [i]: value}))
    }

  return (
    <>
        <div className='flex-center flex-column gap-4'>
            <h2 className='text-5xl' >Calories info</h2>
            <h2 className='text-3xl' > {calories} per/day </h2>
            <div className='w-18rem shadow-4 p-5 pb-3 border-round-md flex-center justify-content-start'>
                <Knob 
                    valueColor="#3b82f6"  
                    max={cal_breakFast}
                    readOnly 
                    value={ cal_breakFast } 
                    onChange={(e) => setKnob(e.value, 1)} 
                />
                <h2 className='ml-4 mb-2'>Breakfast</h2>
            </div>
            <div className='w-18rem shadow-4 p-5 pb-3 border-round-md flex-center justify-content-start'>
                <Knob 
                    valueColor="#3b82f6"  
                    max={cal_lunch}
                    readOnly 
                    value={ cal_lunch } 
                    onChange={(e) => setKnob(e.value, 2)} 
                />
                <h2 className='ml-4 mb-2'>Lunch</h2>
            </div>
            <div className='w-18rem shadow-4 p-5 pb-3 border-round-md flex-center justify-content-start'>
                <Knob 
                    valueColor="#3b82f6"  
                    max={cal_dinner}
                    readOnly 
                    value={ cal_dinner } 
                    onChange={(e) => setKnob(e.value, 3)} 
                />
                <h2 className='ml-4 mb-2'>Dinner</h2>
            </div>
           

        </div>

    </>
  )
}
