import React, { useEffect, useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link ,useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Edit() {

  const location=useNavigate()
 
  const [id,setId]=useState('')
  const[empname,setName]=useState('')
  const[age,setAge]=useState('')
  const[designation,setDesignation]=useState('')
  const[salary,setSalary]=useState('0')

 const pathParams= useParams()
//  console.log(pathParams);
//  console.log(pathParams.id)

 //api call to fetch particular employee details
 const fetchData=async()=>{
  const result= await axios.get('http://localhost:7000/getEmployee/'+pathParams.id)
  console.log(result.data.employee);
  setId(result.data.employee.id)
  setName(result.data.employee.empname)
  setAge(result.data.employee.age)
  setDesignation(result.data.employee.designation)
  setSalary(result.data.employee.salary)
 }
 console.log(id);
 console.log(empname);
 console.log(age);
 console.log(designation);
 console.log(salary);


const UpdateEmployee= async(e)=>{
  const body ={id,empname,age,designation,salary}
  const result = await axios.post('http://localhost:7000/updateEmployee',body)
  console.log(result.data.message);
  location('/')
}


 useEffect(()=>{
  fetchData()
 },[])

  return (
    <>
      <>
       <div className='container mt-5'>
        <h1 className='text-center' style={{textDecoration:'underline',fontWeight:'lighter'}}>Update   Employee </h1>
        <p style={{textAlign:'justify'}}>An employee management system is technology designed to streamline core HR services and improve workforce productivity. It accomplishes these goals largely by automating labor-intensive, administrative tasks and using analytics to drive business decisions.
        Employee management that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations.</p>

     </div>
     <div className='container'>
     <FloatingLabel  label="id" className="mb-3">
        <Form.Control  value={id} onChange={(e)=>setId(e.target.value)} type="text" placeholder="Id" />
      </FloatingLabel>

     <FloatingLabel
       
        label="Name"
        className="mb-3"
      >
        <Form.Control  value={empname} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel  label="Age" className="mb-3">
        <Form.Control  value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Age" />
      </FloatingLabel>

      <FloatingLabel
       
        label="Designation"
        className="mb-3"
      >
        <Form.Control value={designation} onChange={(e)=>setDesignation(e.target.value)} type="text" placeholder="Designation" />
      </FloatingLabel>
      <FloatingLabel  label="Salary">
        <Form.Control  value={salary} onChange={(e)=>setSalary(e.target.value)} type="text" placeholder="Salary" />
      </FloatingLabel>

      <button onClick={(e)=>UpdateEmployee(e)} className='btn btn-success m-3'>Update</button>
      <Link to={'/'}>
      <button  className='btn btn-primary m-3'>Home</button>
      </Link>
     
     </div>
    </>  
      
    </>
  )
}

export default Edit
