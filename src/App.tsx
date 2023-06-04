import { useState } from 'react';
import styles from './App.module.css'
import PoweredBy from './assets/powered.png'
import { levels, calculateImc, Level } from './helpers/imc'
import leftArrow from './assets/leftarrow.png'
import GridItem from './components/GridItem/GridItem';

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if (heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
    }else {
      alert ('Preencha todos os campos')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={PoweredBy} width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
         <h1>Calcule seu IMC</h1>
         <p>IMC é a sigla para Índice de Massa Corporal, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite sua altura. Ex: 1.5 (altura em METROS)"
            value={heightField > 0 ? heightField : ''}
            onChange={ e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input
            type="number"
            placeholder="Digite sua altura. Ex: 75kg (peso em KG)"
            value={weightField > 0 ? weightField : ''}
            onChange={ e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
          Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow && 
             <div className={styles.grid}>
             {levels.map((item, key) =>(
               <GridItem key={key} item={item} />
             ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
