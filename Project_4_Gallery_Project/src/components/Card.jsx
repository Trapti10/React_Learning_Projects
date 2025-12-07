import React from 'react'

const Card = (props) => {
  return (
    <div>
       <a href={props.elem.url} target='_blank'> {/* target = 'blank' se img dusre tab m open hoti h  */}
          <div className='h-50 w-50 '>
            <img className='h-full w-full  rounded-xl overflow-hidden object-cover' src={props.elem.download_url} alt="" srcset="" />
          </div>
          <h1 className='text-lg font-bold'>{props.elem.author}</h1>
        </a>
    </div>
  )
}

export default Card
