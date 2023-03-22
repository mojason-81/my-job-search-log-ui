import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './ContactDetails.module.css';

function ContactDetails() {
  const contact = useLoaderData();

  if (!contact) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find contact</h1>
          <p>Unfortunately, the requested contact could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const standardDate = (date) =>
    new Date(date).toLocaleString('en-US', dateOptions);

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{contact.company}</p>
        <p className={classes.text}>{contact.contact_point}</p>
        <p className={classes.text}>{standardDate(contact.contacted_on)}</p>
        <p className={classes.text}>{standardDate(contact.follow_up_on)}</p>
        <p className={classes.text}>{standardDate(contact.meet_on)}</p>
      </main>
    </Modal>
  );
}

export default ContactDetails;

export async function loader({ params }) {
  console.debug('http://localhost:3000/contacts/' + params.id);
  const response = await fetch('http://localhost:3000/contacts/' + params.id);
  const resData = await response.json();
  return resData;
}
