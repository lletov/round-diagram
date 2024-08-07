import React from 'react'

export const RangeSetting = () => {
  return (
    <div className='range-setting'>
        <div className='range-setting-title'>Ttitle</div>
        <input type='number'/>
        <div className='range-input'>
            <input type='range'/>
            <div>
                <p>10</p>
                <p>40</p>
            </div>
        </div>
    </div>
  )
}
