
import {  Card, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from './Details.module.css';

const Details = () => {
  const { state } = useLocation();
  const recipe = state;
  console.log(recipe)


  return (
    
      <Card className={styles.card}>
      <Card.Img variant="top" src={recipe.image} className={styles.cardImg}/>
        <Card.Header>{recipe.label}</Card.Header>
        <Card.Body>
          <Card.Title className={styles.title}>Ingredients</Card.Title>
          
          <ListGroup variant="flush">
           {
            recipe.ingredientLines.map((line, index) => (
                <ListGroup.Item  key={index}>{index+1}-🍜 {line}</ListGroup.Item>
        
          ))
           }
           {recipe.cuisineType.map((item)=> <span>Type {item} Food</span>)}
           </ListGroup>
        </Card.Body>
        <Card.Footer style={{fontSize:"1.2rem",textAlign:"center"}} className="text-muted">{recipe.mealType[0]}</Card.Footer>
      </Card>
   
  );
};

export default Details;
