import './style.css';
import Logo from '../../assets/img/logo.svg';
export default function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={ Logo } alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a target="_blank" href="https://www.github.com/gilbertoaleite">@GilbertoAleite</a>
                </p>
            </div>
        </header>
    )
}