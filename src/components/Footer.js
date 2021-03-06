import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
import logo from './Logo_Floating_TT.png';

function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can subscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder="Your Email" classname='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>

                    </form>
                </div>
            </section> */}
            
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        {/* <Link to='/sign-up'>How it works</Link> */}
                        <Link to='/'>Testimonials</Link>
                        {/* <Link to='/'>Careers</Link> */}
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            {/* <Link to='/'>Support</Link> */}
            <Link to='/'>Destinations</Link>
            {/* <Link to='/'>Sponsorships</Link> */}
          </div>
                </div>
                <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            {/* <Link to='/'>Ambassadors</Link> */}
            {/* <Link to='/'>Agency</Link> */}
            {/* <Link to='/'>Influencer</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
            </div>

            <section className='social-media' >
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            {/* TRVL <i className='fab fa-typo3'/> */}
                            <img src={logo} alt="Logo" className='social-logo'/>
                        </Link>
                    </div>
                    <small className='website-rights'> &#169;2021 by Travelling Tribe. All Copyrights Reserved. </small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' targets='_blanks' aria-label='Facebook'>       
                        <i className='fab fa-facebook-f'></i>     
                        </Link>
                        <Link className='social-icon-link instagram' to='/' targets='_blanks' aria-label='Instagram'>       
                        <i className='fab fa-instagram'></i>     
                        </Link>
                        <Link className='social-icon-link linkedin' to='/' targets='_blanks' aria-label='LinkedIn'>       
                        <i className='fab fa-linkedin'></i>     
                        </Link>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer

