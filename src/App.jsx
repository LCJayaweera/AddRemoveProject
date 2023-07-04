import { useState } from "react";
import Form from "./Form";
import {nanoid} from 'nanoid';
import Items from "./Items";
import { ToastContainer,toast} from "react-toastify";



const setLocalStorage = (items)=>{
localStorage.setItem('list',JSON.stringify(items))
} 
const defaultList =JSON.parse(localStorage.getItem('list')||'[]');



const App = () => {

const [items,setItems] =useState(defaultList);

const addItem=(itemName)=>{
  const newItem ={
    name:itemName,
    completed:false,
    id:nanoid(),
  };
  const newItems =[...items,newItem];
  setItems(newItems);
  setLocalStorage(newItems);
  toast.success('item added to the list');
}

const removeItem=(itemId)=>{
  const newItem = items.filter((item)=>item.id !==itemId);
  setItems(newItem);
  setLocalStorage(newItem);
  toast.success('item deleted');
}

const editItem=(itemId)=>{
  const newItems =items.map((item)=>{
    if(item.id===itemId){
      const newItem={...item,completed:!item.completed};
      return newItem;
    }

    return item;

  });
setItems(newItems);
setLocalStorage(newItems); 
}





  return(
    <section className="section-center">
      <ToastContainer position='top-center'/>
    <Form addItem={addItem}/>
    <Items items={items} removeItem={removeItem} editItem={editItem}/>
    </section>
  )
  
};

export default App;
