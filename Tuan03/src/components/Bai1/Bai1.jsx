import React from 'react'
import Header from './Header'
import StudentInfo from './StudentInfo'
import Footer from './Footer'
function Bai1() {
    const stdent = {
            name : "Nguyen Van A",
            mssv : "123456",
            lop : "DHTH19A"
        }
  return (
    <div>
        <Header />
        <StudentInfo 
            name = {stdent.name}
            mssv = {stdent.mssv}
            className = {stdent.lop}
        />
        <Footer />
    </div>
  )
}

export default Bai1