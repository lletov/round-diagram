import React from 'react'

export default function FileSample() {
  return (
    <div className='file-sample'>
        <div className='file-sample-header'>
            <h1>File sample</h1>
            <button className='btn-s'>Copy</button>
        </div>
        <div className='file-sample-code'>
        Title,Point,Group,Contacts<br/>
        Point 1,point1,group1,"point2; point4"<br/>
        Point 2,point2,group1,""<br/>
        Point 3,point3,group2,"point6"<br/>
        Point 4,point4,group2,""<br/>
        Point 5,point5,group3,""<br/>
        Point 6,point6,group3,""<br/>
        </div>
        
    </div>
  )
}
