import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap"

//product and addInCart method
const  CartItem = ({product, addInCart}) => {


  return (
    <Card className="mt-2 mb-1">
   
    <CardImg className="card-image img-cover" top src={product.smallImage} />
    
    <CardBody className="text-center">
      <CardTitle>{product.productName}</CardTitle>
      <CardText className="secondary">
        price: RS {product.productPrice}
      </CardText>
      <Button className="btn-buy" color="success" onClick={() => addInCart(product)}>
        Buy Now
      </Button>
    </CardBody>
    </Card> 
  )
}

export default CartItem