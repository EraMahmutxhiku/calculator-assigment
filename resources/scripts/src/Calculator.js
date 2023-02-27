import React, { useState } from 'react'
import axios from 'axios';
import History from './History';
const Cal = () => {
    const [cal, setCal] = useState("");
    const [result, setResult] = useState("");

    const updateCal = (e) => {
        setCal(cal.concat(e.target.name));
    }

    const clear = () => {
        setCal("");
        setResult("");
    }

    const results = () => {
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNmE5MjQwY2MxMzU3NzdlMjMwNmNiMDdjYzgyNzFkYzZiNmRiMGQ3NjhhNzRjZDc2MWIxMTM3NGU5ZDcxZjI2ZmU5MTBkN2I1MWM5YWQ1NDciLCJpYXQiOjE2Nzc1MDMwMzcuMTg0NzE5LCJuYmYiOjE2Nzc1MDMwMzcuMTg0NzIsImV4cCI6MTcwOTAzOTAzNy4xNzg2ODUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.PYEQDQoem94rnCswvTpQ8_GJZ5VuvBm3ZBCbxlITAyTSfAqnXK_8BFf4zopyAKhPHZmwC_Li9B-spCbajLLJ9xac7Hfi7xl9bf1KamoWaVEap-7DvJaBuSIAoPRHuDVzoA_qM44yqNnibJeDxCDQGT5FQr8YsPBwsiX2Dlgk2tVMT7ey9MvuwY66yF_ymLMTSV0Z3nrKgRlrYqUn8NKmsxColW49sCQ3wQYOWviempE_kHXHjS5xVvhs2m1MRN7b5YkG9BA4p1Y0SAWtJxUF93mpCr8qQhGikFdKUDNRhcOwZiCdeFwOeCrC9AuSJtEHIk4zGMh0HUlQGUjPztIMpA32zpYgt7Ry43pZdqs5QKK9x_Nri14PfKQQhlP53qJ7jTWoSVqqS_zcEnHjQqwbX8gwluFbv_3dyEEu4cSiPbsv8-QhEssgkSvf91SqsuCZEhG7dMN8L7Q2adtZgShvsfRSQNZ0MtxLsp4r4VVMlU4fdkQv_8YkCB_zpA9vl6vVx8or3g1MQWtqHMZ36SDQ7LZRTOsLGcKoFgUdlIrLh1xg6-8wr6ulq3zQMfoB2L20Hob5Fm72Vn7ilj8k9sm1WHZU_vRE2UrBKWpww1zCrCNQ2jmrOF99ke5vJvWsmQrwVs_xMG0sKo9I3JtBZqUQ4KGr_uimSwLR-eosUgrwQmQ'
        
        axios.post('http://127.0.0.1:8000/api/calculator',cal, {headers: {'Authorization': 'Bearer '+token}}).then((res)=>{
            setResult(res.data);
        })
        
    }


  return (
    <div className='flex flex-row justify-center'>
         <div class=" overflow-hidden shadow-lg mb-2 bg-[#000000] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
        <div class="">
                <div class="pt-16 p-5 pb-0 text-white text-right text-3xl bg-[#000000]">{cal || 0}</div>
                    <div class="p-5 text-white text-right text-3xl bg-[#000000]"><span class="text-orange-500">{result || ''}</span></div>
      
      
            <div class="flex items-stretch bg-[#000000] h-24">
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="" >
                        
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="(" onClick={updateCal}>
                        (
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none" name=")" onClick={updateCal}>
                        )
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="/" onClick={updateCal}>
                    ÷
                    </button>
                </div>
            </div>
        
            <div class="flex items-stretch bg-[#000000] h-24">
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="7" onClick={updateCal}>
                        7
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="8" onClick={updateCal}>
                        8
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="9" onClick={updateCal}>
                        9
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="*" onClick={updateCal}>
                    ×
                    </button>
                </div>
            </div>
        
            <div class="flex items-stretch bg-[#000000] h-24">
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="4" onClick={updateCal}>
                    4
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="5" onClick={updateCal}>
                    5
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="6" onClick={updateCal}>
                    6
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="-" onClick={updateCal}>
                    -
                    </button>
                </div>
            </div>
        
            <div class="flex items-stretch bg-[#000000] h-24">
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="1" onClick={updateCal}>
                    1
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="2" onClick={updateCal}>
                    2
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="3" onClick={updateCal}>
                    3
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="+" onClick={updateCal}>
                    +
                    </button>
                </div>
            </div>
        

            <div class="flex items-stretch bg-[#000000] h-24 mb-4">
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" onClick={clear}>
                    AC
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="0" onClick={updateCal}>
                    0
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none" name="." onClick={updateCal}>
                    .
                    </button>
                </div>
            
                <div class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                    <button class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none" onClick={results}>
                    =
                    </button>
                </div>
            </div>
        </div>
    </div>
   
        <History/>
    </div>
  )
}

export default Cal;