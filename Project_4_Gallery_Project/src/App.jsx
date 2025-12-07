import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from './components/Card';
import ReactPaginate from 'react-paginate';


const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
    const totalPages = 10;    

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    setUserData(response.data);
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-400 text-xs absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>Loading...</h3>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
       <Card elem={elem}/>
      </div>
    })
  }

   const handlePageClick = (data) => {
    setIndex(data.selected + 1);
  };

  return (
    <div
      className='bg-black h-screen text-white p-4 overflow-hidden '>
      <div className='flex h-[90%] flex-wrap overflow-auto scrollbar-hide gap-3 px-2 py-3 sm:px-2'>
  {printUserData}
</div>


    <div className="flex justify-center items-center p-4 overflow-x-auto">
  <ReactPaginate
    previousLabel={"Prev"}
    nextLabel={"Next"}
    pageCount={totalPages}
    onPageChange={handlePageClick}
    containerClassName="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3 text-white"
    pageClassName="px-2 sm:px-3 py-1 bg-gray-500 rounded cursor-pointer text-sm sm:text-base"
    activeClassName="bg-cyan-400 text-black font-bold"
    previousClassName="px-2 sm:px-3 py-1 bg-gray-500 rounded cursor-pointer text-sm sm:text-base"
    nextClassName="px-2 sm:px-3 py-1 bg-gray-500 rounded cursor-pointer text-sm sm:text-base"
  />
</div>

    </div>

  )
}

export default App