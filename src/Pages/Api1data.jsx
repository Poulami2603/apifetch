import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const Api1data = () => {

    const { id } = useParams()
    const [detail, setDetail] = useState([])
    const getDetails = async () => {
        const ApiFetch = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setDetail(ApiFetch?.data)
    }

    

    useEffect(() => {
        getDetails();
    }, [])
    console.log(detail);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto my-5">
                        <div className="card">
                            <h1>{detail.id}.  {detail.name}</h1>
                            <h6>{detail.email}</h6>
  <div class="card" style={{width: '18rem'}}>
  <div class="card-header">
    <h5>Address : </h5>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">Street : {detail?.address?.street}</li>
    <li class="list-group-item">City : {detail?.address?.city}</li>
    <li class="list-group-item">Suite : {detail?.address?.suite}</li>
    <li class="list-group-item">Zipcode : {detail?.address?.zipcode}</li>
    <li class="list-group-item">Geo : {detail?.address?.geo?.lat} {detail?.address?.geo?.lng}</li>
  </ul>
</div>
    <h5>Website: {detail.website}</h5>
    <div class="card-header">
    <h5>Company : </h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Name : {detail?.company?.name}</li>
    <li class="list-group-item">{detail?.company?.catchPhrase}</li>
    <li class="list-group-item">{detail?.company?.bs}</li>
  </ul>
  
         <Link to="/" className='btn btn-danger'>Back</Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Api1data