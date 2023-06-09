import { Outlet } from 'react-router-dom';
import CompanyContacts from '../components/CompanyContacts';

function Contacts() {
  return (
    <>
      <Outlet />
      <main>
        <CompanyContacts />
      </main>
    </>
  );
}

export default Contacts;

export async function loader({ params }) {
  const response = await fetch('http://localhost:3000/companies/' + params.id);
  const resData = await response.json();
  return resData;
}
