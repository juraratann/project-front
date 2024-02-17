import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function ProductForm() {
  const [input, setInput] = useState({
    name: '',
    detail: '',
    price: '',
    stock: '',
  })

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", input.title);
      formData.append("detail", input.detail);
      formData.append("price", input.price);
      formData.append("stock", input.stock); 
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/product", 
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      hdlSuccess();
      console.log(response.data);
    } catch (error) {
      console.error(error);

    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const hdlSuccess = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }

  return (
    <form
      className="flex flex-row rounded w-4/6 mx-auto p-4 gap-6 m-10 mt-1"
      onSubmit={hdlSubmit}
    >
      <div>
        <h1 className='text-white mt-[-70px] ml-[-200px]'>
        <Link to="/">Home</Link>
        </h1>
      </div>
      <div>
      <label className="form-control w-[500px]">
        <div className="label">
          <span className="label-text text-white">Name</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          name="name"
          value={input.name}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-[500px]">
        <div className="label">
          <span className="label-text text-white">Detail</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered h-[200px]"
          name="detail"
          value={input.detail}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-[500px]">
        <div className="label">
          <span className="label-text text-white">Price</span>
        </div>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-[500px]"
          name="price"
          value={input.price}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control w-[500px]">
        <div className="label">
          <span className="label-text text-white">Stock</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered h-[200px]"
          name="stock"
          value={input.stock}
          onChange={hdlChange}
        />
      </label>
      <button type="submit" className="btn btn-primary mt-5 ml-96 "onClick={hdlSuccess}>Add new</button> 
      {showPopup && (
        <div className={`popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-300 rounded z-10 ${showPopup ? 'block' : 'hidden'}`}>
          <p>Success</p>
        </div>
        )}
      </div>
      
    </form>
  );
}