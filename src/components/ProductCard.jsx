import axios from "axios";
import React from "react";

export default function TodoCard(props) {
  const { el, openModal, setTrigger } = props;

  const statusColor = el.status==='PENDING' ? 'bg-pink-300' 
    : el.status==='DOING' ? 'bg-blue-300' : 'bg-lime-300'
  const hdlDelete = async e => {
    try {
      e.stopPropagation()
      const token = localStorage.getItem('token')
      let rs = await axios.delete(`http://localhost:8000/product/${el.id}`, {
        headers : { Authorization : `Bearer ${token}`}
      })
      alert('Delete successful') 
      setTrigger(prv=>!prv)
    } catch (err) {
      console.log(err) 
    }
  }

  return (
    <div
    className={`card w-5/6 bg-gray-200 shadow-xl mx-auto cursor-pointer
    active:shadow-none active:translate-x-2 active:translate-y-1`}
    onClick={() => openModal(el.id)}
  >
    <div className="card-body">
      <div className="flex justify-between">
        <h2 className="card-title text-gray-800">{el.name}</h2>
        <h2 className="card-title text-gray-800">{el.detail}</h2>
        <h2 className="card-title text-gray-800">{el.price}</h2>
        <h2 className="card-title text-gray-800">{el.stock}</h2>
        <div className="badge badge-secondary" onClick={hdlDelete}>delete</div>
      </div>
    </div>
  </div>
  
  );
}