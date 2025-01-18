import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { FaRegUser } from 'react-icons/fa';
import Preloader from '../../../components/Preloader';

const BlogList = () => {
  const items = [
    {
      label: 'Sign Out',
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

                <div className="blog-list-body d-flex justify-content-center my-5">
                <Preloader/>

                </div>
            </div>
    </div>
  )
}

export default BlogList