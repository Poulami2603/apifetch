import React from 'react'
import { Link } from 'react-router-dom'


const Api1main = (props) => {

  return (
    <>
    <div className="container">
        <div className="row">
            {
            props.detail?.map((details, id) => {
                <div item key={details.id}></div>
                
    
             return(
                <>
                <div key={id} className="col-md-3 mt-4">
                    <div className="card">
                        <div className="card-body">
                    <h5 className="card-title">{details.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{details.username}</h6>
                    <p className="card-text">{details.email}</p>
                    <p className="card-text">{details.phone}</p>
                    <p className="card-text">{details.address.city}</p>
                    <Link to={`/${details.id}`}><button className='btn btn-outline-warning'>Get Detail</button></Link>
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

export default Api1main