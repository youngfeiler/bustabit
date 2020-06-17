import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '/Users/stefanfeiler/Desktop/reactwebsite/my-app/src/CSS/Label.css'


function Label (props){
    return(
      <Container onClick={props.click} className="full" fluid={true}>
      <Row className="justify-content-between labelfont">
        <Col xs lg>
          Bankroll:
        </Col>
        <Col xs lg>Max Bet: </Col>
        <Col xs lg>
           Max Win:
        </Col>
        <Col xs lg>
           Biggest Winner: 
        </Col>
        <Col xs lg>
           Biggest Bust:
        </Col>
      </Row>
      </Container>
    )
  }





export default Label