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
      <svg width="300" height="300" viewBox="0 0 389 300" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_79_109)">
<path d="M235.373 141.632C235.373 164.821 216.645 183.62 193.542 183.62C170.44 183.62 151.712 164.821 151.712 141.632C151.712 118.442 170.44 99.6434 193.542 99.6434C216.645 99.6434 235.373 118.442 235.373 141.632ZM155.679 141.632C155.679 162.622 172.631 179.638 193.542 179.638C214.454 179.638 231.406 162.622 231.406 141.632C231.406 120.642 214.454 103.626 193.542 103.626C172.631 103.626 155.679 120.642 155.679 141.632Z" fill="#5EC2FC"/>
<path d="M215.973 146.5C215.973 189.854 206.202 225 194.149 225C182.095 225 172.324 189.854 172.324 146.5C172.324 103.146 182.095 68 194.149 68C206.202 68 215.973 103.146 215.973 146.5ZM174.394 146.5C174.394 185.742 183.238 217.555 194.149 217.555C205.059 217.555 213.903 185.742 213.903 146.5C213.903 107.258 205.059 75.4452 194.149 75.4452C183.238 75.4452 174.394 107.258 174.394 146.5Z" fill="#5EC2FC"/>
<path d="M204.971 115.935C247.173 140.393 275.44 170.555 268.106 183.306C260.772 196.056 220.616 186.565 178.414 162.108C136.212 137.651 107.945 107.488 115.279 94.7379C122.613 81.9876 162.769 91.478 204.971 115.935ZM179.673 159.919C217.873 182.056 254.221 190.647 260.859 179.106C267.497 167.565 241.912 140.263 203.712 118.125C165.512 95.9872 129.164 87.3969 122.526 98.9379C115.888 110.479 141.474 137.781 179.673 159.919Z" fill="#5EC2FC"/>
<path d="M205.32 158.189C162.97 182.388 122.757 191.634 115.501 178.839C108.244 166.044 136.693 136.054 179.042 111.855C221.391 87.6555 261.605 78.4103 268.861 91.205C276.118 104 247.669 133.99 205.32 158.189ZM180.288 114.052C141.955 135.956 116.205 163.102 122.773 174.683C129.341 186.264 165.741 177.896 204.074 155.992C242.406 134.087 268.157 106.942 261.589 95.3608C255.02 83.7795 218.621 92.1479 180.288 114.052Z" fill="#5EC2FC"/></g>
</svg> 
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
      <div className="mt-7 flex justify-between">
  <button type="submit" className="btn btn-outline btn-info">Log in</button>
  <Link className="btn btn-outline btn-info mr-10" to="/register">Sign up</Link>
</div>



    </form>
  );
}
