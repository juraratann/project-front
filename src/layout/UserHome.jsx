import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ModalEdit from "../components/ModalEdit";

export default function UserHome() {
  const [product, setProduct] = useState([]);
  const [editIdx, setEditIdx] = useState(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/product", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, [trigger]);

  const openModal = (id) => {
    const idx = product.findIndex((el) => el.id === id);
    setEditIdx(idx);
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-2xl text-blue-500">Best selling products</div>
      <ModalEdit el={product[editIdx]} closeModal={closeModal} setTrigger={setTrigger} />
      <div className="flex flex-col gap-4">
        {product.map((el) => (
          <ProductCard key={el.id} el={el} openModal={openModal} setTrigger={setTrigger} />
        ))}
      </div>
      <div>
        <form className="flex justify-center">
          <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Zinc-15mg.jpg?o=O2pqbxqynEMEExqXbpEBNKkoFSgj&V=7N9z&w=800&h=800"
                alt="Zinc 15mg"
                style={{ maxWidth: "50%", maxHeight: "100px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chemist Zinc 15mg</h2>
              <p>120 Tablets</p>
              <p>$ 9.90</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Vitamin-E-400iu.jpg?o=4Tg8m@TRQRC6cyEEJADeZEGYC7Qj&V=WmFt&w=600&h=600"
                alt="Vitamin-E-400iu"
                style={{ maxWidth: "50%", maxHeight: "100px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Omega-3 Fish Oil</h2>
              <p>60 Softgels</p>
              <p>$ 7.90</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Calcium,-Magnesium-&-Vitamin-D.png?o=SB5CqwMffDWMMd1zM1w9PG@QsRsp&V=NtVZ&w=800&h=800"
                alt="Magnesium-&-Vitamin-D"
                style={{ maxWidth: "50%", maxHeight: "100px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Magnesium Complex</h2>
              <p>90 Tablets</p>
              <p>$ 12.90</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-4">
      <div className="text-center text-2xl text-blue-500">Recommended products</div>
      <ModalEdit el={product[editIdx]} closeModal={closeModal} setTrigger={setTrigger} />
      <div className="flex flex-col gap-4">
        {product.map((el) => (
          <ProductCard key={el.id} el={el} openModal={openModal} setTrigger={setTrigger} />
        ))}
      </div>
      <div>
        <form className="flex justify-center">
          <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Zinc-15mg.jpg?o=O2pqbxqynEMEExqXbpEBNKkoFSgj&V=7N9z&w=800&h=800"
                alt="Zinc 15mg"
                style={{ maxWidth: "50%", maxHeight: "100px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chemist Zinc 15mg</h2>
              <p>120 Tablets</p>
              <p>$ 9.90</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Vitamin-E-400iu.jpg?o=4Tg8m@TRQRC6cyEEJADeZEGYC7Qj&V=WmFt&w=600&h=600"
                alt="Vitamin-E-400iu"
                style={{ maxWidth: "50%", maxHeight: "100px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Omega-3 Fish Oil</h2>
              <p>60 Softgels</p>
              <p>$ 7.90</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Calcium,-Magnesium-&-Vitamin-D.png?o=SB5CqwMffDWMMd1zM1w9PG@QsRsp&V=NtVZ&w=800&h=800"
                alt="Magnesium-&-Vitamin-D"
                style={{ maxWidth: "50%", maxHeight: "100px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Magnesium Complex</h2>
              <p>90 Tablets</p>
              <p>$ 12.90</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}