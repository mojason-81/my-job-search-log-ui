import { Link, redirect, useFetcher } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewContact.module.css';
import { Formik, Form, Field } from 'formik';

function NewContact() {
  const fetcher = useFetcher();

  const company = {};
  return (
    <Modal>
      <Formik
        initialValues={{
          contact: {
            contacted_on: '',
            company: {
              name: '',
              url: '',
            },
            contact_point: '',
            contact_type: '',
            follow_up_on: '',
            meet_on: '',
          },
        }}
        onSubmit={(values, x) => {
          fetch('http://localhost:3000/contacts', {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(
            () => {
              // A bit hacky, but this will get the action to fire so
              // we can actually redirect to the correct route and get
              // it's loader to execute.  For whatever reason, just
              // using navigate() or redirect() here either doesn't
              // actually nav to the route, or doesn't cause the loader
              // to execute.
              fetcher.submit({ idle: true }, { method: 'post' });
            },
            (e) => {
              // TODO: Actually do something with an error.
              alert(e);
            }
          );
        }}>
        {/* TODO: I think I can remove the method here. */}
        <Form method="post" className={classes.form}>
          <p>
            <label htmlFor="contactedOn">Contacted On</label>
            <Field id="contactedOn" type="date" name="contact.contacted_on" />
          </p>
          <p>
            <label htmlFor="companyName">Company</label>
            <Field id="companyName" name="contact.company.name" />
          </p>
          <p>
            <label htmlFor="companyUrl">Company Website</label>
            <Field id="companyUrl" name="contact.company.url" />
          </p>
          <p>
            <label htmlFor="contactPoint">Contact Point</label>
            <Field id="contactPoint" name="contact.contact_point" />
          </p>
          <p>
            <label htmlFor="contactType">Type</label>
            <Field id="contactType" name="contact.contact_type" />
          </p>
          <p>
            <label htmlFor="followUpOn">Follow Up On</label>
            <Field id="followUpOn" type="date" name="contact.follow_up_on" />
          </p>
          <p>
            <label htmlFor="meetOn">Meet On</label>
            <Field id="meetOn" type="date" name="contact.meet_on" />
          </p>

          <p className={classes.actions}>
            <Link to=".." type="button">
              Cancel
            </Link>
            <button type="submit">Submit</button>
          </p>
        </Form>
      </Formik>

      {/* <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="contactedOn">Contacted On</label>
          <input type="date" id="contactedOn" name="contacted_on" />
        </p>
        <p>
          <label htmlFor="companyName">Company</label>
          <input type="text" id="companyName" name="company[name]" />
        </p>
        <p>
          <label htmlFor="companyUrl">Company Website</label>
          <input type="text" id="companyUrl" name="company[url]" />
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
      </Form> */}
    </Modal>
  );
}

export default NewContact;

export async function action(thing) {
  return redirect('/');
}
