import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'/>
                <h2 className='mb-0 text-white'> Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div class="input-group">
                <input 
                  type="text" 
                  class="form-control py-1" 
                  placeholder="Your Email Address " 
                  aria-label="Your Email Address " 
                  aria-describedby="basic-addon2" 
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'> Contact Us </h4>
              <div>
                <address className='text-white fs-6'> Madagascar, <br /> Antananarivo - Antananarivo, <br/> 101 </address>
                <a href='tel: +261 38 79 205 85' className='mt-4 d-block mb-3 text-white'> +261 38 79 205 85 </a>
                <a href='mailto:eTsena_Mada@gmail.mg' className='mt-2 d-block mb-0 text-white'> eTsena.Mada@gmail.mg </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='' alt='social_icons'>
                    <BsLinkedin></BsLinkedin>
                  </a>
                  <a className='text-white' href='' alt='social_icons'>
                    <BsFacebook></BsFacebook>
                  </a>
                  <a className='text-white' href='' alt='social_icons'>
                    <BsInstagram></BsInstagram>
                  </a>
                  <a className='text-white' href='' alt='social_icons'>
                    <SiGmail></SiGmail>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'> Information </h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'> Account </h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'> Quick Links </h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tables</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center text-white'>&copy; {new Date().getFullYear()}; Powered by E-Tsena </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;