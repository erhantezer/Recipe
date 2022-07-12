import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import kitchen from '../../assets/pot-kitchen.svg';
import styles from './Login.module.css';


const Login = () => {
const navigate = useNavigate();

const handleLogin = (e) =>{
  e.preventDefault();
  navigate("/home")

}



  return (
    <div className={styles.mainlogin}>
      <img src={kitchen} alt="kitchen-pot" className={styles.kitchenlogo} />
      <h1 className={styles.logo}>Erhan's Kitchen</h1>

      <Form className={styles.form} onSubmit={handleLogin}>

        <Form.Label>Name</Form.Label>
        <Form.Control type='text' placeholder='Enter name ...' required/>

        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Enter password' required/>

        <Button variant='warning mt-2' type='submit'>Login</Button>

      </Form>

    </div>
  );
};

export default Login;