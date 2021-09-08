import { Image, Navbar, Tab, Row, Col, Nav, NavDropdown, Modal, Button, Form, Table } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core';
import Card from "./components/card"
import eloy from "../../../images/icono/eloy.png"
import julissa from "../../../images/icono/julissa.png"

const Inventario = () => {
    return (
        <div>
            <Card title="Carros de juguete para navidad" lugar="Fábrica" fecha="19/04/2021" color="#fff">
                <div>
                <Table>
                    <thead>
                        <tr style={{ background: "#fff0cf"}}>
                            <th>Equipo</th>
                            <th>Órden</th>
                            <th>Turno</th>
                            <th>Precio</th>
                            <th>Último mensaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ background: "#ffdfa3"}}>
                            <td>DeChinaAPeru.com</td>
                            <td>#3272817287128</td>
                            <td><div style={{display: "flex", gap: "5px"}}><Image src={eloy}></Image><span>Eloy</span></div></td>
                            <td>PEN S/ 200.00</td>
                            <td>Victor: Completa el paso 1 de requerimientos</td>
                        </tr>
                        <tr style={{ background: "#ffe6b8"}}>
                            <td>Grupo Aduan Agencia de Aduana</td>
                            <td>#92382323233</td>
                            <td><div style={{display: "flex", gap: "5px"}}><Image src={julissa}></Image><span>Julissa</span></div></td>
                            <td>USD $ 8,331.79</td>
                            <td>Victor: Completa el paso 1 de requerimientos</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </Card>
            <Card title="Cilindros de oxígeno" lugar="Fábrica" fecha="19/04/2021" color="#fff" />
            <Card title="Mascarillas KN95" lugar="Fábrica" fecha="19/04/2021" color="#fff" />
            <Card title="Termómetros infrarrojos y accesorios" lugar="Fábrica" fecha="19/04/2021" color="#def746" />
            <Card title="Bicicletas eléctricas" lugar="Fábrica" fecha="19/04/2021" color="#57d8d8" />
            <Card title="Zapatillas colores variados" lugar="Fábrica" fecha="19/04/2021" color="#fff" />
            <Card title="Artículos escolares" lugar="Fábrica" fecha="19/04/2021" color="#ffe1b7" />
        </div>
    )
}

export default Inventario