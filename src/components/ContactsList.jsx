import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';
import classes from './ContactsList.module.css';

function ContactsList() {
  const contacts = useLoaderData();

  return (
    <>
      {contacts.length > 0 && (
        // Turn this into a <table>
        <table className={classes.contactsList}>
          <thead className={classes.header}>
            <tr>
              <th>Company</th>
              <th>Contact Point</th>
              <th>Contacted On</th>
              <th>Contact Type</th>
              <th>Follow Up On</th>
              <th>Meet On</th>
              <th>{/* Column for action buttons */}</th>
            </tr>
          </thead>
          {contacts.map((contact, index) => (
            <Contact
              key={contact.id}
              id={contact.id}
              index={index}
              company={contact.company || {}}
              contactPoint={contact.contact_point}
              contactedOn={contact.contacted_on}
              contactType={contact.contact_type}
              followUpOn={contact.follow_up_on}
              meetOn={contact.meet_on}
            />
          ))}
        </table>
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
