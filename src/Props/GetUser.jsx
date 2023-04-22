import React from 'react'

const GetUser = ({users}) => {
    console.log(users);
  return (
    <div>
        {
            users.map((d)=>{
                return(
                    <>
                    <h1>{d.name}</h1>
                    </>
                )
            })
        }
    </div>
  )
}

export default GetUser