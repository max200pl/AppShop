import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
     getResource,
     prevPage,
     nexPage,
     counterPage
}) => {
     const handelChangeNext = () => getResource(nexPage);
     const handelChangePrev = () => getResource(prevPage);
     return (
          <div>
               <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
                    <button
                         onClick={handelChangeNext}
                         disabled={!prevPage}
                         className={styles.buttons}
                    >
                         Previous
                    </button>
               </Link>

               <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
                    <button
                         onClick={handelChangePrev}
                         disabled={!nexPage}
                         className={styles.buttons}
                    >
                         Previous
                    </button>
               </Link>
          </div>
     )
}

PeopleNavigation.propTypes = {
     getResource: PropTypes.func,
     prevPage: PropTypes.string,
     nexPage: PropTypes.string,
     counterPage: PropTypes.number,
}
export default PeopleNavigation;