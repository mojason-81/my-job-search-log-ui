import { Outlet } from 'react-router-dom';
import ContactsList from '../components/ContactsList';

function Contacts() {
  return (
    <>
      <Outlet />
      <main>
        <ContactsList />
      </main>
    </>
  );
}

export default Contacts;

export async function loader() {
  const sortByDate = (a, b) =>
    new Date(a.contacted_on) - new Date(b.contacted_on);

  const response = await fetch('http://localhost:3000');
  const resData = await response.json();
  return resData.sort(sortByDate);
}
