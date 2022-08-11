import { useParams, Routes, Route } from "react-router-dom"

// component and pages
import Offers from "./Offers"

function ProductDetails() {
  const { id } = useParams()

  return (
    <div className="content">
      <div className="product">
        <div className="image">
          <img src="https://via.placeholder.com/520x460" alt="product" />
        </div>
        <div className="details">
          <h2>Product - {id}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eaque repudiandae itaque dolorem nihil, voluptas corporis tempora provident optio harum modi inventore esse nostrum exercitationem magnam tempore odio laborum velit! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi voluptate neque harum. Quam facere accusamus exercitationem in quidem mollitia eligendi porro eos voluptates iure incidunt, laudantium sed harum omnis quasi?</p>
        </div>
      </div>
      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>
    </div>
  )
}

export default ProductDetails
