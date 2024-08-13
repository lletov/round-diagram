import React from 'react'
import useStore from './../store/Store'

export const Diagram = () => {

  const state = useStore((state) => state);
  if (state.file){
    return(
      <>
        <p>{state.file.name}</p>
        <p>{state.file.size}</p>
      </>
      
    )
  }
  return (
    <>
    <div className='diagram'>Diagram</div>
    <p>{state.diagramRadius}</p>
    </>
    
  )
}
