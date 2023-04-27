import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6  hover:bg-primary-light cursor-pointer rounded-full py-4 px-4'>
       <img src='https://pbs.twimg.com/profile_images/1383339754620477440/84ZE_ANk_400x400.jpg' alt='Profile' className='n-8 h-8 rounded-full'/>
      
       <div className=' flex flex-col'>
        <span className='font-bold text-md text-black '>Simay Yılmaz</span>
        <span className='text-sm text-gray-dark'>simayyilmaz</span>

        <div className='flex space-x-1'>

            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>

        </div>


       </div>
    </div>
  )
}

export default UserBox
