import React from 'react'
import { Link } from 'react-router-dom'

export default function Order() {
  return (
    <form className="flex justify-center">
      <Link to="/card">
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
        </Link>
        <Link to="/card">
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
          </Link>
          <Link to="/card">
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
          </Link>
      </form>
    
  )
}
