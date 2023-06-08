import styles from "../Login.module.css"

const Login = () => {
  return (
    <div>
       <h1>Logue na sua conta</h1>
      <form>

        <div className={styles.inputGroup}>
          <label>Nome</label>
          <input type="text" placeholder="Digite seu Nome"/>
        </div>

        <div className={styles.inputGroup}>
          <label>Senha</label>
          <input type="password" placeholder="Digite sua Senha"/>
        </div>

      </form>

      <button className={styles.btnCadastrar}>Cadastrar</button>

      <button className={styles.btnLogar}>Logar</button>
    </div>
  )
}

export default Login
