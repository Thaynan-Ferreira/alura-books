import "./estilo.css";
const opcoes = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

function OpcoesHeader() {
    return (
        <ul className="opcoes">
          {opcoes.map((texto) => (
            <li className="opcao"><p>{texto}</p></li>
          ))}
        </ul>
    )
}

export default OpcoesHeader