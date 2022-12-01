import React from 'react'
import "../styles/hero.css"

function Hero() {
  return (
    <>
    <div className='hero'>
        <h1 className='hero-text'>
            Welcome to my blog!<br />
            Enjoy lots of posts.<br />
        </h1>
        <div className="hero-author">
            <img src='' className=''/>
            <p className='hero-author-text'>
                Written by terumi.<br/>
                Front/Back Engineer.<br/>
                Like JavaScript,Nodejs,React,NextJS,Gatsby,
            </p>
        </div>
    </div>
    </>
  )
}

export default Hero