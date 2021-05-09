import { NavLink } from 'react-router-dom';
import { paths } from '../../router/routes';
import styles from './AppBar.module.css';

const AppBar = () => (
  <div className={styles.appBarWrapper}>
    <ul className={styles.navLinkList}>
      <li className={styles.navLinkItem}>
        <NavLink
          exact
          to={paths.home}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navLinkItem}>
        <NavLink
          to={paths.movies}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AppBar;
