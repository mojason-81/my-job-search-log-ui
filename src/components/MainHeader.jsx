import { Link } from 'react-router-dom';
import { MdWorkHistory, MdAssignmentAdd } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdWorkHistory />
        Job Search Contact History
      </h1>
      <p>
        <Link to="/create-contact" className={classes.button}>
          <MdAssignmentAdd size={18} />
          New Contact
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
