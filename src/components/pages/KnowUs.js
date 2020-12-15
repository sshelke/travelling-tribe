import React from 'react'
// import '../../App.css'
import ContactCard from '../ContactCard';
import './KnowUs.css'
import Footer from '../../components/Footer.js';
import {contacts} from './Data';

function KnowUs() {

  // const contacts = [
  //   { name: "Sheetal Shelke", title: "Naturalist & Himalayan Trek Leader", description: "", avatar:"images/img-7.jpg" },
  //   { name: "Omkar Shelke", title: "Naturalist", avatar:"images/img-7.jpg" },
  //   { name: "Sachin G", title: "Adventure & Rescue Expert - Sahyadris", avatar:"images/img-7.jpg" },
  //   { name: "Pyare Lal T", title: "Adventure, Expedition & Rescue Expert - Himalayas", avatar:"images/img-7.jpg" }
  // ];

  return (
    <div className='container-fluid'>
      
      <blockquote class='blockquote text-center bg-gradient-light text-dark mt-5 mb-5' >
       
        <p></p>
        <p>Travelling tribe is the success story of 15+ years of travel experience in Indian Forests and Himalayas.</p>

        <p>Sheetal has taken up her love & passion for travelling as a profession and has recently started her eco- travel company in the name of Travelling Tribe. We at Travelling Tribe are very focused on what we do. Focus is mainly on Himalayan treks, wildlife tours and outdoor education.  We are a team of outdoor enthusiasts and have been passionately working in the outdoors  for several years. <em>We Live For Outdoors</em>. And hence we focus on experiential learning  as we believe wilderness is a therapy in itself.</p>

        <p>We believe taking an experience back home is most important than just the memories and photos. Also, being a solo backpacker, through Travelling Tribe, Sheetal intends to  connect with locals, promote homestays for their livelihood, break taboo to encourage women to travel solo.</p>
        <p></p>
      
      </blockquote>
      <div>

        {contacts.map(contact => (
          <ContactCard
            avatar={contact.avatar}
            name={contact.name}
            title={contact.title}
            description={contact.description}
          />
        ))}

      </div>
          <Footer></Footer>

      { /* <div className='cards'>
                 {contacts.map(contact => (
                  <ContactCard
                    avatar="https://via.placeholder.com/150"
                    name={contact.name}
                    email={contact.title}
                    age={contact.age}
                  />
                ))}
              </div>*/}
    </div>

  )
}


export default KnowUs
