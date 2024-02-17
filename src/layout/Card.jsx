import React from 'react';
import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <form className="flex justify-center">
    <Link to="#">
        <div className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Zinc-15mg.jpg?o=O2pqbxqynEMEExqXbpEBNKkoFSgj&V=7N9z&w=800&h=800"
            alt="zine"
            className="w-full h-72 object-cover"
          />
        </figure>
          <div className="card-body">
            <h2 className="card-title">Chemist Zinc 15mg</h2>
            <p>Zinc dietary supplements Helps strengthen immunity Helps reduce acne. and care for hair and nails.</p>
            
            <div className="card-actions justify-end">
            <Link to="#" className="btn btn-outline btn-info mt-7">Buy</Link>
            </div>
          </div>
        </div>
      </Link>
    </form>
  );
}
