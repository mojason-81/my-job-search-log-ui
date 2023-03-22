import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewContact.module.css';

function NewContact() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="contactedOn">Contacted On</label>
          <input type="date" id="contactedOn" name="contacted_on" />
        </p>
        <p>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" />
        </p>
        <p>
          <label htmlFor="contactPoint">Contact Point</label>
          <input type="text" id="contactPoint" name="contact_point" />
        </p>
        <p>
          <label htmlFor="contactType">Type</label>
          <input type="text" id="contactType" name="contact_type" />
        </p>
        <p>
          <label htmlFor="followUpOn">Follow Up On</label>
          <input type="date" id="followUpOn" name="follow_up_on" />
        </p>
        <p>
          <label htmlFor="meetOn">Meet On</label>
          <input type="date" id="meetOn" name="meet_on" />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewContact;

export async function action({ request }) {
  console.debug(request);
  const formData = await request.formData();
  console.debug(formData);
  const contactData = Object.fromEntries(formData);
  console.debug(contactData);
  await fetch('http://localhost:3000/contacts', {
    method: 'post',
    body: JSON.stringify(contactData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
