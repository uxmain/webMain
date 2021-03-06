import React, { useState } from 'react';
import './ContactUs.css';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button,  Form } from "react-bootstrap";


const ContactUs = () => {


    const [formData, setFormData] = useState({});
    const onBlurHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newFormData = { ...formData };
    newFormData[name] = value;
    setFormData(newFormData);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
    return (
        <div className='ContactUs'>

          <div className="Container">
            
            <h1>Connect Me</h1>
            <div className="line1"></div>


<Grid container spacing={2}>
        <Grid sx={{marginTop: '100px'}} className='ContactText' item xs={4} md={4}>
        
        

            <div className="call">
            <p> <MailIcon className='Icon' />maynuddinbhu14grm@gmail.com  </p>
                <p> <LocationOnIcon className='Icon' />  Mirpur 1, Dhaka, Bangladesh,</p>
                <p> <PhoneIcon className='Icon' /> +088 1908145097</p>
                
                
            </div>

        </Grid>
        <Grid sx={{marginTop: '100px'}} className='ContactImage' item xs={8} md={8}>
        <div className="ticket-booking-container">
          
          <form className="mt-4" onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Full name</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="text"
                placeholder="Type your name"
                name="name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">email</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="email"
                placeholder="Type your email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Number</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="number"
                placeholder="Type your number"
                name="number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Date</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="date"
                placeholder="Type your date"
                name="date"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Business Name</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                type="text"
                placeholder="The Business is called..."
                name="city"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0">Message</Form.Label>
              <Form.Control
                onChange={onBlurHandler}
                as="textarea"
                rows={3}
                placeholder="Please provide me more information"
                name="address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 input-box">
              <Form.Label className="mb-0"></Form.Label>
              <Button className="fw-bold w-100" type="submit">
                SUBMIT
              </Button>
            </Form.Group>
          </form>
        </div>
      

        </Grid>
      </Grid>







      </div>


        </div>
    );
};

export default ContactUs;