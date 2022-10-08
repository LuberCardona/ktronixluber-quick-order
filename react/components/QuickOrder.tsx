import React, { useState, useEffect } from 'react'
import  { useMutation, useLazyQuery } from 'react-apollo'
import UPDATE_CART from '../graphql/updateCart.graphql'
import GET_PRODUCT from '../graphql/getProductBySku.graphql' 

const QuickOrder = () => {
  const [inputText, setInputText] = useState("");
  const [search, setSearch] = useState("") 

  const [getProductData, { data: product}] = useLazyQuery(GET_PRODUCT)
  const [addToCart] = useMutation(UPDATE_CART) 

  const handleChange = (evt: any) => {
    setInputText(evt.target.value)
    console.log("Input changed:", inputText)
  }
  useEffect(() => {
    console.log("El resultado de mi producto es:", product, search )
   // console.log("PRUEBA....El resultado de mi producto es:", data)
      if (product) {         
      let skuId = parseInt(inputText)
      addToCart ({
        variables:{
          salesChannel: "1",
          items:[
            {
              id: skuId,
              quantity: 1,
              seller: "1"
            }
          ]
        }
      })
      .then(() => {
        window.location.href = "/checkout"
      })
    } 
  }, [product, search]) 

  const addProductToCart = () => {
    // ingresar declaracoin de la mutacion
    getProductData({    
      variables:{
        sku: inputText
      }
    }) 

  } 

  const searchProduct = (evt:any) => {
    evt.preventDefault();
   // console.log("Buscando a ...")
    if (!inputText) {
      alert("Por favor ingrese un codigo")
    }else{
      console.log("Estamos buscando:", inputText)
       setSearch(inputText)
       addProductToCart() 
    } 
    
  } 
  return <div>
    <h2>Compra rápida</h2>
    <form onSubmit={searchProduct}>
      <div>
        <label htmlFor="sku">Ingresa el número de sku</label>
        <input id="sku" type="text" onChange={handleChange}></input>
      </div>
      <input type="submit" value="AÑADIR AL CARRITO" />
    </form>
  </div>
}

export default QuickOrder