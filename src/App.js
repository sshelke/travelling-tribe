
import './App.css';

import React from 'react';
import "./styles.css";

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import KnowUs from './components/pages/KnowUs';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';



function App() {
  return(
   <>
   <Router>
      <Navbar></Navbar>
      <switch>
        <Route path='/' exact component={Home}/>
        <Route path='/knowus' component={KnowUs}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/signup' component={SignUp}/>
      </switch>

      </Router>
   </>
  );
}

// function App() {

//   const contacts = [
//     { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
//     { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
//     { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
//     { name: "Amy McDonald", email: "amy@email.com", age: 33 }
//   ];

//   return (
//     <div className="App">
//         <>
//     {contacts.map(contact => (
//       <ContactCard
//         avatar="https://via.placeholder.com/150"
//         name={contact.name}
//         email={contact.email}
//         age={contact.age}
//       />
//     ))}
//   </>
//       {/* <button onClick={Counter.IncrementItem}>
//         Increament
//       </button>
//       <button onClick={Counter.DecrementItem}>
//         Decrement
//       </button>
//       <button onClick={Counter.ToggleClick}>{this.state.show? 'Hide Number': 'Show Number'}</button>

//       {this.state.show?<h2>{this.state.clicks}</h2>:''} */}
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }



export default App;
