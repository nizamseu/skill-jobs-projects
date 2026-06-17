import { useState } from "react";
import axios from "axios";
export default function Test() {
  const [formData, setFormData] = useState({
    name: "Mobile",
    price: "1000",
    description: "Smartphone",
    image: null,
  });

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;
    console.log(name, value, files, type);

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleAddData = (event) => {
    event.preventDefault();

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("price", formData.price);
    payload.append("description", formData.description);

    if (formData.image) {
      payload.append("image", formData.image);
    }

    axios
      .post("https://dummyjson.com/products/add", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className="min-h-screen p-4">
      <form
        className="mb-6 max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
        onSubmit={handleAddData}
      >
        <h1 className="mb-4 text-xl font-semibold">Add Product</h1>

        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input
            className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-green-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium">Price</label>
          <input
            className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-green-500"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block text-sm font-medium">Description</label>
          <textarea
            className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-green-500"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Image</label>
          <input
            className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-green-500"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button
          className="rounded-lg bg-green-500 px-4 py-2 text-white"
          type="submit"
        >
          Add Data
        </button>
      </form>
    </div>
  );
}
