import React from 'react'
import Imagecontainer from './Imagecontainer'

const RightCard = (props) => {
  console.log(props.intro);
  return (
    <div id='right' className='h-full flex flex-row gap-10  overflow-x-auto p-6 w-2/3'>
       {props.users.map(function(elem, idx){
        return <Imagecontainer key={idx} id = {idx}  img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
       })}
        
    </div>
  )
}

export default RightCard