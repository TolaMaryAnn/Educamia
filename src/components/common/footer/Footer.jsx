import React from 'react'
import { blog } from '../../../dummydata'
import "./footer.css"
import teacher from "../../../images/teacher.jpg"
const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
                <div className="left row">
                    <h1>Newsletter -Stay tune and get the latest update</h1>
                    <span>Learn learn learn and be better.</span>
                </div>
                <div className="right row">
                    <input type="text" placeholder='Enter Email Address'/>
                    <i className='fa fa-paper-plane'></i>
                </div>
        </div>
      </section>

      <footer>
        <div className="container padding">
            <div className="box logo">
                <h1>EDUCAMIA</h1>
                <span>Online education & learning</span>
                <p>Keep Learning. It never ends.</p>

                <i className='fab fa-facebook-f icon'></i>
                <i className='fab fa-instagram icon'></i>
                <i className='fab fa-twitter icon'></i>
                {/* <i className='fab fa-youtube icon'></i> */}
            </div>
            <div className="box link">
                <h3>Explore</h3>
                <ul>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Blog</li>
                    <li>journal</li>
                    <li>About Us</li>
                </ul>
            </div>

            <div className="box link">
                <h3>Quick Links</h3>
                <ul>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="box">
                <h3>Recent Post</h3>
                {blog.slice(0,3).map((val) => {
                    return(
                        <div className="items flexSB">
                            <div className="img">
                                <img src={teacher} alt="" />
                            </div>
                            <div className="text">
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
                    <h4>{val.title}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="box last">
                <h3>Have any Questions?</h3>
                <ul>
                    <li>
                        <i className='fa fa-map'></i>
                        206 Tafawa balewa
                    </li>

                    <li>
                        <i className='fa fa-phone-alt'></i>
                        09076453204
                    </li>

                    <li>
                        <i className='fa fa-paper-plane'></i>
                        mtu@gmail.com
                    </li>
                </ul>
            </div>
        </div>
      </footer>
      <div className="legal">
        <p>Copyright @2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by MaryAnniee </p>
      </div>
    </>
  )
}

export default Footer
