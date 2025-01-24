import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import Preloader from '../../../components/Preloader';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useGetBlogsQuery } from '../../../tools/services/blogApi';
import Swal from 'sweetalert2';

const BlogList = () => {
  const { data: blogsData, isLoading } = useGetBlogsQuery();
  const cookies = new Cookies(null, { path: '/' });
  const navigate = useNavigate();

  const logout = () => {
    cookies.remove('role');
    cookies.remove('x-auth-token');
    cookies.remove('user');
    cookies.remove('user-id');
    Swal.fire({
      title: "Goodbye!",
      text: "See you later.",
      icon: "success",
      preConfirm: () => { window.location.reload(); navigate('/'); }
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
              <FaRegUser /> Firuza Valiyeva
              <DownOutlined />
            </Space>
          </p>
        </Dropdown>
      </div>

      <div className="blog-list my-4">
        <div className="blog-list-title text-center">
          <h1>Blog List</h1>
        </div>

        <div className="blog-list-body my-5">
          <div className="add-btn">
            <Link to={'/dashboard/blog-list/add-blogs'} className='btn btn-outline-dark btn-shop btn-add'>Add New</Link>
          </div>
          {isLoading ? <Preloader /> :
            <div className="list my-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Category</th>
                    <th scope="col">Content</th>
                    <th scope="col">Edit / Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {blogsData && blogsData.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.image}</td>
                      <td>{item.category}</td>
                      <td>{item.content}</td>
                      <td>
                        <div className="list-btns">
                          <Link to={`/dashboard/categories-list/edit-category/${item.slug}`} type='button' className='btn btn-outline-warning list-btn'>Edit</Link>
                          <button type='button' className='ms-2 btn btn-outline-danger list-btn'>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default BlogList