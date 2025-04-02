import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'


function UpdateUSer() {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const {id} = useParams()
    const navigate= useNavigate()
    
    useEffect(()=>{
      axios.get(`https://crud-eyjq.onrender.com/getUser/${id}`)
            .then((response)=>{
              console.log(response)
              setName(response.data.name)
              setEmail(response.data.email)
              setAge(response.data.age)
              
              })
              .catch((error)=>{
                console.log(error)
                
                })
     },[])

    const update=(e)=>{
      e.preventDefault()
      axios.put(`https://crud-eyjq.onrender.com/updateUser/${id}`,{name,email,age})
      .then((response)=>{
        console.log(response)
        navigate('/')
        })
        .catch((error)=>{
          console.log(error)
          
          })
        }



  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className="w-50 bg-white rounder p-3">
      <form onSubmit={update}>
          <h2>Update User</h2>
          <div className="mb-2">
              <label htmlFor="">Name</label>
              <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className='form-control' />
          </div>
          <div className="mb-2">
              <label htmlFor="">Email</label>
              <input type="email" value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} className='form-control' />
          </div>
          <div className="mb-2">
              <label htmlFor="">Age</label>
              <input type="number" value={age} placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} className='form-control' />
          </div>
          <button className='btn btn-success' >Update</button>
      </form>
    </div>
  </div>
  )

}

export default UpdateUSer
