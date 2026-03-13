import React from 'react'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import Eth_card from '../components/eth_card'
import About from '../components/about'
import Banner from '../components/banner'
import Tokenomic from '../components/tokenomic'
import Tweet_sec from '../components/Tweet_sec'
import RollingGallery from '../components/eth_slider'
import Join from '../components/join'
import SplashCursor from '../components/animations/SplashCursor'

export default function Home() {
  return (
    <>
      {/* <SplashCursor /> */ }
      <div className='md:p-[3vw] pt-5 '>
        <Hero />
        <Slider />
      </div>
      <div className='md:p-[3vw] p-5'>
        <Eth_card />
        <About />
        <Banner />
      </div>
      <div className='md:p-[3vw] p-0'>
        <Tokenomic />
        <Tweet_sec />
      </div>
      <RollingGallery />
      <div className='md:p-[3vw] p-5'>
        <Join />
      </div>
    </>
  )
}
