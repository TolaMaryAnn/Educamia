import React from 'react'
import Title from '../common/title/Title'
import PriceCard from '../pricing/PriceCard'

const Hprice = () => {
  return (
    <div>
        <section className="price padding">
            <div className="container">
                <Title subtitle="Our Pricing" title="Pricing & Pakages"/>

                <div className="price container grid">
                        <PriceCard/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hprice
