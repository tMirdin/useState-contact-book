import React from "react";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.lastName}</li>
          <img src={item.photo} alt="photo" className="imgContact" />
          <li>
            <button onClick={() => props.handleDeleteContact(item.id)}>
              Delete
            </button>
            <button onClick={() => props.handleEditIndex(index)}>Edit</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
