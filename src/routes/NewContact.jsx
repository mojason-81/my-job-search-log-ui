import { useFetcher } from 'react-router-dom';
import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';

function NewContact() {
  const fetcher = useFetcher();

  const company = {};
  return (
    <Modal>
      <ContactForm />
    </Modal>
  );
}

export default NewContact;
