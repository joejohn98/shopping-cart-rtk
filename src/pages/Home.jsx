import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const products = useSelector((state) => state.products);

  if (products.length === 0) {
    return <p className="text-xl font-bold"> No Products Found !!</p>;
  }
  return (
    <div className="py-8 max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="col-span-2">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
        <div>Add New Product</div>
      </div>
    </div>
  );
};

export default Home;
