import React from 'react'
import HeroContent from '../sub/HeroContent';

 const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full' id=
    "about-me">
          <video
        autoPlay
        muted
        loop
        className=" absolute  h-full w-full object-cover "
      >
        <source src="/blackhole.mp4" type="video/mp4" />
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero;