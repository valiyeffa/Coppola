import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import Preloader from '../../../components/Preloader';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useDeleteBlogMutation, useGetBlogsQuery } from '../../../tools/services/blogApi';
import Swal from 'sweetalert2';
import { useGetUsersQuery } from '../../../tools/services/categoryApi';
import { useTranslation } from 'react-i18next';

const BlogList = () => {
  const { data: blogsData, isLoading } = useGetBlogsQuery();
  const [deleteBlog] = useDeleteBlogMutation();
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

  const delBlog = async (id) => {
    try {
      await deleteBlog(id);
      Swal.fire({
        title: "Success",
        text: "Blog deleted!",
        icon: "success",
        preConfirm: () => { window.location.reload() }
      })
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Error",
        text: "Failed to delete the blog",
        icon: "error",
      })
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

      <div className="blog-list my-4">
        <div className="blog-list-title text-center">
          <h1>{t("dashboard.movies.blogTit")}</h1>
        </div>

        <div className="blog-list-body my-5">
          <div className="add-btn">
            <Link to={'/dashboard/blog-list/add-blogs'} className='btn btn-outline-dark btn-shop btn-add'>{t("dashboard.categories.addBtn")}</Link>
          </div>
          {isLoading ? <Preloader /> : <>
            <div className="list table-container my-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image</th>
                    <th scope="col">Category</th>
                    <th scope="col">Content</th>
                    <th scope="col">{t("dashboard.categories.ctgEdit")} / {t("dashboard.categories.ctgDel")}</th>
                  </tr>
                </thead>
                <tbody>
                  {blogsData && blogsData.map((blog, index) => (
                    <tr key={blog._id}>
                      <th scope="row">{index + 1}</th>
                      <td>{blog.title.slice(0, 10)}...</td>
                      <td><img width={100} src={`http://localhost:3002/api${blog.image.url}`} alt="" /></td>
                      <td>{blog.category}</td>
                      <td>{blog.content.slice(0, 5)}...</td>
                      <td>
                        <div className="list-btns">
                          <Link to={`/dashboard/blog-list/edit-blog/${blog.slug}`} type='button' className='btn btn-outline-warning list-btn'>{t("dashboard.categories.ctgEdit")}</Link>
                          <button onClick={() => delBlog(blog._id)} type='button' className='ms-2 btn btn-outline-danger list-btn'>{t("dashboard.categories.ctgDel")}</button>
                        </div>
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

export default BlogList