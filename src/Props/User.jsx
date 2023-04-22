import React, { useEffect, useState } from 'react'
import GetUser from './GetUser'

const User = () => {
    const[user,setUser]=useState([])

    const getUserdata=async()=>{
       const response= await fetch('https://jsonplaceholder.typicode.com/users')
       setUser(await response.json())
    }

    useEffect(()=>{
        getUserdata()
    },[])

  return (
    <>
        <h1>User Page</h1>
        <GetUser users={user}/>
    </>
  )
}

export default User