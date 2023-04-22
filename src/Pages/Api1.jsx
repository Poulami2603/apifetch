import React, { useEffect, useState } from 'react'
import Api1main from './Api1main'
import axios from 'axios'

const Api1 = () => {

   const [detail, setDetail] = useState([])
   const getDetail = async  () =>{
     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
     setDetail(response.data)
     
  }

   useEffect (() =>{
     getDetail()
   }, [])
   console.log(detail);
    return (
    <>
    {/* <h1>I am API 1</h1> */}
     <Api1main detail={detail}/> 
    </>
  )
}

export default Api1