import React, { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {


  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title,details})

    setTask(copyTask);
    console.log(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
      const copyTask = [...task]
      copyTask.splice(idx, 1);
      setTask(copyTask);
  }

  return (
    <div className='h-screen bg-black text-white p-10 lg:flex gap-10'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex items-start justify-around  lg:w-1/2 flex-col  gap-4'>

        <h1 className='font-bold text-3xl'>Add Notes</h1>

        <input 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value); 
        }}
          type="text"
          className='px-5 py-2 border-2 rounded w-full'
          placeholder='Enter Notes Heading'
        />
        <textarea
          type="text"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value);
          }}
          className='px-5 py-2 h-40 border-2 rounded w-full outline-none font-medium'
          placeholder='Enter Details'
        />
        <button
          className='bg-white active:bg-gray-400 text-black px-5 py-2 rounded w-full outline-none font-medium'>
          Add Notes</button>

      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2 ' >
        <h1 className='text-3xl font-bold'>Your Notes</h1>
        <div className='flex  flex-wrap gap-5 mt-5 h-[90%] overflow-y-scroll hide-scrollbar'>
          {task.map(function(elem, idx){
            return <div key = {idx} className="relative h-52 w-42 bg-cover bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s')] rounded-2xl text-black px-2 py-4">
              <h2 onClick={()=>{
                deleteNote(idx)
              }} className=' absolute top-5 right-1 bg-red-400 rounded text-white active:scale-95  cursor-pointer'><X /></h2>
              <h1 className='font-bold text-xl font-medium leading-tight mx-1'>{elem.title}</h1>
              <p className="mt-2 leading-tight font-normal  text-gray-400">{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
