import {useState} from 'react';

const ContactCard = props => {

    const [showAge, setShowAge] = useState(true);
  
    return (
    //   <div className="contact-card">
    //     <div className="user-details">
      // <div  class="container">
      //   <div class="row">
      //     <div class="col-lg-6">
      //     <img src="https://via.placeholder.com/150" alt="profile" />
      //     </div>
      //     <div class="col-lg-6">
      //     <p>{props.name}</p>
      //     <p>{props.title}</p>
      //     </div>
      //     </div>
      // </div>

      
    //      <button onClick={() => setShowAge(!showAge)}>
    //     	Toggle Age 
    //     </button> 
    // {showAge && <p> {props.age}</p> }
    //      </div>
    //   </div>


    <div class="card mb-3" styles="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
             <img src={props.avatar} alt="profile" class='img-thumbnail img-fluid w-75 p-3 h-75 d-inline-block'/>
           </div>
           <div class="col-md-8">
              <div class="card-body">
                  <h5 class="card-title">{props.name}</h5>
                  <p class="card-text">{props.title}</p>
                  <p class="card-text ">{props.description}</p>
                   {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
                   {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
           </div>
      </div>
  </div>

    );
  };
  export default ContactCard;