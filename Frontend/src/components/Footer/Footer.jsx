import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Craving a delicious meal but don’t feel like cooking? Tomato has got you covered! 
                    We are your one-stop destination for mouth-watering dishes delivered straight to your door. 
                    Whether you're in the mood for a comforting pasta, a noodles, 
                    or an exotic dish from a faraway land, Tomato brings the world’s cuisines to your fingertips.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 907-854-7771</li>
                        <li>adisubham@gmail.com</li>
                    </ul>
                </div>


            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024
                @ Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer