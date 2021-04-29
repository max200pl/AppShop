
import styles from './App.module.css'; //import modules -> object {key:values}
// eslint-disable-next-line no-unused-vars
import { getApiResource } from '../../utils/network'; //  import {name function}

const App = () => {
  return (
    <h1 className={styles.header} >Привет</h1> // name function (arguments, arguments)
  )
}

export default App;
