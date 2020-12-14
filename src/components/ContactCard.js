import {useState} from 'react';

const ContactCard = props => {

    const [showAge, setShowAge] = useState(true);
  
    return (
      <div className="contact-card">
        <img src="https://via.placeholder.com/150" alt="profile" />
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.title}</p>
          <button onClick={() => setShowAge(!showAge)}>
        	Toggle Age 
        </button>
          {showAge && <p>Age: {props.age}</p> }
        </div>
      </div>
    );
  };
  export default ContactCard;