import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchDataAxios = () => {

    const [user, setUser] = useState([])

    const getUserdata = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUser(response?.data)
    }

    useEffect(() => {
        getUserdata()
    }, [])
    console.log(user);

    return (
        <>
        <div className="container">
            <div className="row">

            {
                user.map((use, index) => {
                    return (
                        <>
                            <div class="card mx-4 my-4" style={{width: "18rem"}}>
                                    <div class="card-body">
                                        <h5 class="card-title">{use.id}. {use.name}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">User Details</a>
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

export default FetchDataAxios