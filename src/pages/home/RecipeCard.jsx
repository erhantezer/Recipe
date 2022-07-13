import styles from './Home.module.css';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe,index}) => {
  const {image,label} =recipe;
 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`details/${index}`, {state: recipe})
  }



  return (
    <Card className={styles.card}>
    <Card.Img variant="top" src={image} className={styles.cardimg} />
    <Card.Body>
      <Card.Title className={styles.cardtitle}>{label}</Card.Title>
        <Button className={styles.btn} variant="warning" onClick={handleClick}>View More</Button>
    </Card.Body>
  </Card>
  )
}

export default RecipeCard