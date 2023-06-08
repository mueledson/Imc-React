import styles from "../Login.module.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();

  const handleLoginButton = () => { navigate('/Home') }

  const handleCadastrarButton = () => { navigate('/') }

  return (
    <div className={styles.LoginGroup}>
      <div className={styles.inputs}>
        <form>
          <h1>Logue na sua conta</h1>

          <div className={styles.inputGroup}>
            <label>Nome</label>
            <input type="text" placeholder="Digite seu Nome"/>
          </div>

          <div className={styles.inputGroup}>
            <label>Senha</label>
            <input type="password" placeholder="Digite sua Senha"/>
          </div>

          <button className={styles.btnCadastrar} onClick={handleCadastrarButton}>Cadastrar</button>

          <button className={styles.btnLogar} onClick={handleLoginButton}>Logar</button>

        </form>
      </div>
    </div>
  )
}

export default Login
