import React, { useState } from 'react'
import { useContext } from 'react'
import useStore from './../store/Store'

export const RangeSetting = ({title, stateParam, min, max, value}) => {
  const setRangeInput = useStore(({ setRangeInput }) => setRangeInput)

  return (
    <div className='range-setting'>
        <div className='range-setting-title'>{title}</div>
        {/* <input 
          type='number' 
          value={value}
          onChange={(event)=>{setDiagramRadius(event.target.value, min, max)}}
        /> */}
        <p>{value}</p>
        <div className='range-input'>
            <input 
              type='range' 
              min={min} 
              max={max} 
              value={value} 
              onChange={(event)=>{setRangeInput(stateParam, event.target.value, min, max)}}
            />
            <div>
                <p>{min}</p>
                <p>{value}</p>
                <p>{max}</p>
            </div>
        </div>
    </div>
  )
}
