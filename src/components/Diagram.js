import React from 'react'
import useStore from './../store/Store'
import { Point } from './Point'
import { testCreateObjectFromFile, uploadFile } from './../methods/Methods'

export const Diagram = () => {

  const state = useStore((state) => state);

  if (state.file){
    if (state.diagramObject) {
        const pointsList = Object.keys(state.diagramObject).map(k =>
          <div 
            key={k}
            className={'point' + ' ' + k}
            style={{
              top: state.diagramObject[k].coords[1] + 'px', 
              left: state.diagramObject[k].coords[0] + 'px'
            }}
            >
              {state.diagramObject[k].title}
            </div>
        );
        return <div className='diagram'>{pointsList}</div>
      }
    return (
        <p>Loading...</p>
      )
  }
  return (
    <>
    <div className='diagram'>Diagram</div>
    </>
  )
}
