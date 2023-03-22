import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Contacter
      </h1>
      <p>
        <Link to="/create-contact" className={classes.button}>
          <MdPostAdd size={18} />
          New Contact
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
