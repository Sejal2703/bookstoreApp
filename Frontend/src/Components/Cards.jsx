import React from "react";

function Cards({ item }) {
  return (
    <>
    <div className="mt-4 my-3 p-3">
    <div className="card w-92 bg-base-100  shadow-md hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
      <figure>
        <img 
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341897.jpg?semt=ais_hybrid&w=740&q=80"
        alt={item.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">${item.price}</div>
          <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white duration-500">Buy Now</div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Cards;
