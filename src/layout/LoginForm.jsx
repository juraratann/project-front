import axios from 'axios'
import { useState } from "react";
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'

export default function LoginForm() {
  const { setUser } = useAuth()
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const hdlChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      const rs = await axios.post('http://localhost:8000/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8000/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      })
      console.log(rs1.data)
      setUser(rs1.data)

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={hdlSubmit}>
      <div className="mb-5">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
        <input
          type="text"
          name="username"
          value={input.username}
          onChange={hdlChange}
          className="input input-bordered w-full max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={hdlChange}
          className="input input-bordered w-full max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <button type="submit" className="btn btn-outline btn-info mt-7">Log in</button>
      
        <Link className="btn btn-outline btn-info mt-7" to="/register">Sing up</Link>
    </form>
  );
}
