import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import logo from './Logo_Floating_TT.png';
import './Navbar.css'


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const showButton=() =>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton();
    },[]);

    window.addEventListener('resize',showButton);
   

    return (
        
        <nav className="navbar navbar-expand-lg">
            <div className='navbar-container'>
                
                <Link to='/' className='navbar-logoTT' onClick={closeMobileMenu}>
                    {/* TRVL <i className='fas fa-route'/> */}
                    <img src={logo} alt="Logo" className='navbar-logoTT'/>
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/knowus' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                        </li>
                        {/* <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>                 */}
                </ul>
                {/* {button &&<Button buttonStyle='btn--outline'> SIGN UP</Button>} */}
            </div>
        </nav>


  


    );
}

export default Navbar


{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo} alt="" width="75"/>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/knowus">Know Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Contact</a>
        </li>
      </ul>
        
    </div>
</div>
    

</nav> */}