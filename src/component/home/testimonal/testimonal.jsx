import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"


const Testimonal = () => {
  return (
<>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='Découvrir' title='Notre excellente CEO' />

          <div className='content text-accent'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'> <i className='fa fa-quote-left icon'></i>
                    <img src={val.cover} alt='' />
                   
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                    <p>{val.p}</p>
                  </div>
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
