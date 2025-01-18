import React from 'react'

const Form = ({ text1, text2, text3 }) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">{text1}</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">{text2}</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">{text3}</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-dark btn-add">Add</button>
            </form>
        </div>
    )
}

export default Form