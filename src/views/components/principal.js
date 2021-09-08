import { Image, Navbar, Tab, Row, Col, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';
import lupa from "../../images/icono/lupa.svg"
import check from "../../images/icono/check.svg"
import uncheck from "../../images/icono/uncheck.svg"
import Inventario from './inventario/inventario';
import Calendario from './inventario/components/calendario';
import Dropdown from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
const styles = makeStyles(() => {
    return {
        navOption: {
            display: "flex",
            padding: "5px"
        },
        navLink: {
            fontSize: "14px",
            fontWeight: "bolder",
            color: "rgba(0,0,0,.55)",
            position: "relative",
            "&:hover": {
                color: "rgba(0,0,0,.7)"
            },
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
        },
        searchFilter: {
            display: "flex",
            padding: "5px",
            alignItems: "center",
            gap: "15px",
            position: "relative"
        },
        section: {
            display: "flex",
            gap: "20px",
            padding: "5px",
            background: "#fff9",
            borderRadius: "20px"
        }
    }
});


function Principal() {

    const classes = styles();

    const [initial, setInitial] = useState(true);
    const [dato, setDato] = useState("");

    const handleClickPrueba = (e, dato) => {
        console.log(dato);
        setDato(dato)
        setInitial(false)
    }

    return (
        <div style={{ padding: "15px", display: "flex", justifyContent: "space-around" }}>
            <section >
                <Nav className={classes.navOption}>
                    <Nav.Link className={classes.navLink}>Órdenes Compradas</Nav.Link>
                    <Nav.Link className={classes.navLink}>Calendario</Nav.Link>
                </Nav>
                <section style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px" }}>
                    <article className={classes.searchFilter}>
                        <section className={classes.section}>
                            <div>
                                <select style={{ border: 0, backgroundColor: "transparent", padding: "5px", fontWeight: "bold" }}>
                                    <option>Preferencias</option>
                                </select>
                            </div>
                            <div>
                                <span>Ordenar por</span>
                                <select style={{ border: 0, backgroundColor: "transparent", padding: "5px", fontWeight: "bold" }}>
                                    <option>Relevancia</option>
                                </select>
                            </div>
                        </section>
                        <span style={{ borderRadius: "20px", background: "#fff9", padding: "10px", height: "100%" }}><Image src={lupa}></Image></span>
                    </article>
                    <div style={{ border: 0, borderRadius: 20, background: "#403b12", color: "#fff", padding: "5px 40px" }}>
                        <DropdownButton id="dropdown-item-button" title="+ Agregar operación">
                            <Dropdown.ItemText><span style={{ textAlign: "center" }}>Elige una opción</span></Dropdown.ItemText>
                            <Dropdown.Item as="button"><div style={{ display: "flex", gap: "5px", backgroundColor: "#f7e246", padding: "5px 20px", borderRadius: 5 }}><Image src={check} /><span>Importación</span></div></Dropdown.Item>
                            <Dropdown.Item as="button"><div style={{ display: "flex", gap: "5px", backgroundColor: "#f7e246", padding: "5px 20px", borderRadius: 5 }}><Image src={uncheck} /><span>Exportación</span></div></Dropdown.Item>
                            <Dropdown.Item as="button"><div style={{ backgroundColor: "#f7e246", padding: "5px 20px", borderRadius: 5, textAlign: "center" }}><span>Servicio Local</span></div></Dropdown.Item>
                        </DropdownButton>
                    </div>

                </section>
                <Inventario />
            </section>
            <Calendario></Calendario>
        </div>
    );
}

export default Principal;
