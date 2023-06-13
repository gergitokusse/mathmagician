// eslint-disable-next-line
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation">
      <h3>Math Magicians</h3>
      <ul>
        <li>
          <Link to="/Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Calculatore">Calculatore</Link>
        </li>
        <li className="last">
          <Link to="/Quete">Quete</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
