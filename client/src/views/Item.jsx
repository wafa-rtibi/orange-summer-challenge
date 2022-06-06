import React, { useEffect } from "react";
import Navbaar from "../components/Navbaar";
import ItemCard from "../components/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { getItem}  from "../redux/actions/itemActions";
const Item = () => {
   const dispatch = useDispatch();
   const items = useSelector((state) => state.reducerItem.items);

   useEffect(() => {
     dispatch(getItem());
   }, []);
  return (
    <div>
      <Navbaar />
      <h2>Items</h2>
      <div style={{display:'flex', flexWrap:"wrap" }}> { items?.map((el)=><ItemCard  key={el.id} item={el}/>)} </div>
    </div>
  );
};

export default Item;
