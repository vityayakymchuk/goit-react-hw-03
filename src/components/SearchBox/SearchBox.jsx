import css from './SearchBox.module.css'
import { useId } from "react";

export default function SearchBox({ value, onChange }) {
    const id = useId();
  return (
      <div>
          <p className={css.name}>Find contacts by name</p>
          <input id={id} className={css.input} type="text" value={value} onChange={onChange} />
    </div>
  )
}   
