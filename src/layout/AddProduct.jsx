import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function AddProduct() {
  const [input, setInput] = useState({
    name: "",
    detail: "",
    price: "",
    stock:""
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("detail", input.detail);
      formData.append("price", input.price);
      formData.append("stock", input.stock); 
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8000/product/pro", 
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
      onSubmit={hdlSubmit}>
      <div>
        <h1 className='text-white mt-[-70px] ml-[-200px]'>
        </h1>
      </div>
      <div>
      <label className="form-control w-[500px]">
        <div className="label">
          <span className="label-text text-blue-500">Name</span>
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
          <span className="label-text text-blue-500">Detail</span>
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
          <span className="label-text text-blue-500">Price</span>
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
      <button type="submit" className="btn btn-primary mt-5 ml-96 "onClick={hdlSuccess}>Add</button> 
      {showPopup && (
        <div className={`popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 border border-gray-300 rounded z-10 ${showPopup ? 'block' : 'hidden'}`}>
          <p>Add</p>
        </div>
        )}
      </div>
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Edit
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Chemist Zinc 15mg
                </th>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    $450
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Omega-3 Fish Oil
                </th>
                <td class="px-6 py-4">
                    5
                </td>
                <td class="px-6 py-4">
                    $1000
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magnesium Complex
                </th>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    $550
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Bone Health

                </th>
                <td class="px-6 py-4">
                    3
                </td>
                <td class="px-6 py-4">
                    $750
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Vitamin D3 4000 iu

                </th>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    $600
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Vitamin C 500mg
                </th>
                <td class="px-6 py-4">
                    10
                </td>
               
                <td class="px-6 py-4">
                    $3000
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </form>
  );
}