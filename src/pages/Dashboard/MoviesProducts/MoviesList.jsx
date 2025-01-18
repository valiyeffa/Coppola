import { Dropdown, Space } from 'antd'
import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { DownOutlined } from '@ant-design/icons';

const MoviesList = () => {
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

      <div className="movie-list my-4">
        <div className="movie-list-title text-center">
          <h1>Movies List</h1>
        </div>

        <div className="movie-list-body d-flex justify-content-center my-5">

        </div>
      </div>
    </div>
  )
}

export default MoviesList