import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <button
            className={style.btn}
            type="button"
            id={contact.id}
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
