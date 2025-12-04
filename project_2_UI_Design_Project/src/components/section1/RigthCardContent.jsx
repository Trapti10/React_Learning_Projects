import React from 'react'

const RigthCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full   text-white flex flex-col justify-between p-7 '>
           <h1 className='bg-white rounded-full h-8 w-8 text-black text-center font-bold py-1'>{props.id+1}</h1>
           <div>
            <p className='mb-7 '>{props.intro}</p>
            
            <button style={{backgroundColor:props.color}} className=' p-2 rounded-full w-27'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className='rounded-full px-3 py-2 '><i class="ri-arrow-right-line"></i></button>
           </div>
        </div>
  )
}

export default RigthCardContent