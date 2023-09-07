import React, { useEffect, useState } from 'react';
import './admin.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import { Link } from 'react-router-dom';

function Admin() {
 const [allEmployees,setAllEmployees]=useState([])
  const fetchData= async()=>{
    const result = await axios.get('http://localhost:7000/allEmployees')
    console.log(result.data.employee);
    setAllEmployees(result.data.employee)

  }

  useEffect(()=>{
    fetchData()//function call

  },[])

  const deleteEmployee = async(id)=>{
    const result = await axios.delete('http://localhost:7000/deleteEmployee/'+id)
    console.log(result);
    alert(result.data.message)
    fetchData()
  }
  return (
    <>
     <div className='container mt-5'>
        <h1 className='text-center' style={{textDecoration:'underline',fontWeight:'lighter'}}>Employee Management System</h1>
        <p style={{textAlign:'justify'}}>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.
        Employee management that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations.</p>
    <Link to={'/add'}>
    <a className='btn btn-success my-3'>Add <i className='fa-solid fa-user-plus'></i></a>
    </Link>
    
     </div>

<div className='container'>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          allEmployees.map((item)=>(
          <tr>
          <td>{item.id}</td>
          <td>{item.empname}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          
          <td><Link to ={'edit/'+item.id}>
            <button className='btn btn-primary me-2'><i className='fa-solid fa-pen'></i></button>
            </Link>
         
          <button onClick={()=>deleteEmployee(item.id)}  className='btn btn-danger'><i className='fa-solid fa-trash'></i></button></td>
        </tr>
        ))}
       
       
      </tbody>
    </Table>
</div>

    </>
  )
}

export default Admin
