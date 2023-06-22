import React, { useRef, useState } from 'react'
import { Container, FormMaker } from '../../components'

import { calcCalories } from '../../helpers/calcCalorias';
import CountUp from 'react-countup';
import { useGeneralContext } from '../../context/GeneralContext';
import { Button } from 'primereact/Button';
import { Toast } from 'primereact/toast';
        

const caloriasInputs = [
  {id: 'gender', cols: 12, label: 'Gender', info: 'Just for the calc', 
    inputType: 'select', optionsforSelect:[
      {name: "Male", code: 0},
      {name: "Female", code: 1},
  ],
  },
  {id: 'weight', cols: 12, label: 'Weight (kg)', properties: { keyfilter:"int"}},
  {id: 'height', cols: 12, label: 'Height (cm)', properties: { keyfilter:"int"}},
  {id: 'age', cols: 12, label: 'Age'},
  {id: 'physical_activity', cols: 12, label: 'Phisical activity level',
    inputType: 'select', optionsforSelect:[
      {name: "Sedentary", code: 1.2},
      {name: "Slightly active", code: 1.375 },
      {name: "Moderately active", code: 1.55 },
      {name: "Very active", code: 1.725 },
      {name: "Extremely active", code: 1.9 },
  ],
  },
]


export const CaloriesPage = () => {

  const {user:{username}, setCal} = useGeneralContext()

  const toast = useRef<Toast>(null);

  const [calories, setCalories] = useState(0)

  const onSubmit= ({data, reset}) => {
    console.log(data)
    const { age, gender, height, weight, physical_activity } = data
    const necessaryCalories = calcCalories(Number(age), gender, Number(height), Number(weight), physical_activity)
    setCalories(necessaryCalories)
  }


  return (
    <Container className='p-4'>

      {
        calories != 0 &&
        <>
          <h2 className='text-center my-4 text-6xl'>
            <CountUp start={0} end={calories} duration={1.5} className='text-blue-600'/> cal / day
          </h2>
          {
              !!username ? 
              <div className='flex-center'>
                <Button label='Set to me' 
                onClick={() => {
                  setCal(calories)
                  toast.current?.show({ severity: 'success', summary: 'Succes', detail: 'Calories setted' });
                }} />
              </div>
              : <h3 className='text-red-600 text-center'>Login to set you calories to your plan</h3>
          }
        </>
      }

      <div className='md:mx-8'>
        <FormMaker 
          inputs={caloriasInputs} 
          callBackForSubmit={onSubmit} 
          forButton={{label: 'Calculate', icon: 'pi pi-calculator'}} 
        />

      </div>


      <Toast ref={toast} />
    </Container>
  )
}
