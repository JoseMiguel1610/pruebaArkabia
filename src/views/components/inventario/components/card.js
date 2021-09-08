import { Image, Navbar, Tab, Row, Col, Nav, NavDropdown, Modal, Button, Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';
import check from "../../../../images/icono/check.svg"
import factory from "../../../../images/icono/factory.png"
const Card = (props) => {
    const { title, lugar, fecha, color, children } = props;
    console.log(children);
    return (
        <div style={{ marginBottom: 20, backgroundColor: color, borderRadius: 20}}>
            <section style={{ display: "flex", justifyContent: "space-between",padding: "10px 20px" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                    <Image src={check}></Image>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <span>{title}</span>
                        <span>Importación</span>
                    </div>
                </div>
                <article style={{ display: "flex", gap: "25px", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <Image src={factory} style={{ width: "40px"}}></Image>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <span>Mi cargo está en</span>
                            <span>{lugar}</span>
                        </div>
                    </div>
                    <span>{fecha}</span>
                </article>
            </section>
            {children}
        </div>
    )
}

export default Card
