import axios from "axios";
import React, { useState } from "react";

export default function ProductForm() {
  const [input, setInput] = useState({
      name: "",
      detail: "",
      price: "",
      stock: "",
  });

  const hdlChange = (e) => {
      setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


const hdlSubmit = async (e) => {
    try {
        e.preventDefault();

        if (!input.name || !input.detail || !input.price || !input.stock) {
            alert("กรอกข้อมูลให้ครบ");
            return;
        }
        const token = localStorage.getItem("token");
        const rs = await axios.post('http://localhost:8000/product/products', input,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );


        alert("Create new OK");
    } catch (err) {
        alert(err.message);
    }
};

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>

                <div className="text-3xl mb-6 font-bold text-center text-blue-600"></div>
                <div className="p-12  border w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto rounded-lg mt-10 bg-gradient-to-r bg-gray-100 shadow-md">
                    <form onSubmit={hdlSubmit}>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-black">Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="name"
                                className="input input-bordered w-full "
                                name="name"
                                value={input.name}
                                onChange={hdlChange}
                            />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-black">Detail</span>
                            </div>
                            <input
                                type="text"
                                placeholder="detail"
                                className="input input-bordered w-full "
                                name="detail"
                                value={input.detail}
                                onChange={hdlChange}
                            />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-black">Price</span>
                            </div>
                            <input
                                type="text"
                                placeholder="price"
                                className="input input-bordered w-full "
                                name="price"
                                value={input.price}
                                onChange={hdlChange}
                            />
                        </label>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text text-black">Stock</span>
                            </div>
                            <input
                                type="text"
                                placeholder="stock"
                                className="input input-bordered w-full "
                                name="stock"
                                value={input.stock}
                                onChange={hdlChange}
                            />
                        </label>
                        <br />
                        <div>
                            <button className="btn px-4 btn-info hover:bg-blue-700 text-sm font-semibold text-gray-600 mb-1">Add</button>
                        </div>
                    </form>
                </div>
            </div>

  );
}