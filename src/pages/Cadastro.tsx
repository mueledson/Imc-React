import styles from '../Cadastro.module.css'

const Cadastro = () => {
  return (
    <div className={styles.cadastroGroup}>
      <h1>Cadastro</h1>
      <form>

        <div className={styles.inputGroup}>
          <label>Nome</label>
          <input type="text" placeholder="Digite seu Nome"/>
        </div>
        
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="email" placeholder="Digite seu Email"/>
        </div>

        <div className={styles.inputGroup}>
          <label>Senha</label>
          <input type="password" placeholder="Digite sua Senha"/>
        </div>
        
        <div className={styles.inputGroup}>
          <label>Confirme sua Senha</label>
          <input type="password" placeholder="Confirme sua Senha"/>
        </div>

        <button className={styles.btnCadastrar}>Cadastrar</button>

        <button className={styles.btnLogar}>Logar</button>

      </form>
    </div>
  )
}

export default Cadastro
