import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';
import classes from './ContactsList.module.css';

function ContactsList() {
  const contacts = useLoaderData();

  return (
    <>
      {contacts.length > 0 && (
        // Turn this into a <table>
        <div className={classes.contacts}>
          <div>
            <div>Company</div>
            <div>Contact Point</div>
            <div>Contacted On</div>
            <div>Follow Up On</div>
            <div>Meet On</div>
          </div>
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
        </div>
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
