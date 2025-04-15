import React from 'react'
import useStore from './../store/Store'
import { useEffect, useRef } from 'react'
import { Canvas } from './Canvas'
import { 
  pointsByGroups, 
  getGroupsCenters, 
  getPointsCenters, 
  transformToCorrectObject,
} from './../methods/Methods'
import { About } from './About'

export const Diagram = () => {
  const diagramRef = useRef(null);

  const state = useStore((state) => state);

  const handleResize = () => {
    state.setDiagramWidth(window.innerWidth);
    state.setDiagramHeight(window.innerHeight);
    state.setCanvasCenterX((window.innerWidth - 307) / 2);
    state.setCanvasCenterY((window.innerHeight - 8) / 2)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

  }, [state.diagramWidth, diagramRef.current])

  if (state.file){
    if (state.diagramObject) {

      let pointsObjectByGroups = pointsByGroups(state.diagramObject)[0]; 
      let groups = pointsByGroups(state.diagramObject)[1]; 
      let groupsAmount = pointsByGroups(state.diagramObject)[2]; 
      let pointsObjectByGroupsWithGroupCenters = getGroupsCenters(
          pointsObjectByGroups,
          groups, 
          groupsAmount, 
          state.canvasCenterX, 
          state.canvasCenterY,  
          state.diagramRadius
      );
      let pointsObjectByGroupsWithAllCenters = getPointsCenters(
            pointsObjectByGroupsWithGroupCenters, 
            groups, 
            groupsAmount, 
            state.groupRadius
      );
      let correctObject = transformToCorrectObject(
              pointsObjectByGroupsWithAllCenters,
              groups
      );
      const pointsList = Object.keys(correctObject).map(k =>
          <div 
            key={k}
            className={'point' + ' ' + k}
            style={{
              top: correctObject[k].coords[1] + 'px', 
              left: correctObject[k].coords[0] + 'px',
              width: state.pointRadius + 'px',
              height: state.pointRadius + 'px',
            }}
            >
              {correctObject[k].title}
            </div>
        );
        return (
            <div 
              className='diagram' 
              id='diagram-area'
              ref={diagramRef}
              style={{borderColor: state.saveBtnHover ? '#8732DC' : '#fff'}}
            >
              {pointsList}
              <Canvas
                ctxWidth={diagramRef.current.offsetWidth}
                ctxHeight={diagramRef.current.offsetHeight}
                object={correctObject}
              />
              {state.saveBtnHover ? <div className='save-marker'>This area will be saved</div> : null}
            </div>
        )
      }
    return (
      <div className='diagram' ref={diagramRef}>Loading...</div>
      )
  }
  return (
    <div className='diagram' ref={diagramRef}><About/></div>
  )
}
