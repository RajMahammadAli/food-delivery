import React, { useState } from "react";
import { data } from "../../data/Data";

const Food = () => {
  const [foods, setFoods] = useState(data);
  //filtertype
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //filter price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] px-4 mx-auto py-12 ">
      <h1 className="text-center text-4xl font-bold text-orange-600 uppercase mb-8">
        Top Rated Menu Food
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        {/*filter row*/}
        <div>
          {/*filter type*/}
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              Chickens
            </button>
          </div>
        </div>
        <div>
          {/*filter price*/}
          <h1>Filter Price</h1>
          <div className="flex justify-between max-w-[300px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-4"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((items) => (
          <div
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg mt-4"
            key={items.id}
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={items.image}
              alt=""
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{items.name}</p>
              <p>
                <span className="bg-orange-600 text-white p-1 rounded-full">
                  {items.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
