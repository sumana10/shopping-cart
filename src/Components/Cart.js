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
    <Container>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
      {cartItem.map(item =>(
        <ListGroupItem key={item.id}>
          <Row>
            <Col>
            <img 
            height={80}
            src={item.tinyImage} />
            </Col>
            <Col className="text-center">
              <div className="text-primary">
                {item.productName}
              </div>
            <span>price:-{item.productPrice}</span>
            <Button color="danger" onClick={()=>removeItem(item)}>Remove</Button>
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
              <Button color="success" onClick={buyNow}>pay here</Button>
            </CardFooter>
          
          </Card>
        ):(

          <h1 className="text-warning">
          Cart is Empty
          </h1>
          
        )
      }
    </Container>
  )
}
