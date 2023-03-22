import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';
import classes from './ContactsList.module.css';

function ContactsList() {
  const contacts = useLoaderData();

  return (
    <>
      {contacts.length > 0 && (
        <ul className={classes.contacts}>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              company={contact.company}
              contactPoint={contact.contact_point}
              contactedOn={contact.contacted_on}
              followUpOn={contact.follow_up_on}
              meetOn={contact.meet_on}
            />
          ))}
        </ul>
      )}

      {contacts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no contacts yet.</h2>
          <p>Start adding them</p>
        </div>
      )}
    </>
  );
}

export default ContactsList;
