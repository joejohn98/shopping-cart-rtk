import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* name */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Product Name:{" "}
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            id="name"
            placeholder="Product 1"
            className="w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* category */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Category:{" "}
          </label>
          <select
            {...register("category", { required: true })}
            name="category"
            id="category"
            className="w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Choose a Category</option>
            <option value="clothing">Clothing</option>
            <option value="gadget">Gadgets</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>

        {/* description */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Description:{" "}
          </label>
          <input
            {...register("description", { required: true })}
            type="text"
            name="description"
            id="description"
            placeholder="product description"
            className="w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* product image url */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Product URL:{" "}
          </label>
          <input
            {...register("image", { required: true })}
            type="text"
            name="image"
            id="image"
            placeholder="Paste your url"
            className="w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* price and date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Price:{" "}
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              name="price"
              id="price"
              placeholder="100"
              className="w-full bg-gray-50 text-black mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Upload Date{" "}
            </label>
            <input
              {...register("date", { required: true })}
              type="date"
              name="date"
              id="date"
              className="w-full bg-gray-50 text-black mt-1 p-2 placeholder:text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <button className="w-full bg-indigo-500 text-white py-2.5 px-4 rounded-lg hover:bg-indigo-700">
          Add Products
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
