/* eslint-disable jsx-a11y/anchor-is-valid */
/**
     ** 1 делаем деструктуризацию пропсов c ===>  const [people, setPeople]  = useState()
     ** 2 перебираем people.map и выводим при каждой итерации элементы списка li       
     ** 3 по циклу обрисовываем html разметку передавая данные с полученного объекта
     ** 4 указываем каждому элементу li уникальный ключ key={id}, для алгоритма реконселяции который использует react 
     *! алгоритм реконселяции - если данные не поменялись то по новой их отрисовать не нужно 
     ==============PropTypes================
     ** 1) подключаем 'prop-types' для определения типа передаваемых данных через пропсы 
        1.1 вызываем метод .propTypes 
        1.2 присваиваем объект с ключом people: и свойством в котором указан тип пропса 

*/
import PropTypes from 'prop-types';

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => { 
     return (
          <>
               <ul className={styles.list__container}>
                    {people.map(({ id, name, img }) =>
                         <li className={styles.list__item} key={id}>
                              <a href="#">
                                   <img className={styles.person__photo} src={img} alt={name} />
                                   <p>{name}</p>
                              </a>
                         </li>
                    )}
               </ul>
          </>
     )
}

PeopleList.propTypes = {
     people: PropTypes.array
}

export default PeopleList;