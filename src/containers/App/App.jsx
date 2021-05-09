import PeoplePage from '@containers/PeoplePage'; // компонент возвращает асинхронный запрос с сервера с данными через URL 
// eslint-disable-next-line no-unused-vars
import styles from './App.module.css'; //import modules -> object {key:values}

const App = () => {
  return (
       <PeoplePage/>
    )
}

export default App;

