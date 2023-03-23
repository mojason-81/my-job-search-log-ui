import { Link } from 'react-router-dom';
import classes from './Contact.module.css';
import classNames from 'classnames/bind';

function Contact(props) {
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const standardDate = (date) => {
    if (!!date) {
      return new Date(date.replace(/-/g, '/')).toLocaleString(
        'en-US',
        dateOptions
      );
    }
    return '';
  };

  const isOdd = (num) => num % 2 == 0;

  const tBodyClasses = classNames({
    [classes.contact]: true,
    [classes.contactColored]: isOdd(props.index),
  });

  // Need to pass nested attributes for company
  return (
    <tbody className={tBodyClasses}>
      <tr>
        <td>{props.company.name}</td>
        <td>{props.contactPoint}</td>
        <td>{standardDate(props.contactedOn)}</td>
        <td>{props.contactType}</td>
        <td>{standardDate(props.followUpOn)}</td>
        <td>{standardDate(props.meetOn)}</td>
        <td>
          <Link to={`/contacts/${props.id}`}>Update</Link>
        </td>
      </tr>
    </tbody>
  );
}

export default Contact;
