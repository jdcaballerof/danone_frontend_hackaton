import { Button } from 'primereact/Button'
import React from 'react'


interface Item {
  link?: string,
  element: JSX.Element,
}
interface Props {
  start?: JSX.Element | JSX.Element[],
  center?: {label: string, command?: () => void}[],
  end?: Item[] | JSX.Element[]
}

export const Menu = ({start, center, end}:Props) => {
  return (
    <>
    <div className='bg-blue-500 p-1 flex-center sm:justify-content-between flex-wrap' >
        {/* start */}
        <div>
          {start}
        </div>

        {/* center */}
        <div>
          {
            !!center && center.length > 0 &&
            <ul className='flex-center flex-wrap sm:flex-nowrap' >
              {
                center.map( ({label, command}, index) => (
                  <li key={`menu-center-btn-${index}-${label}`} > 
                    <Button type="button" label={label} onClick={() => {!!command && command()}}/> 
                  </li>
                ) )
              }
            </ul>
          }
        </div>
        
        {/* end */}
        <div className='mr-5'>
          {
            !!end && end.length > 0 &&
              <ul className='flex-center gap-4 ' >
                {
                  end.map( ( item, index: number)  => {
                    const {element} = item
                    if(!!element) return (
                      <li key={`menu-end-btn-${index}`} > 
                        {element} 
                      </li>
                    )
                    else return <div key={`menu-end-btn-${index}`}>{item}</div> 
                  } )
                }
              </ul>
          }
        </div>
      </div>
    </>
  )
}
