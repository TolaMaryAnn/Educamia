import React from 'react'
import read from "../../images/read.jpg"
import Title from '../common/title/Title'
import { homeAbout } from '../../dummydata'
import AWrapper from './Awrapper'
import "./about.css"
const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src={read} alt="" />
            </div>
            <div className="right row">
                <Title subtitle="LEARN ANYTHIMG" title="Benefits About online learning Expertise"/>
                <div className="items">
                    {homeAbout.map((val) => (
                        <div className="item flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>

                            <div className="text">
                                <h2>{val.title}</h2>
                                <p>{val.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
      <AWrapper/>
    </>
  )
}

export default AboutCard
