import React from 'react';
import './Contact.css';
import Form from './form/Form';
function ContactUs() {
  return (
    <div className='container'>
      <div className='text-center'>
        <h1 >Contact Us</h1>
        <p>We are here to answer questions you may have about our services. Reach out to us and we will respond as soon  as we can.</p>
        <p>You can as well contact us if there is anything you have wanted to experience and can't find in our services. Let us know and we promise you that we will do out best to take a prompt action on such request.</p>
      </div>
      <div className='row'>
          <div className='column'>
            <Form />
          </div>
          <div className='column details'>
            <p>E-MAIL</p>
            <p>reactgroup14@sidehustleinternship.ng</p>
            <p>TELEPHONE</p>
            <p>proposed phone number</p>
            <p>ADDRESS</p>
            <p>the proposed address will be here</p>
          </div>
      </div>
    </div>
  )
}

export default ContactUs