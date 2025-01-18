import { Dropdown, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaRegUser } from 'react-icons/fa';
import { DownOutlined } from '@ant-design/icons';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [catData, setCatData] = useState([]);
    const items = [
        {
            label: 'Sign Out',
        }
    ];

    useEffect(() => {
        axios.get(`${environment.categoryUrl}`)
            .then(res => setCatData(res.data))
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

            <div className="categories-list my-5">
                <div className="ctg-list-title text-center">
                    <h1>Product Categories</h1>
                </div>

                <div className="ctg-list-body my-5 col-5">
                    <div className="add-btn">
                        <Link to={'/add-categories-list'} className='btn btn-outline-dark btn-shop btn-add'>Add New</Link>
                    </div>
                    <div className="list my-4">
                        <ul className="list-group">
                            {catData.map(item => (
                                <li key={item._id} className="list-group-item d-flex align-items-center justify-content-between">{item.name}
                                    <div className="list-btns">
                                        <button className='btn btn-outline-warning list-btn'>Edit</button>
                                        <button className='ms-2 btn btn-outline-danger list-btn'>Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories