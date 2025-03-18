import React from 'react'

import HeroSlider from '../Component/Hero/HeroSlider'
import ResturantList from '../Component/ResturantList/ResturantList'
import Recently_ordered from '../Component/Recently_ordered/Recently_ordered'
import Local_store from '../Component/Local_store/Local_store'
import E_store from '../Component/E_store/E_store'
import New_offer from '../Component/New_offer/New_offer'
import FlashSaleBanner from '../Component/FlashSaleBanner/FlashSaleBanner'


function Home() {
  return (
    <div >
      <HeroSlider/>
      <ResturantList/>
      <Recently_ordered/>
      <Local_store/>
      <E_store/>
      <FlashSaleBanner/>
      <New_offer/>
    
  
    </div>
  )
}

export default Home