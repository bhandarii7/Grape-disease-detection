import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import yash from '../../Images/yash.jpg';
import aviral from '../../Images/aviral.jpg';
import ayush from '../../Images/ayush.jpg';
import './About.css';

export default function About(){
    return (
     <>
     <h1 className="team-heading" >The Team</h1>
     <br />
     <div className="container-name">
      <div>
        <img className="profiles"  src={yash} alt="" />
        <h4 className="names" >Yash</h4>
      </div>
      <div>
        <img className="profiles" src={aviral} alt="" />
        <h4 className="names" >Aviral</h4>
      </div>
      <div>
        <img className="profiles" src={ayush} alt="" />
        <h4 className="names" >Ayush</h4>
      </div>
     </div>
     </>
    );
};
