import React from "react";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequests";

export default function Home() {
  // Create your own Mock API: https://mockapi.io/
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`;
  let products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = (
      <div>
        <div className="bg-red-300 p-3">Error Data Not Found</div>
      </div>
    );
  }

  if (products.loading) {
    content = <Loader></Loader>;
  }

  if (products.data) {
    content = products.data.map((product) => (
      <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mb-3">Best Sellers</h1>
      <div className="md:flex flex-wrap md:-mx-3">{content}</div>
    </div>
  );
}
