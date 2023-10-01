import React, { useEffect } from "react";

function Help() {
  useEffect(() => {
    let data = {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    };
    localStorage.setItem("username", JSON.stringify(data));
  }, [localStorage.getItem("username")]);

  return (
    <div>
      Help - {JSON.parse(localStorage.getItem("username"))?.brand}
      <button onClick={() => localStorage.setItem("username", "world")}>
        Update
      </button>
      <button onClick={() => localStorage.removeItem("username")}>
        Delete
      </button>
    </div>
  );
}

export default Help;
