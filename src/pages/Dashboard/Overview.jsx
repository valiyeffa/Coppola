import { Dropdown, Space } from "antd";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { DownOutlined } from '@ant-design/icons';
import axios from "axios";
import { environment } from "../../environments/environment";
import Preloader from "../../components/Preloader";

const Overview = () => {
    const [users, setUsers] = useState([]);

    const items = [
        {
            label: 'Sign Out',
        }
    ];

    useEffect(() => {
        axios.get(`${environment.baseUrl}/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="dashboard">
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
            <div className="dashboard-head d-flex justify-content-between">
                <div className="left-side-text">
                    <h1 className="display-5 text-body-emphasis">Welcome back, Firuza!</h1>
                    <div className="col-lg-12">
                        <p>Here's you current users overview</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-body">
                {users.length == 0 ? <Preloader /> :
                    <div className="list my-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name Surname</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item,index) => (
                                    <tr key={item._id}>
                                        <th scope="row">{index+1}</th>
                                        <td>{item.name} {item.surname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    )
}
export default Overview;
