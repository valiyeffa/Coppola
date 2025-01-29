import { Dropdown, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { DownOutlined } from '@ant-design/icons';
import Preloader from '../../../components/Preloader';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import { useGetUsersQuery } from '../../../tools/services/categoryApi';
import { useGetMoviesQuery } from '../../../tools/services/moviesApi';

const MoviesList = () => {
  const cookies = new Cookies(null, { path: '/' });
  const navigate = useNavigate();
  const { data: moviesData, isLoading } = useGetMoviesQuery();
  const { data: userName } = useGetUsersQuery();
  const userId = cookies.get('user-id');
  const signedinAcc = userName && userName.find(p => p._id == userId);
  console.log(moviesData);

  const logout = () => {
    cookies.remove('role');
    cookies.remove('x-auth-token');
    cookies.remove('user');
    cookies.remove('user-id');

    Swal.fire({
      title: "Goodbye!",
      text: "See you later.",
      icon: "success",
      preConfirm: () => { navigate('/'); }
    })
  }

  const items = [
    {
      label: 'Sign Out',
      onClick: logout,
    }
  ];

  return (
    <div className='dashboard'>
      <div className="user-panel-dropdown">
        <Dropdown menu={{ items }}>
          <p>
            <Space>
              <FaRegUser />{signedinAcc && signedinAcc.name}{signedinAcc && signedinAcc.surname}
              <DownOutlined />
            </Space>
          </p>
        </Dropdown>
      </div>

      <div className="movie-list my-4">
        <div className="movie-list-title text-center">
          <h1>Movies List</h1>
        </div>

        <div className="movie-list-body my-5">
          <div className="add-btn ">
            <Link to={'/dashboard/movie-list/add-movie'} className='btn btn-outline-dark btn-shop btn-add'>Add New</Link>
          </div>
          {isLoading ? <Preloader /> :
            <>
              <div className="list my-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Image</th>
                      <th scope="col">Title</th>
                      <th scope="col">Category</th>
                      <th scope="col">Tag</th>
                      <th scope="col">Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Discounded Price</th>
                      <th scope="col">New</th>
                      <th scope="col">Edit / Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {moviesData.map((item, i) => (
                      <tr key={item._id}>
                        <th scope="row">{i + 1}</th>
                        <td><img height={100} src={`${environment.baseUrl}${item.image.url}`} /></td>
                        <td>{item.title}</td>
                        <td>{item.category.name}</td>
                        <td>{item.tag}</td>
                        <td>{item.price}$</td>
                        <td>{item.discount}%</td>
                        <td>{item.discountedPrice}$</td>
                        <td>{item.isProductNew == true? <p>True</p>:<p>False</p>}</td>
                        <td>
                          <Link to={`/dashboard/`} className='btn list-btn btn-outline-warning'>Edit</Link>
                          <button className='btn btn-outline-danger list-btn ms-2'>Delete</button>
                        </td>
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