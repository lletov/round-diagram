import React from 'react'
import { useEffect, useState } from 'react';

export default function FileSample() {
  function handleClick(){
    const element = document.getElementById('file-sample-code');
    const text = element.innerText;
    navigator.clipboard.writeText(text);
    setBtnText('Copied');
    setTimeout(() => {setBtnText('Copy')}, 2000);
    console.log('file sample copied')
  }

  const [btnText, setBtnText] = useState('Copy');

  useEffect(() => {
    
  }, [btnText]);
  return (
    <div className='file-sample'>
        <div className='file-sample-header'>
            <h1>File sample</h1>
            <button className='btn-s' onClick={handleClick}>{btnText}</button>
        </div>
        <div className='file-sample-code' id='file-sample-code'>
        Title,Point,Group,Contacts<br/>
        'Point 1',point1,group1,"point2; point4"<br/>
        'Point 2',point2,group1,""<br/>
        'Point 3',point3,group2,"point6"<br/>
        'Point 4',point4,group2,""<br/>
        'Point 5',point5,group3,""<br/>
        'Point 6',point6,group3,""<br/>
        </div>
    </div>
  )
}
