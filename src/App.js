import React from 'react'
import ReportCard from './Components/Report_1'
import './App.css'
const App=()=> {
  return (
    <div className="parent-container">

<div className="child-container">
      <ReportCard info={{type:"PARENT COPY" ,admno:"5862",challan_no:"00010664",std_name:"MANHAR CHAWLA",father_name:"Mr. KAPIL CHAWLA",mother_name: "Ms. SARIKA CHAWLA",amount:"4195.00",rsinwords: "Four Thousand One Hundred Ninety Five Only" }} />
    </div>
      <div className="child-container">
      <ReportCard info={{type:"BANK COPY", admno:"5862",challan_no:"00010664",std_name:"MANHAR CHAWLA",father_name:"Mr. KAPIL CHAWLA",mother_name: "Ms. SARIKA CHAWLA",amount:"4195.00",rsinwords: "Four Thousand One Hundred Ninety Five Only" }} />
    </div>
    <div className="child-container">
      <ReportCard info={{type:"SCHOOL COPY",admno:"5862",challan_no:"00010664",std_name:"MANHAR CHAWLA",father_name:"Mr. KAPIL CHAWLA",mother_name: "Ms. SARIKA CHAWLA",amount:"4195.00",rsinwords: "Four Thousand One Hundred Ninety Five Only" }} />
      </div>
    </div>
  )
}

export default App