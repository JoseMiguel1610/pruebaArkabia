import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import React, { useState } from 'react';
import Nota from './notas';
function Calendario() {

    const [value, onChange] = useState(new Date());
    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
            <CalendarComponent />
            <section style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                <span>Para hoy</span>
                <a href="" style={{ textDecoration: "none"}}>+ Agregar evento</a>
            </section>
            <Nota color="#2d9cdb" nombre="Presentacion de empaques nueva marca" sub="Oficina" hora="8:30 - 9:30" />
            <Nota color="#000000" nombre="Presentacion de empaques nueva marca" sub="Oficina" hora="8:30 - 9:30" encargado="Kristhian y tú" />
            <Nota color="#57d8d8" nombre="Presentacion de empaques nueva marca" sub="Oficina" hora="8:30 - 9:30" />
        </div>
    );
}

export default Calendario;