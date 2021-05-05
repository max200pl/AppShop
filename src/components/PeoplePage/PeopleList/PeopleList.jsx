/**
     ** 1 делаем деструктуризацию пропсов c ===>  const [people, setPeople]  = useState()
     ** 2 перебираем people.map и выводим при каждой итерации элементы списка li       
     ** 3 по циклу обрисовываем html разметку передавая данные с полученного объекта
     ** 4 указываем каждому элементу li уникальный ключ key={id}, для алгоритма реконселяции который использует react 
     *! алгоритм реконселяции - если данные не поменялись то по новой их отрисовать не нужно 
*/

import styles from './PeopleList.module.css';

const PeopleList = ({ people }) => { // 
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

export default PeopleList;