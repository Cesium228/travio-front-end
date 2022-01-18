import { Link } from "react-router-dom";
import MainLogo from "../assets/images/mainLogo.png";
import MainLogo2 from "../assets/images/mainLogo2.svg"
import InstagramLogo from "../assets/images/instLogo.svg";
import TelegramLogo from "../assets/images/telLogo.svg";

function Header() {
    return(
        <header className={"header"}>
            <div className={"login-bar mt-4"}>
                <div className="container">
                    <div className={"login-bar-container d-flex justify-content-end"}>
                        <div className="d-flex social-and-order">
                            <a className={"social-link"} href=" "><img src={InstagramLogo} alt=""/></a>
                            <a className={"social-link"} href=" "><img src={TelegramLogo} alt=""/></a>
                            <a className={"create-order-link"} href=" ">Создать заявку</a>
                        </div>
                        <div className="d-flex registration-and-login">
                            <a className={"registration-link"} href=" ">Регистрация</a>
                            <a className={"login-link"} href=" ">Вход</a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid g-0">
                    <Link className="navbar-brand" to="/">
                        <img src={MainLogo} alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/o-projekte"}>О проекте</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/spisok-pererabotchikov"}>Список переработчиков</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/interaktivnaya-karta"}>Интерактивная карта</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/ekotovari"}>Экотовары</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/faq"}>FAQ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/novosti"}>Новости</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/kontakty"}>Контакты</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={"container test-class"}>
                <div className="row">
                    <div className="col-md-4 d-flex align-content-around flex-wrap">
                        <p><b>TraVio</b> - автоматизированное решение, призванное упростить процесс переработки отходов для предприятий</p>
                    </div>
                    <div className="col-md-5 offset-md-3">
                        <img src={MainLogo2} alt=""/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;