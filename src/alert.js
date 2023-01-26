import * as React from 'react';
import Alert from 'react-bootstrap/Alert';

function Example() {
    return (
      <div className="App">
        <div className="menu">
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            hashSpy={true}
            activeClass="active"
            to="home"
          >
            Home
          </Link>
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            activeClass="active"
            to="about"
            hashSpy={true}
          >
            About
          </Link>
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            activeClass="active"
            hashSpy={true}
            to="services"
          >
            Services
          </Link>
          <Link
            smooth={true}
            spy={true}
            offset={-100}
            activeClass="active"
            hashSpy={true}
            to="contact"
          >
            Contact
          </Link>
        </div>
        <div className="main">
          <div className="section" name="home">
            Home
          </div>
          <div className="section" name="about">
            About
          </div>
          <div className="section" name="services">
            Services
          </div>
          <div className="section" name="contact">
            Contact
          </div>
          <div className="section" name="empyty">
            Empty
          </div>
        </div>
      </div>
    );
  
}