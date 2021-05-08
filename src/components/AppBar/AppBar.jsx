import { NavLink } from 'react-router-dom';
import { paths } from '../../router/routes';

const AppBar = () => (
  <div>
    <ul>
      <li>
        <NavLink to={paths.home}>Home</NavLink>
      </li>
      <li>
        <NavLink to={paths.movies}>Movies</NavLink>
      </li>
    </ul>
  </div>
);

export default AppBar;
