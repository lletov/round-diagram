import React, { useEffect } from 'react'
import { useRef } from 'react'
import { drawLines } from './../methods/Methods'

export const Canvas = ({ctxWidth, ctxHeight, object}) => {
    const ref = useRef();
    function draw(ctx){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = 'grey'
        ctx.fillRect(0,0,100,100)
    }
    
    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext("2d");
        drawLines(object, ctx)
    })
    
  return (
    <canvas id='canvas' ref={ref} width={ctxWidth} height={ctxHeight}></canvas>
  )
}
