import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ModalEdit from "../components/ModalEdit";
import { Link } from "react-router-dom";

export default function UserHome() {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center text-2xl text-blue-500">Best selling products</div>
      <div>
        <form className="flex justify-center">
        <Link to="/new">
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
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
          </Link>
          <Link to="/new">
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
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          </Link>
          <Link to="/new">
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
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          </Link>
        </form>
      </div>
      <div className="flex flex-col gap-4">
      <div className="text-center text-2xl text-blue-500">Recommended products</div>
      <div>
      <form className="flex justify-center">
      <Link to="/new">
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
             
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </Link>
        <Link to="/new">
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
              
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          </Link>
          <Link to="/new">
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
             
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          </Link>
      </form>
      </div>
    </div>
    </div>
  );
}