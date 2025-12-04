import React from 'react'
import RigthCardContent from './RigthCardContent'

const Imagecontainer = (props) => {
  return (
    <div className='w-63 h-full shrink-0  bg-cover bg-center relative'>
        <img  className='h-full  w-full rounded-4xl object-cover' src={props.img} alt="" />
        
        <RigthCardContent id={props.id} tag={props.tag} intro={props.intro} color={props.color}/>
      
    </div>
  )
}

export default Imagecontainer