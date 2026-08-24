import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('.,,')
        setEmail('')
        setPassword('')
    }

  return (
    <div className= 'bg-black flex h-screen justify-center items-center w-screen'>
        <div className= 'border-2 rounded-2xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e) => 
                handleSubmit(e)}
            className= 'flex flex-col gap-4 p-4 items-center justify-center'>
                <input 
                    required 
                    className='  outline-none bg-transparent text-white placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 rounded-full' 
                    type="email" 
                    placeholder='Enter your email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    required 
                    className=' bg-transparent outline-none text-white  placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 rounded-full'  
                    type="password" 
                    placeholder='Enter your password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-emerald-600 text-white py-3 px-5 rounded-full hover:bg-emerald-700'  type='submit'>Login</button>
            </form>

        </div>

    </div>
  )
}

export default Login

