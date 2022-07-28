import React, { useState } from "react";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [photo, setPhoto] = useState("");

  function handleClick() {
    let newContact = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
        value={name}
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="LastName"
        value={lastName}
      />
      <input
        onChange={(e) => setPhoto(e.target.value)}
        type="url"
        placeholder="URL Photo"
        value={photo}
      />
      <button onClick={handleClick}>Add contact</button>
    </div>
  );
};

export default AddContact;
