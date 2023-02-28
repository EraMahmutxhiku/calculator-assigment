import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
       if(!localStorage.getItem('token')){
           navigate('/')
       }
    },[])
    const login = (e) => {
        e.preventDefault();
        const loginData = {
            "email":email,
            "password":password
        }
      axios.post('http://127.0.0.1:8000/api/login',loginData,{
          headers: {
              'Content-Type': 'application/json'
          }
      }).then((res) => {
          localStorage.setItem('token', res.data.token)
          navigate('/calculator')
      })
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden p-3">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-orange-500 ">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800">
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={(e) => login(e)}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}
