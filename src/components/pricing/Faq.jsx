import React, { useState } from 'react'
import { faq } from '../../dummydata'
import Title from '../common/title/Title'
import "./price.css"
const Faq = () => {
    const  [click,setClick] = useState(false)

    const toggle = (index) => {
        if(click === index) {
            return setClick(null)
        }
        setClick(index)
    }
  return (
    <>
      <Title subtitle="FAQs" title="Frequently Asked Questions" />
      <section className="faq">
        <div className="container">
            {faq.map((val,index) => (
                <div className="box">
                    <button className='accordion' onClick={() => toggle(index)} key={index}>
                        <span>{click === index? <i className='fa fa-chevron-down'></i> : <i className='fa fa-chevron-right'></i>}</span>
                        <h2>{val.title}</h2>
                    </button>
                    {click === index ? (
                          <div className="text">
                          <p>{val.desc}</p>
                      </div>

                    ) : null}
                </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Faq
