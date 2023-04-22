import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const API2 = () => {

  const [user, setUser] = useState([])

  const getUser = async () => {
    const response = await axios.get("https://api.github.com/users")
    setUser(response?.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {
            user.map((users, index) => {
              return (
                <>
                  <div className="col-md-3 mt-4">
                    <div className="card" >
                      <div className="img-div mx-auto"><img src={users.avatar_url} className="card-img-top" alt="..." />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{users.login}</h5>
                        <p className='card-text text-muted'>Type : {users.type}</p>
                        <p className="card-text">Organization Link : <Link to={users.organizations_url} target='_blank'>{users.organizations_url}</Link></p>
                        <p className="card-text">Subscriptions Link : <Link to={users.subscriptions_url} target='_blank'>{users.subscriptions_url}</Link></p>
                        <div className="text-center py-4 px-2">
                          <button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target={`#staticBackdrop${users.id}`}>
                            Read-more...
                          </button>
                          <div className="modal fade" id={`staticBackdrop${users.id}`} data-backdrop="static" data-keyboard="false" tabindex="1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="staticBackdropLabel">{users.node_id.slice(0, -1)}</h5>
                                </div>
                                <div className="modal-body">
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item">Gravatar ID : {users.login}</li>
                                  <li className="list-group-item">Gravatar ID : {users.gravatar_id}</li>
                                  <li className="list-group-item">Url : {users.url}</li>
                                  <li className="list-group-item">Html Url : {users.html_url}</li>
                                  <li className="list-group-item">Followers Url : {users.followers_url}</li>
                                  <li className="list-group-item">Following Url : {users.following_url}</li>
                                  <li className="list-group-item">Gists Url : {users.gists_url}</li>
                                  <li className="list-group-item">Starred Url : {users.starred_url}</li>
                                  <li className="list-group-item">Repos Url : {users.repos_url}</li>
                                  <li className="list-group-item">Events Url : {users.events_url}</li>
                                  <li className="list-group-item">Received Events : {users.received_events_url}</li>
                                </ul>
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-danger" data-dismiss="modal">Back</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
export default API2