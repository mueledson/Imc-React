import styles from '../Cadastro.module.css'
import { useNavigate } from "react-router-dom"

const Cadastro = () => {

  const navigate = useNavigate();

  const handleCadastrarButton = () => { navigate('/Home') }

  const handleLoginButton = () => { navigate('/Login') }

  return (
    <div className={styles.cadastroGroup}>
      <form className={styles.Cadastroform}>
        <h1>Cadastro</h1>

        <div className={styles.inputs}>
          <div className={styles.names}>
            <div className={styles.inputGroup}>
              <label>Primeiro Nome</label>
              <input type="text" placeholder="Digite seu Nome"/>
            </div>

            <div className={styles.inputGroup}>
              <label>Sobre Nome</label>
              <input type="text" placeholder="Digite seu Sobre Nome"/>
            </div>
          </div>

            <div className={styles.email}>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input type="email" placeholder="Digite seu Email"/>
              </div>
            </div>

          <div className={styles.pass}>
            <div className={styles.inputGroup}>
              <label>Senha</label>
              <input type="password" placeholder="Digite sua Senha"/>
            </div>
            
            <div className={styles.inputGroup}>
              <label>Confirme sua Senha</label>
              <input type="password" placeholder="Confirme sua Senha"/>
            </div>
          </div>
        </div>

        <button className={styles.btnCadastrar} onClick={handleCadastrarButton}>Cadastrar</button>

        <button className={styles.btnLogar}     onClick={handleLoginButton}>Logar</button>

      </form>
    </div>
  )
}

export default Cadastro