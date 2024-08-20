import React from 'react'

export const Point = ({title, coords}) => {
  return (
    <div 
      className='point' 
      style={{
        top: coords[1], 
        left: coords[0],
      }}
    >
      {title}
    </div>
  )
}
