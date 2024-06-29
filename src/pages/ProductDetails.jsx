import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




const ProductDetails = () => {
    let [sigleData, setSingleData ] = useState ([])
    let ProductId= useParams()
    
 

    let getData = () =>{
        axios.get(`https://dummyjson.com/products/${ProductId.id}`).then((response)=>{
            setSingleData(response.data);
        })
    }
    
    useEffect(()=>{
      getData()
    },[])

    console.log(sigleData);

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails