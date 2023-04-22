import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './api3Module.css'
const API3 = () => {

  const [user, setUser] = useState([])

  const getUser = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setUser(response?.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <div className="container-fluid api3container">
        <div className="row">
          {
            user.map((users, index) => {
              return (
                <>
                  <div className="col-md-4">
                    <div className="card text-dark bg-light mx-4 my-4 v">
                      <div className="card-header">User ID: {users.userId};  ID: {users.id}</div>
                      <div className="card-body">
                        <h5 className="card-title">{users.title}</h5>
                        <p className="card-text">{users.body}</p>
                      </div>
                    </div>
                  </div>

                </>
              )
            })

          }
        </div>
      </div>
    </>
  )
}

export default API3