import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AddItem from '../components/AddItem';
import Footer from '../components/Footer';
import ItemCard from '../components/ItemCard';
import Navbaar from "../components/Navbaar";
import { getItem } from '../redux/actions/itemActions';
const Item = () => {
  const dispatch=useDispatch()
  const items = useSelector((state) => state.reducerItem.items);
  useEffect(() => {
    dispatch(getItem())
  }, [dispatch])
  
  return (
    <div>
      <Navbaar />
      <AddItem/>
      <div style={{display:'flex' , flexWrap:"wrap"}}>
        {items?.map((el) => (
          <ItemCard key={el._id} item={el} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Item