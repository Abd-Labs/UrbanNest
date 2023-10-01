import React from 'react'
import ProgressBar from '../Graphs/ProgressBar'
const RefralSection = () => {
  return (
    <div className='xl:w-full bg-white p-4 my-5 mx-3 flex flex-col justify-between rounded-2xl'>
        <div className=' text-[26px] text-black font-normal '  style={{textShadow: '0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5)'}}>Property Referrals</div>
        <ProgressBar progress="62%" color="bg-blue-700" label="Social Media" />
        <ProgressBar progress="53%" color="bg-green-600" label="Market Places" />
        <ProgressBar progress="42%" color="bg-pink-700" label="Websites" />
        <ProgressBar progress="77%" color="bg-yellow-400" label="Digital Ads" />
        <ProgressBar progress="21%" color="bg-red-600" label="Others" />
    </div>
  )
}

export default RefralSection
