import React from 'react'
import { useContext } from 'react'
// import DiagramContext from './../App'
import { DiagramContext } from './Context.js';


export const RangeSetting = ({title, min, max}) => {
  const params = useContext(DiagramContext);
  return (
    <div className='range-setting'>
        <div className='range-setting-title'>{title}</div>
        <input type='number' value="16"/>
        <div className='range-input'>
            <input type='range' min={min} max={max} defaultValue={params.groupRadius}/>
            <div>
                <p>{min}</p>
                <p>{max}</p>
            </div>
        </div>
    </div>
  )
}
