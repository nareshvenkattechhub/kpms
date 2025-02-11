import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5" style={{ marginTop: '10vh' }}>
      <div className="container" style={{ borderRadius: '15px', padding: '2rem', background: '#2b2b2b' }}>
        <div className="row" style={{ borderRadius: '15px' }}>
          {/* Logo Section (First Column) */}
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div className="card rounded-3 text-dark p-3" style={{ background: 'linear-gradient(to bottom right, #f1c40f, #f39c12)' }}>
              <div className="text-center">
                <img
                  src="kpm.png"
                  alt="KPMPP Logo"
                  className="img-fluid mb-3"
                  style={{ maxHeight: '100px', objectFit: 'contain' }}
                />
                <p className="mt-3"><strong>KPMPP</strong></p>
              </div>
              <p className="text-center">Be a part of the change. Stand for progress, justice, and equality!</p>
              <button type="button" className="w-100 btn btn-dark btn-lg rounded-pill">
                Join Us
              </button>
            </div>
          </div>

          {/* About Section (Second Column) */}
          <div className="col-lg-2 mt-5 col-md-3 col-sm-6 col-12 mb-4">
            <div className="card rounded-3 align-items-center text-black fw-bold p-3" style={{ background: 'linear-gradient(to bottom right, #3498db, #2980b9)' }}>
              <h5 className='fs-3 fw-bold '>About</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-white">Preamble</Link></li>
                <li><Link to="/objectives" className="text-white">Objectives</Link></li>
                <li><Link to="/organization" className="text-white">Organization</Link></li>
              </ul>
            </div>
          </div>


   {/* Media Section (Fourth Column) */}
   <div className="col-lg-2 col-md-3  mt-5 col-sm-6 col-12 mb-4">
            <div className="card  fw-bold  rounded-3 text-white p-3" style={{ background: 'linear-gradient(to bottom right, #e74c3c, #c0392b)' }}>
              <h5>Media</h5>
              <ul className="list-unstyled">
                <li><Link to="/#news" className="text-white">Latest News</Link></li>
                <li><Link to="/#events" className="text-white">Upcoming Events</Link></li>
                <li><Link to="/#media-gallery" className="text-white">Media Gallery</Link></li>
              </ul>
            </div>
          </div>


          {/* Objectives Section (Third Column) */}
          <div className="col-lg-2 col-md-3  mt-5 col-sm-6 col-12 mb-4">
            <div className="card fs-bold rounded-3 align-items-center text-dark p-3" style={{ background: 'linear-gradient(to bottom right, #2ecc71, #27ae60)' }}>
              <h5>Join</h5>
              <ul className=" fw-bold list-unstyled">
                <li><Link to="/#objective1" className="text-white">Work for us </Link></li>
                <li><Link to="/#objective2" className="text-white">Locate office</Link></li>
              </ul>
            </div>
          </div>

       

          {/* Follow Us Section (Fifth Column) */}
          <div className="col-lg-3 col-md-4 mt-5 col-sm-6 col-12 mb-4">
            <div className="card rounded-3 mt-3 text-white p-3" style={{ background: 'linear-gradient(to bottom right, #9b59b6, #8e44ad)' }}>
              <h5>Follow Us</h5>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://facebook.com/" className="text-white" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
                <a href="https://twitter.com/" className="text-white" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
                <a href="https://instagram.com/" className="text-white" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
                <a href="https://wa.me/" className="text-white" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={30} /></a>
                <a href="https://linkedin.com/" className="text-white" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
