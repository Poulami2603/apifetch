import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API4 = () => {

  const [album, setAlbum] = useState([])

  const getAlbum = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
    setAlbum(response?.data)
  }

  useEffect(() => {
    getAlbum()
  }, [])
console.log(album);
  return (
    <>
      <div className="container">
        <div className="row">

          {
            album.map((album, index) => {
              return (
                <>
                  <div className="card mx-4 my-4 mb-3" style={{ width: '300px' }}>
                    <div className="row no-gutters">
                      <div className="img-div my-2 mx-auto">
                        <img src={album.thumbnailUrl} alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">Album ID:{album.albumId}; ID:{album.id}</h5>
                          <p className="card-text">{album.title}</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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

export default API4