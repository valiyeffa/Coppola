import { Dropdown, Space } from "antd";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { DownOutlined } from '@ant-design/icons';
import axios from "axios";
import { environment } from "../../environments/environment";
import Preloader from "../../components/Preloader";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useGetUsersQuery } from "../../tools/services/categoryApi";
import { useTranslation } from "react-i18next";

const Overview = () => {
    const cookies = new Cookies(null, { path: '/' });
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { data: userName } = useGetUsersQuery();
    const userId = cookies.get('user-id');
    const signedinAcc = userName && userName.find(p => p._id == userId);
    const { t } = useTranslation();

    const logout = () => {
        cookies.remove('role');
        cookies.remove('x-auth-token');
        cookies.remove('user');
        cookies.remove('user-id');

        Swal.fire({
            title: "Goodbye!",
            text: "See you later.",
            icon: "success",
            preConfirm: () => {
                navigate('/');
            }
        })
    }

    const items = [
        {
            label: `${t("logout")}`,
            onClick: logout,
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
                            <FaRegUser /><span>{signedinAcc && signedinAcc.name} {signedinAcc && signedinAcc.surname}</span>
                            <DownOutlined />
                        </Space>
                    </p>
                </Dropdown>
            </div>
            <div className="dashboard-head d-flex justify-content-between">
                <div className="left-side-text">
                    <h1 className="display-5 text-body-emphasis">{t("dashboard.overview.welcome")}, {signedinAcc && signedinAcc.name}!</h1>
                    <div className="col-lg-12">
                        <p>{t("dashboard.overview.welcomeTxt")}</p>
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
                                    <th scope="col">{t("dashboard.overview.tableNmTxt")}</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item, index) => (
                                    <tr key={item._id}>
                                        <th scope="row">{index + 1}</th>
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
