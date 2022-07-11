import { Container} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import styles from "./Navbar.module.css";






const Navbar = () => {
  const navigate =useNavigate();
  return (
   <Container className={styles.navbar}>
    
    <div className={styles.logo}>
        <Link to="/home" className={styles.link}><span>Erhan's Kitchen</span> RECIEP</Link>
    </div>

    <div className={styles.buttons}>
        <Link to="/about" className={styles.link}>ABOUT</Link>
        <a href="https://github.com/erhantezer" rel="noopener noreferrer" target="_blank" className={styles.link}>GITHUB</a>
        <Link to="/" className={styles.link} onClick={() =>navigate("/")}>LOGOUT</Link>
    </div>

   </Container>
  )
}

export default Navbar