import React from 'react'
import useStore from './../store/Store'
import { testCreateObjectFromFile, uploadFile } from './../methods/Methods'

export const Diagram = () => {

  const state = useStore((state) => state);

  if (state.file){
    if (state.diagramObject) {
      let objAsStr = state.diagramObject.toString()
      return(
        <>
          <p>{objAsStr}</p>
          <p>{state.file.size}</p>
        </>
        
      )
    }
    return (
      <p>Loading...</p>
    )
  }
  return (
    <>
    <div className='diagram'>Diagram</div>
    <p>{state.diagramRadius}</p>
    </>
    
  )
}
