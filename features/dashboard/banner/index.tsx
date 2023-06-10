import Image from 'next/image'
import React from 'react'

import BannerImg from '../../../src/assets/images/banner-img.jpeg'
// import BannerImg from '../../../src/assets/images/ba'

const DashboardBanner = () => {
  return (
    <div className='banner-content'>
        <Image src={BannerImg} alt='banner img' className='banner-content_img' />
    </div>
  )
}

export default DashboardBanner