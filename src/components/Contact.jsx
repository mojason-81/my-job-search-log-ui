import {
  Link,
  useActionData,
  useNavigate,
  redirect,
  useFetcher,
} from 'react-router-dom';
import { MdDelete, MdEdit, MdRemoveRedEye } from 'react-icons/md';
import classes from './Contact.module.css';
import classNames from 'classnames/bind';

function Contact(props) {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  // NOTE: A bit of magic going on here.  This is using the action
  //       from the route this component is rendered in.  When we define
  //       that route, we're using an action that redirects to '/'.
  //       I'm doing this here because calling navigate('/') doesn't
  //       seem to work to actually navigate to the route and fire the loader.
  useActionData();

  /*
   * Define some helper funcitons
   */
  const destroy = () => {
    fetch(`http://localhost:3000/contacts/${props.id}`, {
      method: 'delete',
    }).then(
      () => {
        // NOTE: Since I'm not doing anything with this "request" being
        //       sent to the action, I'm pretty sure this isn't needed.
        fetcher.submit({ idle: true }, { method: 'delete' });
      },
      (e) => {
        // TODO: Actually do something with an error.
        alert(e);
      }
    );
  };

  const navToCompany = () => {
    navigate(`/company/${props.company.id}`);
  };

  const navToContactEdit = () => {
    navigate(`/contacts/${props.id}/edit`);
  };

  const navToContactDetails = () => {
    navigate(`/contacts/${props.id}`);
  };

  // TODO: Dry this up
  //       Also defined in ContactDetails.jsx
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

  /*
   * Define some helpful consts
   */
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const tBodyClasses = classNames({
    [classes.contact]: true,
    [classes.contactColored]: isOdd(props.index),
  });

  /*
   * Render component
   */
  return (
    <tbody className={tBodyClasses}>
      <tr>
        <td>
          <button type="button" onClick={navToCompany}>
            {props.company.name}
          </button>
        </td>
        <td>{props.contactPoint}</td>
        <td>{standardDate(props.contactedOn)}</td>
        <td>{props.contactType}</td>
        <td>{standardDate(props.followUpOn)}</td>
        <td>{standardDate(props.meetOn)}</td>
        <td>
          <div className={classes.actions}>
            <button type="button" onClick={navToContactDetails}>
              <MdRemoveRedEye />
            </button>
            <button type="button" onClick={navToContactEdit}>
              <MdEdit />
            </button>
            <button type="button" onClick={destroy}>
              <MdDelete />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default Contact;
