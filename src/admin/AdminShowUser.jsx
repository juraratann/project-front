import axios from 'axios'
import { useEffect, useState } from 'react'
import ModalEdit from '../components/ModalEdit'
import ProductCard from '../components/ProductCard'

export default function ShowUser() {
  const [products, setProducts] = useState([])
  const [editIdx, setEditIdx] = useState(-1)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const run = async () => {
      let token = localStorage.getItem("token");
      const rs = await axios.get("http://localhost:8000/product/pro", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(rs.data.products);
    };
    run();
  }, [trigger]);

  const openModal = (id) => {
    let idx = products.findIndex( el=> el.id === id)
    setEditIdx(idx)
    document.getElementById("my_modal_2").showModal()
  }

  const closeModal = () => {
    document.getElementById("my_modal_2").close()
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-2xl text-blue-500"></div>
      <ModalEdit el={products[editIdx]} closeModal={closeModal} setTrigger={setTrigger}/>
      <div className="flex flex-col gap-4">
        {products.map((el) => (
          <ProductCard key={el.id} el={el} openModal={openModal} setTrigger={setTrigger}/>
        ))}
      </div>
    </div>
  );
}
