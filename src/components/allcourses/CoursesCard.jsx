import React from 'react'
import { coursescard } from '../../dummydata'
// import software from "../../images/software.png"
import photoshop from "../../images/photoshop.png"
// import mathematics from "../../images/mathematics.png"
// import Science from "../../images/Science.png"
// import data from "../../images/data.png"
import teacher from "../../images/teacher.jpg"
import "./courses.css"
const CoursesCard = () => {
  return (
    <>
      <section className="courseCard" >
        <div className="container grid2">
            {coursescard.map((val) => {
                return (
                    <div className="items">
                        <div className="content flex">
                             <div className="left">
                                <div className="img">
                                    <img src={photoshop} alt="" />
                                    
                                </div>
                            </div> 

                            <div className="text">
                                <h1>{val.coursesName}</h1>
                                <div className="rate">
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <label htmlFor="">(5.0)</label>
                                </div>
                                <div className="details">
                                    {val.courseTeacher.map((details) => (
                                        <>
                                            <div className="box">
                                            <div className="dimg">
                                                <img src={teacher} alt="" />
                                            </div>
                                            <div className="para">
                                                <h4>{details.name}</h4>
                                            </div>
                                            </div>
                                            <span>{details.totalTime}</span>
                                        </>
                                        
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="price">
                            <h3>{val.priceAll} / {val.pricePer}</h3>
                        </div>
                        <button className='outline-btn'>ENROLL NOW !</button>
                    </div>
                )
            })}
           

               
        </div>
      </section>

      
    </>
  )
}

export default CoursesCard
