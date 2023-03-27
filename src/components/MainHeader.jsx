import { Link, useNavigate } from 'react-router-dom';
import { MdWorkHistory, MdAssignmentAdd } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader(props) {
  const navigate = useNavigate();
  const navHome = () => {
    navigate('/');
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <button type="button" onClick={navHome}>
          <MdWorkHistory />
        </button>
        {/* TODO:  Hmmm....  figure out how to get the company name here */}
        {props.companyName || 'Job Search'} Contact History
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
