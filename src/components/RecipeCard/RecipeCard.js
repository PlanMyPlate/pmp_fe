import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RecipeCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Link to={`/recipes/${props.id}`}>
          <Button variant="outline-info" size="sm">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;

