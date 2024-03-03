import React from 'react'
import { Link } from 'react-router-dom'

export default function Order() {
  return (
    <div className="flex justify-center flex-wrap">
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
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
          <p>$ 270</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Vitamin-E-400iu.jpg?o=4Tg8m@TRQRC6cyEEJADeZEGYC7Qj&V=WmFt&w=600&h=600"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vitamin E 400 iu</h2>
          <p>90 Tablets</p>
          <p>$ 250</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://images-its.chemistdirect.co.uk/Chemist-Direct-Calcium,-Magnesium-&-Vitamin-D.png?o=SB5CqwMffDWMMd1zM1w9PG@QsRsp&V=NtVZ&w=800&h=800"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bone Health</h2>
          <p>60 Tablets</p>
          <p>$ 200</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOYFtj1wf4HFySTZ2jhGkXNRc-bCbWfsWpR48qJWZACIVdmUQ_"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Omega-3 Fish Oil</h2>
          <p>60 Softgels</p>
          <p>$ 230</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="data:image/jpeg;base64,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"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Wound Spray</h2>
          <p>100 ml</p>
          <p>$ 120</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzN5EZOc98pS5wS-SOoonZ0YJjANc7wgpr-_gZ5Gjt_Ec5d3yN"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Magnesium Complex</h2>
          <p>60 Softgels</p>
          <p>$ 250</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://pngimg.com/d/first_aid_kit_PNG42.png"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">First Aid Kit</h2>
          <p>10 Products</p>
          <p>$ 270</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://www.health-emporium.co.uk/cdn/shop/products/product-pernaton-mussel-extract-green-lipped-gel-250ml-18197-36722-3691185.jpg?v=1579883321"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Pernaton Gel</h2>
          <p>125 ml</p>
          <p>$ 220</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://m.media-amazon.com/images/I/61EQlNu41oL._AC_UF1000,1000_QL80_.jpg"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Kool’n Soothe Gel</h2>
          <p>4 Gel Sheets</p>
          <p>$ 290</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://sterosport.co.uk/wp-content/uploads/2022/03/Zoff-Adhesive-Remover-Wipe.png"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Zoff Adhesive Wipes</h2>
          <p>20 Wipes</p>
          <p>$ 249</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://thursdayplantation.com.au/wp-content/themes/thursdayplantation/timthumb.php?src=https://thursdayplantation.com.au/wp-content/uploads/2020/07/pure-tea-tree-oil-50ml-thursday-plantation-aus.jpg&w=703&h=518&q=95"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Australian Tea tree Oil</h2>
          <p>120 Tablets</p>
          <p>$ 89</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>
      <Link to="/card" className="card w-96 bg-base-100 shadow-xl m-4">
        <figure>
          <img
            src="https://inwfile.com/s-c/vmwne0.jpg"
            alt="Vitamin-E-400iu"
            style={{ maxWidth: "50%", maxHeight: "100px" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Vitamin D3 50 mcg</h2>
          <p>90 Tablets</p>
          <p>$ 280</p>
          <div className="card-actions justify-end"></div>
        </div>
      </Link>

    </div>
  )
}
