import { useState } from "react";
import ItemList from "./ItemList";

const CategoryList = ({ data, showItems, onClick }) => {

  

 

  return (
    <div className="m-2 p-4 shadow-lg ">
      <div
        className="flex justify-between cursor-pointer "
        onClick={onClick}
       
        
      >
        <span className="text-lg font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default CategoryList;
