import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log(data)
  return (
    <div className = "p-10  bg-[#1c1c1c] h-screen ">
      <h1>{data.id}</h1>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
