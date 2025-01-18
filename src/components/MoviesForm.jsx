import React from 'react'

const MoviesForm = ({ text1, text2, text3, text4, text5 }) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">{text1}</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">{text2}</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">{text3}</label>
                    <textarea name="form-control" ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">{text4}</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">{text5}</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark btn-add">Add</button>
            </form>
        </div>
    )
}

export default MoviesForm