import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
    <p>Unbox your happiness!</p>
    <p className="icons">
      <AiFillInstagram />
      <AiOutlineTwitter />
    </p>
  </div>
  )
}

export default Footer
