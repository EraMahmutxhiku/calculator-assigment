import React, { useEffect, useState } from 'react'
import axios from 'axios';
const History = ({history,deleteAll}) => {


  return (
    <>
    <div className='shadow-lg mb-2 bg-[#000000] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6 flex flex-col'>
        <div style={{maxHeight:'600px'}} className='overflow-y-scroll scrollbar-hide'>
        <div class="p-5 text-white text-center text-3xl bg-[#04387A]-900">History</div>

    {Object.keys(history).map((his)=>(
        <>
            <div class="pt-5 p-2 px-5 pb-0 text-white text-right text-2xl bg-[#000000]">{history[his].operation}</div>
            <div class="p-2 px-5 text-white text-right text-3xl bg-[#000000]"><span class="text-orange-500">{history[his].result}</span></div>
        </>
    ))}</div>

        <div class='mt-auto'>
             <i onClick={() => deleteAll()} class="fa-solid fa-trash-can text-white text-2xl text-end align-bottom hover:text-orange-500 block m-6">
             </i>
        </div>
    </div>

    </>
  )
}

export default History
