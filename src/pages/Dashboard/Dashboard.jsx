import { Dropdown, Space } from "antd";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { DownOutlined } from '@ant-design/icons';

const Dashboard = () => {
    const items = [
        {
            label: 'Sign Out',
        }
    ];

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

            <div className="dashboard-body ">
                <div className="list my-4">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name Surname</th>
                                <th scope="col">Username</th>
                                <th scope="col">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
