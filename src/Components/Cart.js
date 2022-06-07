import React from 'react'

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row
} from "reactstrap"

export default function Cart({cartItem, removeItem, buyNow}) {

  let amount = 0;
  cartItem.forEach(item =>{
    amount = parseFloat(amount) + parseFloat(item.productPrice)
  })
  return (
    <Container className="buy-header">
      <div >
      <h3>Your Cart</h3>
      <hr />
      </div>
      <ListGroup>
      {cartItem.map(item =>(
        <ListGroupItem key={item.id} className="item">
          <Row>
            <Col>
            <img 
            height={80}
            src={item.tinyImage} />
            </Col>
            <Col className="text-center">
              <div className="text-primary cart-tag">
                {item.productName}
              </div>
              <div className="text-primary cart-tag">
                Rs: {item.productPrice}
              </div>
              <div className="text-primary cart-tag">
              <Button className="btn-rem" color="danger" onClick={()=>removeItem(item)}>Remove</Button>
              </div>
            
            </Col>
          </Row>
        </ListGroupItem>
        
      ))}
      </ListGroup>
      {
        cartItem.length > 0 ? (

          <Card className="text-center">
            <CardHeader>
              Grand Total
            </CardHeader>
            <CardBody>
              Your amount for {cartItem.length} is {amount}
            </CardBody>
            <CardFooter>
              <Button className="btn-buy" color="success" onClick={buyNow}>pay here</Button>
            </CardFooter>
          
          </Card>
        ):(
          
          <div className="buy-header">
          <h3 className="text-warning">
          Cart is Empty
          </h3>
          </div>
          
        )
      }
    </Container>
  )
}
