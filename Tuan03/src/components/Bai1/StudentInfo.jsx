import React from 'react'

function StudentInfo({name, mssv, className}) {
    
  return (
    <div>
        <h3>Hồ sơ cá nhân</h3>
        <p>Họ và tên : {name}</p>
        <p>MSSV : {mssv}</p>
        <p>Lớp : {className}</p>

    </div>
  )
}

export default StudentInfo