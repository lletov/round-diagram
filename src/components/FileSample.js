import React from 'react'
import { useEffect, useState } from 'react';

export default function FileSample() {

  function handleClick(){
    const element = document.getElementById('file-sample-code');
    const text = element.innerText;
    navigator.clipboard.writeText(text);
    setBtnText('Copied');
    setTimeout(() => {setBtnText('Copy')}, 1000);
    console.log('file sample copied')
  }

  const [btnText, setBtnText] = useState('Copy');
  
  return (
    <div className='file-sample'>
        <div className='file-sample-header'>
            <h1>File sample</h1>
            <div className='file-panel-header'>
              <button className='btn-s' onClick={handleClick}>{btnText}</button> 
              <a href="https://lletov.github.io/round-diagram/data.csv" download>
                <button className='btn-s'>Download</button> 
              </a>
            </div>
        </div>
        <div className='file-sample-code' id='file-sample-code'>
        Title,Point,Group,Contacts<br/>
        Point 1,point1,group1,"point2"<br/>
        Point 2,point2,group2,""<br/>
        Point 3,point3,group3,""<br/>
        Point 4,point4,group3,"point3; point5"<br/>
        Point 5,point5,group4,""<br/>
        </div>
    </div>
  )
}
