import codingsvg from '../../assets/coding.svg';
import styles from "./About.module.css";


const About = () => {
  return (
    <div className={styles.main}>
      <img src={codingsvg} alt="codingsvg" className={styles.image} />
      <h1> Hi, &#128104; I'm Erhan</h1>
      <h4>I’m currently learning Full-Stack Development Languages.</h4>
      <h4>
        I've already known HTML, Css, JavaScript, ReactJS, SQL,
        Python.
      </h4>
      <h4>
        <a href="mailto:erhantezer68@gmail.com" className={styles.mail}> Send email: </a>
        erhantezer68@gmail.com
      </h4>
    </div>
  )
}

export default About