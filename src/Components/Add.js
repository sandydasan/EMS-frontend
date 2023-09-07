import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link ,useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios'



function Add() {

  const location = useNavigate()
  const [id,setId]=useState('')
  const[empname,setName]=useState('')
  const[age,setAge]=useState('')
  const[designation,setDesignation]=useState('')
  const[salary,setSalary]=useState('0')
  
  const AddEmployee= async(e)=>{

    
    
    console.log(empname);
    console.log(age);
    console.log(designation);
    console.log(salary);
    console.log(id);

   const body ={id,empname,age,designation,salary}
   console.log(body);
    //api call
    const result = await axios.post('http://localhost:7000/addEmployee',body)
    console.log(result);
    alert(result.data.message);
    location('/')
  
  }

  return (
    <>
       <div className='container mt-5'>
        <h1 className='text-center' style={{textDecoration:'underline',fontWeight:'lighter'}}>Add   Employee </h1>
        <p style={{textAlign:'justify'}}>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.
        Employee management that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations.</p>

     </div>
     <div className='container'>
     <FloatingLabel  label="id" className="mb-3">
        <Form.Control onChange={(e)=>setId(e.target.value)} type="text" placeholder="Id" />
      </FloatingLabel>

     <FloatingLabel
       
        label="Name"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel  label="Age" className="mb-3">
        <Form.Control onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Age" />
      </FloatingLabel>

      <FloatingLabel
       
        label="Designation"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>setDesignation(e.target.value)} type="text" placeholder="Designation" />
      </FloatingLabel>
      <FloatingLabel  label="Salary">
        <Form.Control onChange={(e)=>setSalary(e.target.value)} type="text" placeholder="Salary" />
      </FloatingLabel>

      <button onClick={(e)=>AddEmployee(e)} className='btn btn-success m-3'>Add</button>
      <Link to={'/'}>
      <button  className='btn btn-primary m-3'>Home</button>
      </Link>
     
     </div>
    </>
  )
}

export default Add
