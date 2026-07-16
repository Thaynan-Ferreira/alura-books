import Logo from "../Logo";
import IconesHeader from "../IconesHeader";
import OpcoesHeader from "../OpceosHeader";


function Header(){
    return (
        <header className="App-header">
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </header>
    )
}

export default Header