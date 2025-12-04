import React from 'react'
import LeftContent from './LeftContent'
import RightCard from './RightCard'

const Page1Content = (props) => {
  return (
    <div className='flex gap-4 pb-15 pt-6 h-[90vh] px-18 '>
      <LeftContent/>
      <RightCard users ={props.users}/>
    </div>
  )
}

export default Page1Content
