import React from 'react'
import { testimonial } from '../../../dummydata'
import Title from '../../common/title/Title'
import lady from  '../../../images/lady.jpg'
import "./style.css"
const Text = () => {
  return (
    <>
        <section className="testimonial padding">
                <div className="container">
                    <Title subtitle="Testimonial" title="Our successful student"/>


                    <div className="content grid">
                        {testimonial.map((val) => (
                            <div className="items shadow">
                                <div className="box flex ">
                                    <div className="img">
                                        <img src={lady} alt="" />
                                        <i className='fa fa-quote-left icon'></i>
                                    </div>
                                    <div className="name">
                                        <h2>{val.name}</h2>
                                        <span>{val.post}</span>
                                    </div>
                                </div>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    </>
      
    
  )
}

export default Text
