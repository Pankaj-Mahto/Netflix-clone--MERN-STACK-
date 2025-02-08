import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isLogin, setisLogin] = useState(false)
    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginHandler = () => {
        setisLogin(!isLogin);
    }

    const getInputData = (e) => {
        e.preventDefault();
        console.log(fullname,email,password);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='w-[100vw] h-[100vh] bg-cover' src="/public/cover.jpg" alt="banner" />
        </div>
        <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black opacity-80 rounded-md'>
            <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
            <div className='flex flex-col'>
                {
                    !isLogin && <input value={fullname} onChange={(e) => {setFullName(e.target.value)}} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                }
                <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                <button className='bg-red-800 mt-4 h-10 font-medium text-white rounded-3xl'>{isLogin ? "Login" : "Submit"}</button>
                <p className='text-white mt-2'>{isLogin ? "Already have an Account?" : "New to Netflix?"} <span onClick={loginHandler} className='ml-1 text-blue-600 font-medium'>{isLogin ? "Signup" : "Login"}</span></p>
            </div>
        </form>
    </div>
  )
}

export default Login