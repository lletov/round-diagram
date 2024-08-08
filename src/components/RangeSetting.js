import React, { useState } from 'react'
import { useContext } from 'react'

export const RangeSetting = ({title, min, max, value}) => {

  return (
    <div className='range-setting'>
        <div className='range-setting-title'>{title}</div>
        <input type='number' value={value}/>
        <div className='range-input'>
            <input type='range' min={min} max={max} defaultValue={value}/>
            <div>
                <p>{min}</p>
                <p>{max}</p>
            </div>
        </div>
    </div>
  )
}
