import { useLoaderData, Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

import Modal from '../components/Modal';
import classes from './ContactDetails.module.css';

function ContactEdit() {
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

  return (
    <Modal>
      <ContactForm contact={contact} isUpdating={true} />
    </Modal>
  );
}

export default ContactEdit;
