import css from './Contact.module.css'
import { FaUser, FaPhone } from "react-icons/fa";

export default function Contact({ contact, onClick}) {
  return (
      <div className={css.listItem}>
          <div className={css.contact}>
            <span><FaUser />   {contact.name}</span>
            <span><FaPhone />   {contact.number}</span>
          </div>
          <button type='button' className={css.btn} onClick={() => {onClick(contact.id)}}>Delete</button></div>
  )
}
