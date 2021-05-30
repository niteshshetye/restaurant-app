import React, { Component } from 'react'
// rout 
import { 
  Link
} from "react-router-dom";
// font awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
// react bootstrap libraty
import {Navbar,Nav} from  "react-bootstrap"

export default class NavbarMenu extends Component {
    render() {
        return (
            <div>
                {/* Navbar start */}
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Nitesh Resto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#"><Link to="/"><FontAwesomeIcon icon = {faHome} /> Home</Link></Nav.Link>
                    <Nav.Link href="#"><Link to="/list"><FontAwesomeIcon icon = {faList} /> List</Link></Nav.Link>
                    <Nav.Link href="#"><Link to="/create"><FontAwesomeIcon icon = {faPlus} /> Create</Link></Nav.Link>
                    <Nav.Link href="#"><Link to="/search"><FontAwesomeIcon icon = {faSearch} /> Search</Link></Nav.Link>
                    {
                        localStorage.getItem('login')? <Nav.Link href="#"><Link to="/logout"><FontAwesomeIcon icon = {faUser} /> LogOut</Link></Nav.Link>: <Nav.Link href="#"><Link to="/login"><FontAwesomeIcon icon = {faUser} /> Login</Link></Nav.Link>
                    }
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                {/* Navbar end */}
            </div>
        )
    }
}
