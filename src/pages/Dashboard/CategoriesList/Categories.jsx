import React from 'react'
import { Dropdown, Space } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import { DownOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import Preloader from '../../../components/Preloader';
import { useDeleteCategoryMutation, useGetCategoriesQuery, useGetUsersQuery } from '../../../tools/services/categoryApi';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';
import { useTranslation } from 'react-i18next';

const Categories = () => {
    const { data: ctgData, isLoading } = useGetCategoriesQuery();
    const [delCategory] = useDeleteCategoryMutation();
    const cookies = new Cookies(null, { path: '/' });
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
            preConfirm: () => { navigate('/'); }
        })
    }

    const items = [
        {
            label: `${t("logout")}`,
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
                            <FaRegUser /><span>{signedinAcc && signedinAcc.name} {signedinAcc && signedinAcc.surname}</span>
                            <DownOutlined />
                        </Space>
                    </p>
                </Dropdown>
            </div>

            <div className="categories-list my-5">
                <div className="ctg-list-title text-center">
                    <h1>{t("dashboard.categories.ctgTit")}</h1>
                </div>

                <div className="ctg-list-body my-5 col-5">
                    <div className="add-btn">
                        <Link to={'/dashboard/categories-list/add-category'} className='btn btn-outline-dark btn-shop btn-add'>{t("dashboard.categories.addBtn")}</Link>
                    </div>
                    {isLoading ? <Preloader /> : <>
                        <div className="list table-container my-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">{t("dashboard.categories.ctgNm")}</th>
                                        <th scope="col">Slug</th>
                                        <th scope="col">{t("dashboard.categories.ctgEdit")} / {t("dashboard.categories.ctgDel")}</th>
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
                                                    <Link to={`/dashboard/categories-list/edit-category/${item.slug}`} type='button' className='btn btn-outline-warning list-btn'>{t("dashboard.categories.ctgEdit")}</Link>
                                                    <button onClick={() => { deleteCtg(item._id) }} type='button' className='ms-2 btn btn-outline-danger list-btn'>{t("dashboard.categories.ctgDel")}</button>
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