import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export function ContactItem({ name, number }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteContact(name));
    Notify.failure(`${name} is deleted`);
  };

  return (
    <li className="Contact__item">
      <p className="Contact__item--text">{name}: </p>
      <p className="Contact__item--text">{number}</p>
      <button className="Delete__btn" type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
