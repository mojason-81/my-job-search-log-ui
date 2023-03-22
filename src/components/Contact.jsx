import { Link } from 'react-router-dom';
// import classes from './Contact.module.css';

function Contact(props) {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const standardDate = (date) =>
    new Date(date).toLocaleString('en-US', dateOptions);

  return (
    <Link to={`/contacts/${props.id}`}>
      <div className={'' /*classes.contact*/}>
        <div className={'' /*classes.author*/}>{props.company}</div>
        <div className={'' /*classes.text*/}>{props.contactPoint}</div>
        <div className={'' /*classes.text*/}>
          {standardDate(props.contactedOn)}
        </div>
        <div className={'' /*classes.text*/}>
          {standardDate(props.followUpOn)}
        </div>
        <div className={'' /*classes.text*/}>{standardDate(props.meetOn)}</div>
      </div>
    </Link>
  );
}

export default Contact;
