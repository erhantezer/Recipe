import styles from './Home.module.css';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Col, Row } from 'react-bootstrap';


const Home = () => {
const [recipies, setRecipies] = useState();
const [query, setQuery] = useState("");
const [meal, setMeal] = useState("breakfast")

  const APP_ID ="f6edb9f6"
  const APP_KEY ="4ab957a75da653a00a88eb87864b8139"
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getRecipies = async () => {
    const {data} = await axios.get(url);
    console.log(data);
    setRecipies(data.hits)
    console.log(data.hits)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipies()
  }
  return (
    <>
    <Container className={styles.main}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Form.Control
        size='lg'
        type='text'
        placeholder='Search a recipe'
        className={styles.select}
        required
        onChange={(e) => setQuery(e.target.value) }
        />
        <Form.Select
        aria-label='Default select example'
        className={styles.select}
        onSelectChange={(e) => setMeal(e.target.value)}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
          <option value="teatime">Teatime</option>
        </Form.Select>
        <Button variant="warning" type='submit' className={styles.select}>
          Search
        </Button>
      </Form>
    </Container>
    <Container>
        
       
          
        <Row>
            
        {recipies?.map((item,index)=> (
                <Col xs={12} md={3} key={index}>
                <RecipeCard recipe={item.recipe} index={index}/>
              </Col>
          ))
        }  
        </Row>
       
       
        
          
        
      </Container>
    </>
  )
}

export default Home