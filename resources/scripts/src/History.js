import React, { useEffect, useState } from 'react'
import axios from 'axios';
const History = () => {
    const [history, setHistory] = useState([]);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmE5MjQwY2MxMzU3NzdlMjMwNmNiMDdjYzgyNzFkYzZiNmRiMGQ3NjhhNzRjZDc2MWIxMTM3NGU5ZDcxZjI2ZmU5MTBkN2I1MWM5YWQ1NDciLCJpYXQiOjE2Nzc1MDMwMzcuMTg0NzE5LCJuYmYiOjE2Nzc1MDMwMzcuMTg0NzIsImV4cCI6MTcwOTAzOTAzNy4xNzg2ODUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.PYEQDQoem94rnCswvTpQ8_GJZ5VuvBm3ZBCbxlITAyTSfAqnXK_8BFf4zopyAKhPHZmwC_Li9B-spCbajLLJ9xac7Hfi7xl9bf1KamoWaVEap-7DvJaBuSIAoPRHuDVzoA_qM44yqNnibJeDxCDQGT5FQr8YsPBwsiX2Dlgk2tVMT7ey9MvuwY66yF_ymLMTSV0Z3nrKgRlrYqUn8NKmsxColW49sCQ3wQYOWviempE_kHXHjS5xVvhs2m1MRN7b5YkG9BA4p1Y0SAWtJxUF93mpCr8qQhGikFdKUDNRhcOwZiCdeFwOeCrC9AuSJtEHIk4zGMh0HUlQGUjPztIMpA32zpYgt7Ry43pZdqs5QKK9x_Nri14PfKQQhlP53qJ7jTWoSVqqS_zcEnHjQqwbX8gwluFbv_3dyEEu4cSiPbsv8-QhEssgkSvf91SqsuCZEhG7dMN8L7Q2adtZgShvsfRSQNZ0MtxLsp4r4VVMlU4fdkQv_8YkCB_zpA9vl6vVx8or3g1MQWtqHMZ36SDQ7LZRTOsLGcKoFgUdlIrLh1xg6-8wr6ulq3zQMfoB2L20Hob5Fm72Vn7ilj8k9sm1WHZU_vRE2UrBKWpww1zCrCNQ2jmrOF99ke5vJvWsmQrwVs_xMG0sKo9I3JtBZqUQ4KGr_uimSwLR-eosUgrwQmQ'

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/calculator/index', {headers: {'Authorization': 'Bearer '+token}}).then((res)=>{
            setHistory(res.data.data)
        })
    },[])

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
             <i class="fa-solid fa-trash-can text-white text-2xl text-end align-bottom hover:text-orange-500 block m-6"></i>
        </div>
    </div>

    </>
  )
}

export default History