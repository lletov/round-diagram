import React from 'react'
import useStore from './../store/Store'
import { testCreateObjectFromFile, uploadFile } from './../methods/Methods'

export const Diagram = () => {

  const state = useStore((state) => state);

  if (state.file){

    uploadFile(state.file)
    
    return(
      <>
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
