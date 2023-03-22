import { Link } from 'react-router-dom';
import classes from './Contact.module.css';

function Contact(props) {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const standardDate = (date) =>
    new Date(date).toLocaleString('en-US', dateOptions);

  return (
    <li className={classes.contact}>
      <Link to={`/contacts/${props.id}`}>
        <p className={classes.author}>{props.company}</p>
        <p className={classes.text}>{props.contactPoint}</p>
        <p className={classes.text}>{standardDate(props.contactedOn)}</p>
        <p className={classes.text}>{standardDate(props.followUpOn)}</p>
        <p className={classes.text}>{standardDate(props.meetOn)}</p>
      </Link>
    </li>
  );
}

export default Contact;
