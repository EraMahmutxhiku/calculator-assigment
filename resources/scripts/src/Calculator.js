import React, {useEffect, useState} from 'react'
import axios from 'axios';
import History from './History';
import {useNavigate} from "react-router-dom";

const Calculator = () => {
    const [cal, setCal] = useState("");
    const [result, setResult] = useState("");
    const [history, setHistory] = useState([])
    // const regex = /^([A-z]+)(?: *= *)(\d+|[A-z]+)$/gm
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])

    const updateCal = (e) => {
        // if (e.target.name.match(regex)) {
            setCal(cal.concat(e.target.name));
        // }
    }

    const clear = () => {
        setCal("");
        setResult("");
    }

    const results = () => {
        axios.post('http://127.0.0.1:8000/api/calculator', {'calculation': cal}, {headers: {'Authorization': 'Bearer ' + token}}).then((res) => {
            setResult(res.data);

        })
        axios.get('http://127.0.0.1:8000/api/calculator/index', {headers: {'Authorization': 'Bearer ' + token}}).then((res) => {
            setHistory(res.data.data)
        })
    }
    const deleteAll = () => {
        axios.delete('http://127.0.0.1:8000/api/calculator/destroyAll', {headers: {'Authorization': 'Bearer ' + token}}).then(() => {
            setHistory([])
        })
    }


    return (
        <div className='flex flex-row justify-center'>
            <div
                class=" overflow-hidden shadow-lg mb-2 bg-[#000000] shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
                <div class="">
                    <div class="pt-16 p-5 pb-0 text-white text-right text-3xl bg-[#000000]">{cal || 0}</div>
                    <div class="p-5 text-white text-right text-3xl bg-[#000000]"><span
                        class="text-orange-500">{result || ''}</span></div>


                    <div class="flex items-stretch bg-[#000000] h-24">
                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="">

                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="(" onClick={updateCal}>
                                (
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-[#505050] justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name=")" onClick={updateCal}>
                                )
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="/" onClick={updateCal}>
                                ÷
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch bg-[#000000] h-24">
                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="7" onClick={updateCal}>
                                7
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="8" onClick={updateCal}>
                                8
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="9" onClick={updateCal}>
                                9
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="*" onClick={updateCal}>
                                ×
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch bg-[#000000] h-24">
                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="4" onClick={updateCal}>
                                4
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="5" onClick={updateCal}>
                                5
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="6" onClick={updateCal}>
                                6
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="-" onClick={updateCal}>
                                -
                            </button>
                        </div>
                    </div>

                    <div class="flex items-stretch bg-[#000000] h-24">
                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="1" onClick={updateCal}>
                                1
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="2" onClick={updateCal}>
                                2
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="3" onClick={updateCal}>
                                3
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="+" onClick={updateCal}>
                                +
                            </button>
                        </div>
                    </div>


                    <div class="flex items-stretch bg-[#000000] h-24 mb-4">
                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                onClick={clear}>
                                AC
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="0" onClick={updateCal}>
                                0
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-gray-800 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                name="." onClick={updateCal}>
                                .
                            </button>
                        </div>

                        <div
                            class="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
                            <button
                                class="rounded-full h-20 w-20 flex items-center bg-orange-500 justify-center shadow-lg hover:border-gray-500 focus:outline-none"
                                onClick={results}>
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <History history={history} deleteAll={deleteAll}/>
        </div>
    )
}

export default Calculator;
