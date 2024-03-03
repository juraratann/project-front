import axios from "axios";
import { useState, useEffect } from "react";

export default function ModalEdit(props) {
  const { el, closeModal, setTrigger } = props;
  const [input, setInput] = useState({
    name: "",
    detail: "",
    price: "",
    stock: "",
  });
  const [status, setStatus] = useState([])

  useEffect(() => {
    let allStatus = JSON.parse(localStorage.getItem('status'))
    if (allStatus) {
      setStatus(allStatus)
    }
  }, [])

  useEffect(() => {
    setInput({
      name: el?.name ?? "",
      detail: el?.detail ?? "",
      price: el?.price ?? "",
      stock: el?.stock ?? "",
    });
  }, [el?.id]);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();

      const output = { ...input };
      const token = localStorage.getItem("token");
      const rs = await axios.put(`http://localhost:8000/product/${el.id}`, output, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      setTrigger(prev => !prev);
      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form className="flex flex-col border rounded w-5/6 mx-auto p-4 gap-6" onSubmit={hdlSubmit}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Name</span>
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
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Detail</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="detail"
              value={input.detail}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="price"
              value={input.price}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Stock</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="stock"
              value={input.stock}
              onChange={hdlChange}
            />
          </label>
          <button type='submit' className="btn btn-primary">Update</button>
          <button type='button' className="btn btn-secondary" onClick={closeModal}>Cancel</button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
