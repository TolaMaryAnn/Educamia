import React from 'react'
import { blog } from '../../dummydata'
import teacher from "../../images/teacher.jpg"
import "./blog.css"
const BlogCard = () => {
  return (
    <>
        {blog.map((val) => {
          return(
            <div className="items shadow">
            <div className="img">
                <img src={teacher} alt="" />
            </div>
            <div className="text">
                <div className="admin flexSB">
                    <span>
                        <i className='fa fa-user'></i>
                        <label htmlFor="">{val.type}</label>
                    </span>

                    <span>
                        <i className='fa fa-calendar-alt'></i>
                        <label htmlFor="">{val.date}</label>
                    </span>

                    <span>
                        <i className='fa fa-comments'></i>
                        <label htmlFor="">{val.comment}</label>
                    </span>
                </div>
                <h1>{val.title}</h1>
                <p>{val.desc}</p>
            </div>
            </div>
          )
        })}
    </>
  )
}

export default BlogCard