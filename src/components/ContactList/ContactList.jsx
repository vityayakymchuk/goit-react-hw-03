
import css from './ContactList.module.css';
import Contact from "../Contact/Contact";

export default function ContactList({ data, onClick}) {

  return (
    <ul className={css.list}>
      {data.map(contact => (
        <li key={contact.id}>
        <Contact contact={contact} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}