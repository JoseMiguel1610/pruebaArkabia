function Nota(props) {
    const { nombre, sub, hora, encargado, color } = props;
    return (
        <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginTop: 20, background: "#fff9", padding: "5px", borderLeft: `4px solid ${color}` }}>
            <span>{nombre}</span>
            <span>{sub}</span>
            <span>{hora}</span>
            {encargado ?
                <span>{encargado}</span>
                :
                null

            }
        </div>
    );
}

export default Nota;