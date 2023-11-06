import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player({el}) {
  return (
    <Card style={{ width: '18rem', }}>
      <Card.Img variant="top" src={el.src}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
        {el.team}
        </Card.Text>
        <h5>{el.nationality}</h5>
        <h5>{el.jerseynumber}</h5>
        <h5>{el.age}</h5>
      </Card.Body>
    </Card>

  );
}

export default Player