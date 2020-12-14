import React from 'react'
// import '../../App.css'
import ContactCard from '../ContactCard';
import './KnowUs.css'

function KnowUs() {
   
    const contacts = [
        { name: "Sheetal Shelke", title: "Naturalist & Himalayan Trek Leader", description: "", age: 25 },
        { name: "Omkar Shelke", title: "Naturalist", age: 45 },
        { name: "Sachin G", title: "Adventure & Rescue Expert - Sahyadris", age: 100 },
        { name: "Pyare Lal T", title: "Adventure, Expedition & Rescue Expert - Himalayas", age: 33 }
      ];
      
    return (
       <div className='intro-container'>
        {/* <h1 className='services'>SERVICES</h1> */}
        <section className='intro-container'>
        Travelling tribe is the success story of 15+ years of travel experience in Indian Forests and Himalayas.

Sheetal has taken up her love & passion for travelling as a profession and has recently started her eco- travel company in the name of Travelling Tribe. We at Travelling Tribe are very focused on what we do. Focus is mainly on Himalayan treks, wildlife tours and outdoor education.  We are a team of outdoor enthusiasts and have been passionately working in the outdoors  for several years. WE LIVE FOR OUTDOORS. And hence we focus on experiential learning  as we believe wilderness is a therapy in itself.

We believe taking an experience back home is most important than just the memories and photos. Also, being a solo backpacker, through Travelling Tribe, Sheetal intends to  connect with locals, promote homestays for their livelihood, break taboo to encourage women to travel solo.
        </section>

            <div className='cards'>
                 {contacts.map(contact => (
                  <ContactCard
                    avatar="https://via.placeholder.com/150"
                    name={contact.name}
                    email={contact.title}
                    age={contact.age}
                  />
                ))}
              </div>
            </div>
    )
}

export default KnowUs
