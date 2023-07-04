import React, { useState } from 'react'
import { toast } from 'react-toastify';





const Form = ({addItem}) => {
const [newItemName,setItemName]=useState('');
console.log(newItemName)
const handleSubmit=(e)=>{
    e.preventDefault();
   if(!newItemName)  {
    toast.error('Please enter a value')
    
    return;
  }
   
   addItem(newItemName);
   setItemName('');
}

return (
<form onSubmit={handleSubmit}>
<h4 >add remove list</h4>
<div className='form-control'>

<input type="text" className='form-input' value={newItemName}
 onChange={(e)=>setItemName(e.target.value)}/>
<button type='submit' className='btn'>add item</button>


 </div>

</form>
  )
}

export default Form
