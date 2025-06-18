import React from 'react'

const ProductCard = ({ product}) => {
    const { name, price, description, image, date } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image || "https://via.placeholder.com/150"}
      alt="Shoes" />
  </figure>
  <div className="card-body bg-white">
    <h2 className="card-title text-gray-600">{name}</h2>
    <p className='text-gray-600'>{description}</p>
    <div className="card-actions justify-end">
        <p className=" text-blue-500 font-semibold text-lg">${price.toFixed(2)}</p>
      <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">Add to Cart</button>
    </div>
    <div className="text-gray-500 text-sm mt-2">
      <p>Added on: {new Date(date).toLocaleDateString()}</p>
      </div>
  </div>
</div>
  )
}

export default ProductCard
