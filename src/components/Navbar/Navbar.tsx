import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
        <div className={styles.Icon}> <img src="caminho-icone.png"/> </div>
        <div className={styles.Navigation}>
            <ul>
                <li><Link to="/">Cadastro</Link></li>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
