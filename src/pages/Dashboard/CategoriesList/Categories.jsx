import React from 'react'
import { Dropdown, Space } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import { DownOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Preloader from '../../../components/Preloader';
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../../tools/services/categoryApi';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

const Categories = () => {
    const { data: ctgData, isLoading } = useGetCategoriesQuery();
    const [delCategory] = useDeleteCategoryMutation();
    const cookies = new Cookies(null, { path: '/' });
    const navigate = useNavigate();

    const logout = () => {
        cookies.remove('role');
        cookies.remove('x-auth-token');
        navigate('/');
    }

    const items = [
        {
            label: 'Sign Out',
            onClick: logout,
        }
    ];

    const deleteCtg = async (id) => {
        try {
            await delCategory(id);
            Swal.fire({
                title: "Success",
                text: "Category deleted!",
                icon: "success",
                preConfirm: () => { window.location.reload() }
            })
        } catch (err) {
            console.log('Failed to delete the category', err);
        }
    }

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

            <div className="categories-list my-5">
                <div className="ctg-list-title text-center">
                    <h1>Movie Categories</h1>
                </div>

                <div className="ctg-list-body my-5 col-5">
                    <div className="add-btn">
                        <Link to={'/dashboard/categories-list/add-category'} className='btn btn-outline-dark btn-shop btn-add'>Add New</Link>
                    </div>
                    {isLoading ? <Preloader /> : <>
                        <div className="list my-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Slug</th>
                                        <th scope="col">Edit / Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ctgData && ctgData.map((item) => (
                                        <tr key={item._id}>
                                            <th scope="row">{item.order}</th>
                                            <td>{item.name}</td>
                                            <td>{item.slug}</td>
                                            <td>
                                                <div className="list-btns">
                                                    <Link to={`/dashboard/categories-list/edit-category/${item.slug}`} type='button' className='btn btn-outline-warning list-btn'>Edit</Link>
                                                    <button onClick={() => { deleteCtg(item._id) }} type='button' className='ms-2 btn btn-outline-danger list-btn'>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories