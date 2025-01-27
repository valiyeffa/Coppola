import { ConfigProvider, Select } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../../tools/services/categoryApi';

const AddMovies = () => {
  const { data: ctg } = useGetCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState();

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className='dashboard'>
      <div className="movies-list-add my-4">
        <div className="movie-list-title text-center">
          <h1>Add Movies</h1>
        </div>

        <div className="movie-add-body my-5 ">
          <form className='col-5'>
            <div className="mb-3">
              <label className="form-label">Movie Title</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea name="form-control" ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input type="number" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      activeBorderColor: 'black',
                      activeOutlineColor: 'none',
                      hoverBorderColor: 'black',
                    },
                  },
                  token: {
                    borderRadius: 0,
                    colorBorder: 'black',
                    colorPrimary: '#BFBFBF',
                  },
                }}
              >
                <Select
                  defaultValue="Choose Category"
                  style={{
                    width: '100%',
                  }}
                  options={
                    ctg && ctg.map((c) => {
                      return {
                        label: c.name,
                        value: c.name,
                      };
                    })

                  }
                  onChange={handleCategoryChange}
                />
              </ConfigProvider>
            </div>
            <Link to={'/dashboard/movie-list'} className='btn btn-outline-dark btn-shop py-1'>Back To Page</Link>
            <button type="submit" className="btn btn-dark ms-3 btn-add py-1">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddMovies