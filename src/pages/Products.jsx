import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector(state => state.products);


  if (!products || products.length === 0) {
    return <p className="text-lg font-semibold">No products available.</p>;
  }
  return (
    <div className="py-12 max-w-7xl mx-auto container px-4">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
