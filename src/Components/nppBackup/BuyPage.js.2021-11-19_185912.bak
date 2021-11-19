import React, {useState, useEffect} from 'react'
//to fetch api
import Axios from "axios";
//to get fake data
import {random, commerce, datatype} from "faker"
//to do the ui
import {Container, Col, Row} from "reactstrap"
import CartItem from './CartItem';


//this is my key from pexel
const apiKey = "563492ad6f917000010000014adcc8c45bfd446d8629a315d4a42db2";
//url for access
const url = "https://api.pexels.com/v1/search?query=toys&per_page=6&page=1";
//my jsonpage url
const localurl = "http://myjson.dit.upm.es/api/bins/1lt3"

//here is the component which is loaded with props
const BuyPage = ({addInCart})=>{

  const [product, setProduct] = useState([]);

  // const fetchPhotos = async() =>{
  //   const response = await Axios.get(url,{
  //     headers:{
  //       Authorization: apiKey
  //     }
  //   })
  // }

  //how to fetch through axios with headers and without headers
  const fetchPhotos = async() =>{
    //const {data} = await Axios.get(localurl,{})
    const {data} = await Axios.get(url,{

      headers:{
        Authorization: apiKey
      }

    })
  
  //destructuring data
  const {photos} = data;


  const allProduct = photos.map(photo =>({
    smallImage: photo.src.medium,
    tinyImage: photo.src.tiny,
    productName: random.word(),
    productPrice: commerce.price(),
    id: datatype.uuid()

  }))
  setProduct(allProduct)

  }
  //load before handed
  useEffect(() => {
   fetchPhotos()
  }, [])

  return (
    <Container fluid>
      <h1>Buy Page</h1>
      <Row>
      {product.map(product =>(

        <Col md={4} product={product.id}>
          <CartItem product={product} addInCart={addInCart}/>
        </Col>
      ))}
      </Row>
    
    </Container>
  )

}

export default BuyPage;