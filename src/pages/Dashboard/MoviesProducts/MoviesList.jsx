import { Dropdown, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { DownOutlined } from '@ant-design/icons';
import Preloader from '../../../components/Preloader';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { environment } from '../../../environments/environment';

const MoviesList = () => {
  const [data, setData] = useState([]);
  const items = [
    {
      label: 'Sign Out',
    }
  ];

  useEffect(() => {
    axios.get(`${environment.baseUrl}/products`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='dashboard'>
      <div className="user-panel-dropdown">
        <Dropdown menu={{ items }}>
          <p>
            <Space>
              <FaRegUser /> Firuza Valiyeva
              <DownOutlined />
            </Space>
          </p>
        </Dropdown>
      </div>

      <div className="movie-list my-4">
        <div className="movie-list-title text-center">
          <h1>Movies List</h1>
        </div>

        <div className="movie-list-body d-flex align-items-center flex-column my-5">
          {data.length == 0 ? <Preloader /> :
            <>
              <div className="add-btn ">
                <Link to={'/dashboard/movie-list/add-movie'} className='btn btn-outline-dark btn-shop btn-add'>Add New</Link>
              </div>
              <div className="list my-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Category</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i) => (
                      <tr key={item._id}>
                        <th scope="row">{i + 1}</th>
                        <td><img height={100} src={item.image} /></td>
                        <td>{item.title}</td>
                        <td>{item.category.name}</td>
                        <td><Link to={`/dashboard/`} className='btn list-btn btn-outline-warning'>Edit</Link></td>
                        <td><button className='btn btn-outline-danger list-btn'>Delete</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default MoviesList