import React, { Component } from 'react';
import { Image, Navbar, Tab, Row, Col, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import logo_nav from '../../images/icono/arkabia.png';
import avatar from '../../images/icono/avatar.png';
import mas from '../../images/icono/mas.png';
import correo from '../../images/icono/correo.png';
import campana from '../../images/icono/campana.png';
import '../styles/Custom.css';

const styles = makeStyles(() => {
    return {
        navMain: {
            display: "flex",
            justifyContent: "space-between",
            background: "linear-gradient(40deg, rgba(249,201,68,1) 0%, rgba(241,254,110,1) 100%)"
        },
        containerIcons: {
            display: "flex",
            gap: "35px",
            alignItems: "center"
        },
        link: {
            position: "relative",
            "&::after": {
                display: "block",
                content: "attr(div)",
                position: "absolute",
                top: "100%",
                left: "50%",
                width: "0px",
                height: "5px",
                backgroundColor: "#000",
                borderRadius: "3px",
                transform: "translateX(-50%)",
                transition: "0.4s"
            },
            "&:hover::after": {
                width: "30%"
            }
        }
    }
})



const NavBar = () => {

    const classes = styles();

    return (
        <div>
            <Navbar className={classes.navMain} expand="lg">
                <Navbar.Brand href="/"><Image src={logo_nav} style={{ width: "335px", height: "22px" }}></Image></Navbar.Brand>
                <Nav className="nav-options">
                    <Nav.Link className={classes.link}>Noticias</Nav.Link>
                    <Nav.Link className={classes.link} >Servicios</Nav.Link>
                    <Nav.Link className={classes.link}>Panel principal</Nav.Link>
                    <div className={classes.containerIcons}>
                        <Nav.Link >
                            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <span>Ernesto</span>
                                <Image src={avatar}></Image>
                            </div>
                        </Nav.Link>
                        <Nav.Link >
                            <Image src={mas}></Image>
                        </Nav.Link>
                        <Nav.Link >
                            <Image src={correo}></Image>
                        </Nav.Link>
                        <Nav.Link >
                            <Image src={campana}></Image>
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar>

        </div>
    );
}

export default NavBar;