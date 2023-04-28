import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter)
  );

  return (
    <ul className="Contact__list">
      {visibleContacts.map(contact => {
        return (
          <ContactItem
            key={contact.name}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
}
