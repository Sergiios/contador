export default function Button(props) {

    const estilo = {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 25px",
        fontSize: "25px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "20px",
        borderRadius: "12px",
    }

    return (
        <button onClick={props.evento} style={estilo}>{props.nome}</button>
    )
}