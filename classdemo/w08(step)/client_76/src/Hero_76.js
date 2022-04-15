import React from 'react'
import { useGlobalContext } from './context';
import phoneImg from './images/phone.svg'


const Hero_76 = () => {
  const {closeSubmenu} = useGlobalContext(); //移開即可關閉
  return (
    <section className='hero' onMouseOver={closeSubmenu}>

      <div className='hero-center'>

        <article className='hero-info'>

          <h1>

            Payments infrastructure <br />

            for the internet

          </h1>

          <p>

            Millions of companies of all sizes—from startups to Fortune 500s—use

            Stripe’s software and APIs to accept payments, send payouts, and

            manage their businesses online.

          </p>

          <button className='btn'>Start now</button>

        </article>

        <article className='hero-images'>

          <img src={phoneImg} className='phone-img' alt='phone' />

        </article>

      </div>

    </section>
  )
}

export default Hero_76
