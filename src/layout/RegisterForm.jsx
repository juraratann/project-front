import axios from 'axios'
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function RegisterForm() {
  const [input, setInput] = useState({
    name: '',
    lname: '',
    address: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const hdlChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm password')
      }
      const rs = await axios.post('http://localhost:8000/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <form class="max-w-sm mx-auto" onSubmit={hdlSubmit}>
    <div class="mb-5">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={input.name}
        onChange={hdlChange}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Enter your name"
        required
      />
    </div>
    <div class="mb-5">
      <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lname"
        value={input.lname}
        onChange={hdlChange}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Enter your last name"
        required
      />
    </div>
    <div class="mb-5">
      <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={input.address}
        onChange={hdlChange}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Enter your address"
        required
      />
    </div>
    <div class="mb-5">
      <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={input.phone}
        onChange={hdlChange}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Enter your phone number"
        required
      />
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={input.email}
        onChange={hdlChange}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Enter your email"
        required
      />
    </div>
    <div class="mb-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={input.username}
        onChange={hdlChange}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Enter your email"
        required
      />
    </div>
    <div class="mb-5">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={input.password}
        onChange={hdlChange}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Enter your password"
        required
      />
    </div>
    <div class="mb-5">
      <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={input.confirmPassword}
        onChange={hdlChange}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Confirm your password"
        required
      />
    </div>
    <div className="flex gap-5">
    <button type="submit" className="btn btn-outline btn-info mt-7">Submit</button>
          <Link className='btn btn-outline btn-warning mt-7' to="/">Login</Link>
    
    </div>
  </form>
  );
}
